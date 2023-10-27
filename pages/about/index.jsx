import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { useSpacing } from "~/theme/common";
import Header from "~/components/Header";

import Banner from "~/components/About/Banner";

import AboutVideo from "~/components/About/Video";
import AboutProgress from "~/components/About/Progress";
import ContactMap from "~/components/Forms/ContactMap";
import CallAction from "~/components/CallAction";

import Footer from "~/components/Footer";

import Mision from "../../components/About/Mision";
import Expertise from "../../components/About/Expertise/Expertise";

function About(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <Fragment>
      <Head>
        <title>Home | Numele Site-ului</title>
        <meta
          name="description"
          content="Descrierea relevantă pentru pagina de start."
        />
        <meta name="og:title" content="Home | Numele Site-ului" />
        <meta
          name="og:description"
          content="Descrierea relevantă pentru pagina de start."
        />
        <meta name="keywords" content="cuvant1, cuvant2, cuvant3" />
      </Head>
      <CssBaseline />
      <section id="home" />

      <div className={classes.mainWrap} style={{ backgroundColor: "black" }}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} />
        <div className={classes.imgContainer}>
          <img
            src="/about-background-1.png"
            alt="About Matteale Consulting image"
            className={classes.aboutImg}
          />
          <h2 className={classes.aboutText}>About Us</h2>
        </div>

        <div
          style={{ backgroundColor: "black" }}
          className={classes.wraperSection}
        >
          <Banner />
        </div>

        <div
          style={{ backgroundColor: "#252525" }}
          className={classes.wraperSection}
        >
          <Container>
            <Grid container>
              <Grid item md={12} xs={12}>
                <AboutVideo />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div
          style={{ backgroundColor: "black" }}
          className={classes.wraperSection}
        >
          <Expertise />
        </div>
        <div
          style={{ backgroundColor: "#252525" }}
          className={classes.wraperSection}
        >
          <Mision />
        </div>
        <div
          style={{ backgroundColor: "black" }}
          className={classes.wraperSection}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <img src="/values.webp" className={classes.valuesImg} />
              </Grid>
              <Grid item md={6} xs={12}>
                <AboutProgress />
              </Grid>
            </Grid>
          </Container>
        </div>

        <div
          style={{ backgroundColor: "black", paddingTop: 0 }}
          className={classes.wraperSection}
        >
          <CallAction />
        </div>
        <Footer toggleDir={onToggleDir} />
      </div>
    </Fragment>
  );
}

About.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default About;
