import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Logo from "../Logo";
import link from "~/public/text/link";
import MobileMenu from "./SideNav/MixedMobile";
import HeaderMenu from "./TopNav/MixedNav";
import UserMenu from "./TopNav/UserMenu";
import useStyles from "./header-style";
import navMenu from "./data/single";
import samplePages from "./data/sample-pages";
import navData from "./data/single";
import MultiLevelHover from "./TopNav/MultiLevelHover";
import multiple from "./data/multiple";
import { Button } from "@mui/material";

let counter = 0;

function Mixed(props) {
  const [fixed, setFixed] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir, home } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const buttonStyle = {
    position: "fixed",
    bottom: 10,
    left: 10,
    backgroundColor: "#ffc045",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "25px",
    zIndex: 15,
  };
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 80;
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpenMenu(false);
  };

  return (
    <Fragment>
      {isMobile && (
        <MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />
      )}
      <AppBar
        position="relative"
        id="header"
        className={cx(
          classes.header,
          openMenu && classes.noShadow,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container
          fixed={isDesktop}
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            maxWidth: "none",
          }}
        >
          <div className={classes.headerContent}>
            <nav className={classes.navMenu}>
              {isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={cx(
                    "hamburger hamburger--spin",
                    classes.mobileMenu,
                    openDrawer && "is-active"
                  )}
                  size="large"
                >
                  <span className="hamburger-box" style={{ color: "white" }}>
                    <span className={cx(classes.bar, "hamburger-inner")} />
                  </span>
                </IconButton>
              )}

              <div className={classes.logo}>
                <a href={link.starter.home}>
                  <Logo type="landscape" />
                </a>
              </div>

              {isDesktop && (
                <div className={classes.mainMenu}>
                  <HeaderMenu
                    open={openMenu}
                    menuPrimary={navData}
                    dataMenu={multiple}
                    menuSecondary={samplePages}
                    toggle={handleToggle}
                    close={handleClose}
                    singleNav={home}
                  />
                  {/* <MultiLevelHover dataMenu={multiple} /> */}
                </div>
              )}
              {isDesktop && <UserMenu />}
            </nav>
          </div>
        </Container>
      </AppBar>

      <div
        style={{
          backgroundColor: "#252525",
          height: isDesktop ? "86px" : "56px",
          width: "100%",
        }}
      ></div>
      {isMobile && (
        <Button style={buttonStyle} href={"Tel:+40345404753"}>
          +40 345404753
        </Button>
      )}
    </Fragment>
  );
}

Mixed.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  home: PropTypes.bool,
};

Mixed.defaultProps = {
  home: false,
};

export default Mixed;
