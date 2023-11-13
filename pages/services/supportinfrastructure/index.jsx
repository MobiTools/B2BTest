import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSpacing } from "~/theme/common";
import useStyles from "~/components/Services/service-style";
import Header from "~/components/Header";
import Service from "~/components/Services/Service";
import Sidebar from "~/components/Services/Sidebar";
import Footer from "~/components/Footer";
import { CircularProgress, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";

import Serv from "../../../components/Services/Serv";
import { getAllServicesIds } from "../../../utils/getFirebaseIds";
import { handleGetServices } from "../../../utils/realtimeUtils";
import { useRouter } from "next/router";
import { ITInfrastructureSupportData } from "../../../data/servicesData";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { wappPhone } from "../../../data/data";

export async function getServerSideProps() {
  const services = await handleGetServices();
  return {
    props: {
      services,
    },
  };
}

function WebAndAppSupport(props) {
  const { classes } = useSpacing();
  const { classes: titleClasses } = useStyles();

  const router = useRouter()

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mattealeconsulting.com';

  // In your component
  const currentUrl = `${baseUrl}${router.asPath || ''}`;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));



  return (
    <Fragment>
   <Head>
        <title>IT Support Companies | IT Helpdesk | Cybersecurity | Automotion</title>
        <meta
          name="description"
          content="Our IT support services: IT helpdesk, IT service desk, cybersecurity expert strategy, automation, Windows and Linux server management, and networking support."
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content="IT Support Companies | IT Helpdesk | Cybersecurity | Automotion" />
        <meta
          property="og:description"
          content="Our IT support services: IT helpdesk, IT service desk, cybersecurity expert strategy, automation, Windows and Linux server management, and networking support."
        />
         <meta property="og:image" content="https://mattealeconsulting.com/images/social-share.jpg" /> 
        <meta name="format-detection" content="telephone=no"/>
     
      </Head>
      <CssBaseline />
      <section id="home" />
        <Header home />
      <div className={classes.mainWrap} style={{paddingTop: isMobile && 100}}>

        <>
          <div className={classes.wraperSection}>
            <Box pt={5}>
              <Container>
                <Grid container spacing={4}>
                  <Grid item md={8} xs={12} style={{ paddingTop: 0 }}>
                    <Serv filteredServices={ITInfrastructureSupportData} />
                  </Grid>
                  <Grid item md={4} xs={12} style={{ paddingTop: 0 }}>
                    <Sidebar services={props.services} />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </div>
        </>
      </div>
          <div id="footer">
            <Footer />
          </div>
          <FloatingWhatsApp
        phoneNumber={wappPhone}
        accountName="Matteale Consulting"
        avatar="/logoWapp.svg"
      />
    </Fragment>
  );
}




export default WebAndAppSupport;
