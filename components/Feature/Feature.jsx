import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Grid from "@mui/material/Grid";

import useStyles from "./feature-style";

import Image from "next/image";

function Feature() {
  const { classes, cx } = useStyles();

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const buttonHeaderStyle = {
    variant: "contained",
    color: "secondary",
    size: "large",
    className: classes.buttonHeader,
  };

  const imgStyle = {
    width: isMobile ? "100%" : "80%",
    height: isMobile ? "80%" : "80%",
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
            <Image
              width={550}
              height={460}
              src={"/pozaweb3-1.png"}
              style={imgStyle}
              alt="illustration"
              loading="lazy"
            />
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
            <Image
              width={550}
              height={460}
              src={"/pozaweb3-1.png"}
              style={imgStyle}
              alt="illustration"
              loading="lazy"
            />
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
