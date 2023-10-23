import React, { useState, useEffect } from "react";
import {
  Box,
  CircularProgress,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import TableToolbar from "../components/ProcessTable/TableToolbar";

// import * as styles from "../styles/ProcessTableStyles";
import CustomDialog from "../components/DialogBox/CustomDialog";

import IconInSelect from "../components/ProcessTable/IconInSelect";

import CustomTableContainer from "../components/ProcessTable/CustomTableContainer";
import { useStyles } from "../styles/ProcessTableStyles";
import {
  handleGetArticles,
  writeArticleData,
  writeEditArticle,
} from "../utils/realtimeUtils";
import { getCurrentDateTime } from "../utils/timeUtils";
import { uploadImage } from "../utils/storageUtils";
import { auth, storage } from "../firebase";
import { getDatabase, ref, remove } from "firebase/database";
import {
  deleteObject,
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
  updateMetadata, // Import this module
} from "firebase/storage";
import AddArticleDialog from "../components/ProcessTable/AddArticleDialog";

export default function ProcessTable() {
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

  const handleArticles = async () => {
    setIsLoading(true);
    const articlesDB = await handleGetArticles();

    if (articlesDB) {
      setDb([...articlesDB.articlesArray]);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      // Handle the case where articlesDB is undefined
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
    let articleData = {
      id,
      title,
      metaDescription,
      image,
      tags,
      content,
      name,
    };
    console.log("test.....");
    console.log(articleData);
    if (showDialog) {
      setDialogData({});
    } else {
      setDialogData(articleData);
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
    db.map((article) => {
      if (article.id === id) {
        const authInstance = auth;
        const currentUser = authInstance.currentUser;
        const database = getDatabase();
        const dataRef = ref(database, "Articles/" + article.id);
        remove(dataRef);
        // Creează o nouă matrice care exclude articolul cu ID-ul specificat
        const updatedDb = db.filter((a) => a.id !== id);
        // Create a reference to the file to delete
        const deletedRef = storageRef(
          storage,
          `images/articles/${currentUser?.uid}/${imageFileName}`
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

  const handleEditArticle = async (
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
      const updateArticles = db.map(async (article) => {
        console.log(article.id);
        if (article.id === id) {
          let updatedArticle;
          if (noNewImage) {
            console.log("Start NO new image......");

            console.log(image);
            console.log(initialImage);
            let imgReupload = { finalUri: image, fileName: initialImage };
            updatedArticle = {
              id,
              name,
              title,
              metaDescription,
              content,
              date: article.date,
              time: article.time,
              updatedAtDate: dateTime.date,
              updatedAtTime: dateTime.time,
              image: imgReupload,
              tags,
            };
          } else {
            console.log("Start new image......");
            console.log(image);
            console.log(initialImage);
            const newImage = await uploadImage(image, initialImage, false);
            updatedArticle = {
              id,
              name,
              title,
              metaDescription,
              content,
              date: article.date,
              time: article.time,
              updatedAtDate: dateTime.date,
              updatedAtTime: dateTime.time,
              image: newImage,
              tags,
            };

            console.log("updatedArticle......");
            console.log(updatedArticle);
          }

          writeEditArticle(updatedArticle);

          return updatedArticle;
        } else {
          return article;
        }
      });

      // Use Promise.all to wait for all promises in the map to resolve
      const updatedArticles = await Promise.all(updateArticles);

      setDb([...updatedArticles]);
    } catch (err) {
      console.log("Error handleEditArticle...", err);
    }
  };

  const handleUploadArticle = async (
    name,
    title,
    metaDescription,
    tags,
    image,
    content
  ) => {
    try {
      const dateTime = getCurrentDateTime();

      const newArticle = {
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
      await writeArticleData(newArticle);

      let newArticles = db;

      newArticles.push(newArticle);

      setDb([...newArticles]);

      setShowAddContract(!showAddContract);
    } catch (err) {
      console.log("Error handleUploadArticle...", err);
    }
  };

  const handleShowSoloPopup = () => {
    setOpenSoloPopup(!openSoloPopup);
  };

  useEffect(() => {
    handleArticles();
    console.log("Dialog.....sssssssssssssssssssssss....ss...");
    console.log(dialogData);
    console.log(db);
  }, []);

  return (
    <>
      {showDialog && (
        <CustomDialog
          handleShowDialog={handleShowDialog}
          articleData={dialogData}
          handleEditArticle={handleEditArticle}
          handleDeleteArt={handleDeleteArt}
        />
      )}
      {showAddContract && (
        <AddArticleDialog
          handleShowAddContract={handleShowAddContract}
          handleUploadArticle={handleUploadArticle}
          showAddContract={showAddContract}
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
            toolbarTitle={"Articles"}
          />
          {/* {showAddContract && (
            <AddContract
              handleShowAddContract={handleShowAddContract}
              handleUploadArticle={handleUploadArticle}
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
                No articles added
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
