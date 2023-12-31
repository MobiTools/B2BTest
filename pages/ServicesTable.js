import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import TableToolbar from "../components/ProcessTable/TableToolbar";

import IconInSelect from "../components/ProcessTable/IconInSelect";

import CustomTableContainer from "../components/ProcessTable/CustomTableContainer";
import { useStyles } from "../styles/ProcessTableStyles";
import {
  handleGetServices,
  writeEditService,
  writeServiceData,
} from "../utils/realtimeUtils";
import { getCurrentDateTime } from "../utils/timeUtils";
import { uploadImage, uploadImageServices } from "../utils/storageUtils";
import { auth, storage } from "../firebase";
import { getDatabase, ref, remove } from "firebase/database";
import {
  deleteObject,
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
  updateMetadata, // Import this module
} from "firebase/storage";

import AddServiceDialog from "../components/ProcessTable/AddServiceDialog";
import CustomServiceDialog from "../components/DialogBox/CustomServiceDialog";

export default function ServicesTable() {
  // const { db } = useMockup();
  const [isLoading, setIsLoading] = useState(false);
  const [db, setDb] = useState([]);
  const [dialogData, setDialogData] = useState({});
  const [showDialog, setShowDialog] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [showAddContract, setShowAddContract] = React.useState(false);
  const [openSoloPopup, setOpenSoloPopup] = React.useState(false);
  const settingsRef = React.useRef(null);
  const classes = useStyles();

  const handleServices = async () => {
    setIsLoading(true);
    const servicesDB = await handleGetServices();

    if (servicesDB) {
      setDb([...servicesDB.servicesArray]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      // Handle the case where servicesDB is undefined
      // For example, display an error message or take appropriate action
    }
  };

  const handleShowDialog = (
    id,
    title,
    metaDescription,
    image,
    tags,
    content,
    name
  ) => {
    let serviceData = {
      id,
      title,
      metaDescription,
      image,
      tags,
      content,
      name,
    };
    console.log("test.....");
    console.log(serviceData);
    if (showDialog) {
      setDialogData({});
    } else {
      setDialogData(serviceData);
    }
    setShowDialog(!showDialog);
  };
  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleShowAddContract = () => {
    setShowAddContract(!showAddContract);
  };

  const handleDeleteArt = (id, imageFileName) => {
    db.map((service) => {
      if (service.id === id) {
        const authInstance = auth;
        const currentUser = authInstance.currentUser;
        const database = getDatabase();
        const dataRef = ref(database, "Services/" + service.id);
        remove(dataRef);
        // Creează o nouă matrice care exclude articolul cu ID-ul specificat
        const updatedDb = db.filter((a) => a.id !== id);
        // Create a reference to the file to delete
        const deletedRef = storageRef(
          storage,
          `images/services/${currentUser?.uid}/${imageFileName}`
        );

        // Delete the file
        deleteObject(deletedRef)
          .then(() => {
            // File deleted successfully
            console.log("File deleted successfully");
          })
          .catch((error) => {
            console.log(
              "Uh-oh, an error occurred! AT uploadImage DELETE...",
              error
            );
            // Uh-oh, an error occurred!
          });

        // Actualizează starea db cu noua matrice filtrată
        setDb([...updatedDb]);
        // handleGetCalendar();
        // toggleModal();
      } else {
        // toggleModal();
      }
    });
  };

  const handleEditService = async (
    id,
    name,
    title,
    metaDescription,
    image,
    initialImage,
    content,
    tags,
    noNewImage
  ) => {
    try {
      const dateTime = getCurrentDateTime();
      console.log(`Data: ${dateTime.date}`);
      console.log(`Ora: ${dateTime.time}`);
      setShowDialog(!showDialog);
      const updateServices = db.map(async (service) => {
        console.log(service.id);
        if (service.id === id) {
          let updatedService;
          if (noNewImage) {
            console.log("Start NO new image......");

            console.log(image);
            console.log(initialImage);
            let imgReupload = { finalUri: image, fileName: initialImage };
            updatedService = {
              id,
              name,
              title,
              metaDescription,
              content,
              date: service.date,
              time: service.time,
              updatedAtDate: dateTime.date,
              updatedAtTime: dateTime.time,
              image: imgReupload,
              tags,
            };
          } else {
            console.log("Start new image......");
            console.log(image);
            console.log(initialImage);
            const newImage = await uploadImageServices(
              image,
              initialImage,
              false
            );
            updatedService = {
              id,
              name,
              title,
              metaDescription,
              content,
              date: service.date,
              time: service.time,
              updatedAtDate: dateTime.date,
              updatedAtTime: dateTime.time,
              image: newImage,
              tags,
            };

            console.log("updatedService......");
            console.log(updatedService);
          }

          writeEditService(updatedService);

          return updatedService;
        } else {
          return service;
        }
      });

      // Use Promise.all to wait for all promises in the map to resolve
      const updatedServices = await Promise.all(updateServices);

      setDb([...updatedServices]);
    } catch (err) {
      console.log("Error handleEditService...", err);
    }
  };

  const handleUploadService = async (
    name,
    title,
    metaDescription,
    tags,
    image,
    content
  ) => {
    try {
      const dateTime = getCurrentDateTime();

      const newService = {
        id: db.length + 1,
        name,
        title: title,
        metaDescription,
        tags,
        content,
        date: dateTime.date,
        time: dateTime.time,
        image,
      };

      // Folosește await pentru a aștepta finalizarea promisiunii
      await writeServiceData(newService);

      let newServices = db;

      newServices.push(newService);

      setDb([...newServices]);

      setShowAddContract(!showAddContract);
    } catch (err) {
      console.log("Error handleUploadArticle...", err);
    }
  };
  const handleShowSoloPopup = () => {
    setOpenSoloPopup(!openSoloPopup);
  };

  useEffect(() => {
    handleServices();
    console.log("Dialog.......ss..ss...", dialogData);
    console.log(dialogData);
    console.log(db);
  }, []);

  return (
    <>
      {showDialog && (
        <CustomServiceDialog
          handleShowDialog={handleShowDialog}
          serviceData={dialogData}
          handleEditService={handleEditService}
          handleDeleteArt={handleDeleteArt}
        />
      )}
      {showAddContract && (
        <AddServiceDialog
          handleShowAddContract={handleShowAddContract}
          handleUploadService={handleUploadService}
          showAddContract={showAddContract}
          componentTitle={"Services"}
        />
      )}

      <Box component="main" className={classes.mainBox}>
        <Box>
          <TableToolbar
            isMainToolbar={true}
            handleShowSettings={handleShowSettings}
            handleShowAddContract={handleShowAddContract}
            handleShowSoloPopup={handleShowSoloPopup}
            settingsRef={settingsRef}
            db={db}
          />
          {/* {showAddContract && (
            <AddContract
              handleShowAddContract={handleShowAddContract}
              handleUploadService={handleUploadService}
            />
          )} */}
          <TableToolbar />
          <Stack direction="column" alignItems="center">
            {isLoading ? (
              <CircularProgress />
            ) : db.length === 0 ? (
              <Typography
                sx={{ fontSize: 20, marginTop: 5, fontWeight: "400" }}
              >
                No services added
              </Typography>
            ) : (
              <CustomTableContainer
                db={db}
                handleShowDialog={handleShowDialog}
              />
            )}
          </Stack>
        </Box>
      </Box>
      <IconInSelect
        anchorEl={settingsRef.current}
        open={openSoloPopup}
        onClose={setOpenSoloPopup}
      />
    </>
  );
}
