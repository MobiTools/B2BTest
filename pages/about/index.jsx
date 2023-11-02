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

import CallAction from "~/components/CallAction";

import Footer from "~/components/Footer";

import Mision from "../../components/About/Mision";
import Expertise from "../../components/About/Expertise/Expertise";

const SEOHead = () => (
  <Head>
    <title>About Us | Numele Site-ului</title>
    <meta name="description" content="Descrierea relevantă pentru pagina About Us." />
    <meta name="og:title" content="About Us | Numele Site-ului" />
    <meta name="og:description" content="Descrierea relevantă pentru pagina About Us." />
    <meta name="keywords" content="cuvant1, cuvant2, cuvant3" />
  </Head>
);

const bgColorBlack = { backgroundColor: "black" };
const bgColorGrey = { backgroundColor: "#252525" };

function About(props) {
  const { classes, cx } = useSpacing();


  return (
    <Fragment>
      <SEOHead />
      <CssBaseline />

      <div className={classes.mainWrap} style={bgColorBlack}>
        <Header  />
        
        <div className={classes.imgContainer}>
          <img
            src="/about-background-1.png"
            alt="About Matteale Consulting"
            className={classes.aboutImg}
          />
          <h1 className={classes.aboutText}>About Us</h1>
        </div>

        <div style={bgColorBlack} className={classes.wraperSection}>
          <Banner />
        </div>

        <div style={bgColorGrey} className={classes.wraperSection}>
          <Container>
            <Grid container>
              <Grid item md={12}>
                <AboutVideo />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div style={bgColorBlack} className={classes.wraperSection}>
          <Expertise />
        </div>
        <div style={bgColorGrey} className={classes.wraperSection}>
          <Mision />
        </div>
        <div style={bgColorBlack} className={classes.wraperSection}>
          <Container>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <img src="/values.webp" alt="Our Values" className={classes.valuesImg} />
              </Grid>
              <Grid item md={6}>
                <AboutProgress />
              </Grid>
            </Grid>
          </Container>
        </div>
        <div style={{ ...bgColorBlack, paddingTop: 0 }} className={classes.wraperSection}>
          <CallAction />
        </div>
        <Footer  />
      </div>
    </Fragment>
  );
}



export default About;
