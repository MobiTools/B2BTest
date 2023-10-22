const mainBox = {
  display: "flex",
  backgroundColor: "#F5F5F5",
  height: "100vh",
};

const mainAppBar = {
  width: `calc(100% - 80px)`,
  zIndex: 2,
  backgroundColor: "#FFFFFF",
};

const toolbarBox = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const toolbarTextBox = {
  display: "flex",
  flexDirection: "row",
  width: "15%",
  alignItems: "center",
  justifyContent: "center",
};

const toolbarLogoBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "10%",
};

const notificationsIcon = { color: "#6F6D7B", position: "relative", top: 3 };

const drawerBox = {
  backgroundColor: "#04385A",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};

const list = {
  width: 80,
  flexDirection: "column",
  backgroundColor: "#04385A",
  flexWrap: "wrap",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const opacDialogBox = {
  backgroundColor: "grey.500",
  opacity: "1",
  width: "100%",
  position: "absolute",
  zIndex: 4,
  display: "flex",
  height: "100%",
};

const mainDialogBox = {
  position: "absolute",
  zIndex: 5,
  minWidth: 300,
  width: "93%",
  height: "95%",
  borderRadius: 4,
  top: "2%",
  left: "6%",
  overflow: "auto",
  backgroundColor: "primary.light",
};

const gridContainerBox = {
  height: "90%",
  width: "95%",
  display: "flex",
  flexDirection: "row",
};

const mainStartFormBox = {
  maxHeight: "90%",
  overflow: "auto",
  pr: 1,
  scrollbarWidth: "thin",
  "&::-webkit-scrollbar": {
    width: "0.4em",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
};

const mainBoardBox = {
  flexGrow: 0,
  p: 3,
  width: "100%",
  overflow: "auto",
};

const cardGrid = {
  minWidth: 150,
  margin: 1,
  display: "flex",
  justifyContent: "center",
};

const cardContent = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "transparent",
  position: "relative",
  bottom: 25,
  maxHeight: 120,
};

const popUpBox = {
  backgroundColor: "rgba(49, 46, 67, 0.32)",
  opacity: "1",
  width: "100%",
  position: "absolute",
  zIndex: 2,
  display: "flex",
  height: {
    xs: "100vh", // theme.breakpoints.up('xs')
    sm: "100vh", // theme.breakpoints.up('sm')
    md: "100vh", // theme.breakpoints.up('md')
    lg: "100vh", // theme.breakpoints.up('lg')
    xl: "100vh", // theme.breakpoints.up('xl')
  },
  bottom: 0,
  right: 2,
};

const popUpCard = {
  position: "absolute",
  zIndex: 3,
  minWidth: 300,
  width: "40%",
  height: "auto",
  top: "30%",
  left: "33%",
  flexWrap: "wrap",
  overflow: "hidden",
};

export {
  popUpCard,
  popUpBox,
  cardContent,
  cardGrid,
  mainBoardBox,
  mainBox,
  mainAppBar,
  toolbarBox,
  toolbarTextBox,
  toolbarLogoBox,
  notificationsIcon,
  drawerBox,
  list,
  opacDialogBox,
  mainDialogBox,
  gridContainerBox,
  mainStartFormBox,
};
