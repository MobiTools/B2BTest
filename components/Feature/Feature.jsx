import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Grid from "@mui/material/Grid";
import { useTranslation } from "next-i18next";
import { useTextAlign, useText } from "~/theme/common";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import imgAPI from "~/public/images/imgAPI";
import useStyles from "./feature-style";
import Title from "../Title/Title";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useDatabase } from "../../context/DatabaseContext";

function Feature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: align } = useTextAlign();
  const theme = useTheme();
  const { articles, isLoading } = useDatabase();

  const { t } = useTranslation("common");
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const listItemStyles = {
    margin: 0,
    padding: 0,
  };

  const listItemAvatarStyles = {
    margin: 0,
    padding: 0,
  };

  const checkCircleIconStyles = {
    color: "#D3A03E",
    width: "auto",
    margin: 0,
    fontSize: 30,
  };

  const textStyle = {
    color: "white",
    width: "auto",
  };

  const buttonHeaderStyle = {
    variant: "contained",
    color: "secondary",
    size: "large",
    className: classes.buttonHeader,
  };

  const imgStyle = {
    width: isMobile ? "100%" : "80%",
    borderRadius: 2,
  };

  const illustrationImage = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Adăugăm această linie pentru aliniere verticală
      }}
    >
      <ScrollAnimation
        animateOnce
        animateIn="fadeInLeftShort"
        offset={10}
        delay={500}
        duration={0.5}
        style={{ width: "100%" }}
      >
        <div className={classes.illustrationLeft} style={{ width: "100%" }}>
          <figure
            className={cx(classes.figure, classes.graphic)}
            style={{
              justifyContent: isMobile ? "center" : "flex-start",
              alignItems: isMobile ? "center" : "flex-start",
              display: "flex",
            }}
          >
            <img src={"/pozaweb3-1.png"} style={imgStyle} alt="illustration" />
          </figure>
        </div>
      </ScrollAnimation>
    </Box>
  );

  const illustrationImageSecond = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Adăugăm această linie pentru aliniere verticală
      }}
    >
      <ScrollAnimation
        animateOnce
        animateIn="fadeInRightShort"
        offset={10}
        delay={500}
        duration={0.5}
        style={{ width: "100%" }}
      >
        <div className={classes.illustrationLeft} style={{ width: "100%" }}>
          <figure
            className={cx(classes.figure, classes.graphic)}
            style={{
              justifyContent: isMobile ? "center" : "flex-end",
              alignItems: isMobile ? "center" : "flex-end",
              display: "flex",
            }}
          >
            <img src={"/pozaweb3-1.png"} style={imgStyle} alt="illustration" />
          </figure>
        </div>
      </ScrollAnimation>
    </Box>
  );

  const content = (
    <div
      className={classes.desc}
      style={{
        margin: 0,
      }}
    >
      <h2
        align={"left"}
        style={{
          color: "white",
          marginTop: 0,
          fontSize: 40,
          marginBottom: 0,
        }}
      >
        Second Section Title
      </h2>

      <div
        style={{
          borderLeft: "3px solid #D3A03E",
          marginLeft: "2%",
          paddingLeft: "5%",
          marginTop: 10,
        }}
      >
        <p
          align={"left"}
          style={{ color: "#D3A03E", marginTop: 0, fontSize: 20 }}
        >
          Poate cuprinde atât scene exterioare, cât și interioare care îl vor
          face pe clientul tău să se transpună în viitorul său apartament.
        </p>
      </div>

      <p align={"left"} style={{ color: "white", marginTop: 0, fontSize: 20 }}>
        Poate cuprinde atât scene exterioare, cât și interioare care îl vor face
        pe clientul tău să se transpună în viitorul său apartament.
      </p>
      <div
        style={{
          justifyContent: "flex-start",
          display: "flex",
          marginBottom: 40,
        }}
      >
        <Button {...buttonHeaderStyle}>Learn More</Button>
      </div>
    </div>
  );

  const contentSecondSection = (
    <div
      className={classes.desc}
      style={{
        margin: 0,
        // paddingRight: "12%",
        marginBottom: 40,

        width: "100%", // Setăm lățimea la 100%
      }}
    >
      <h2
        align={"left"}
        style={{
          color: "white",
          marginTop: 0,
          fontSize: 40,
          marginBottom: 0,
          width: "100%", // Setăm lățimea la 100%
        }}
      >
        Second Section Title
      </h2>

      <div
        style={{
          borderLeft: "3px solid #D3A03E",
          marginLeft: "2%",
          paddingLeft: "5%",
          marginTop: 10,
          width: "100%", // Setăm lățimea la 100%
        }}
      >
        <p
          align={"left"}
          style={{
            color: "#D3A03E",
            marginTop: 0,
            fontSize: 20,
            width: "100%", // Setăm lățimea la 100%
          }}
        >
          Poate cuprinde atât scene exterioare, cât și interioare care îl vor
          face pe clientul tău să se transpună în viitorul său apartament.
        </p>
      </div>

      <p
        align={"left"}
        style={{
          color: "white",
          marginTop: 40,
          fontSize: 20,
          width: "100%",
        }}
      >
        Poate cuprinde atât scene exterioare, cât și interioare care îl vor face
        pe clientul tău să se transpună în viitorul său apartament.
      </p>
      <div
        style={{ justifyContent: "flex-start", display: "flex", width: "100%" }}
      >
        <Button {...buttonHeaderStyle}>Learn More</Button>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <div
        style={{
          paddingLeft: "6%",
          paddingRight: "6%",
          margin: 0,
          width: "100%",
        }}
      >
        <div className={classes.item} style={{ marginBottom: 120 }}>
          <Grid container spacing={0}>
            <Grid item md={6} xs={12}>
              {contentSecondSection}
            </Grid>
            <Grid item md={6} xs={12}>
              {illustrationImageSecond}
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid
            container
            spacing={0}
            direction={isMobile ? "column-reverse" : "row"}
          >
            <Grid item md={6} xs={12}>
              {illustrationImage}
            </Grid>
            <Grid item md={6} xs={12}>
              {content}
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Feature;
