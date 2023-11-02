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
import { CircularProgress, Divider, Typography } from "@mui/material";

import Serv from "../../../components/Services/Serv";
import { getAllServicesIds } from "../../../utils/getFirebaseIds";
import { handleGetServices } from "../../../utils/realtimeUtils";

export async function getStaticProps({ params }) {
  // Obține datele din baza de date aici
  const serv = await handleGetServices();

  


  return {
    props: {
  
      services: serv,
    },
  };
}

function Migrationandimplementation(props) {
  const { classes } = useSpacing();
  const { classes: titleClasses } = useStyles();

  const Migrationandimplementation = {
    content:`
    <h1>Test title h1</h1>
    </b>
    <p>asdaddsdsad asdasddadsdadasdasdasd sdasd asdsdad asdsd ad sd ad asd as</p>
    `,
    image:{finalUri:"https://picsum.photos/200"},
    title:"Test title"
  }

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
      <div className={classes.mainWrap}>
        <Header home />

        <>
          <div className={classes.wraperSection}>
            <Box pt={5}>
              <Container>
                <Grid container spacing={4}>
                  <Grid item md={8} xs={12} style={{ paddingTop: 0 }}>
                    <Serv filteredServices={Migrationandimplementation} />
                  </Grid>
                  <Grid item md={4} xs={12} style={{ paddingTop: 0 }}>
                    <Sidebar services={props.services} />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </div>
          <div id="footer">
            <Footer />
          </div>
        </>
      </div>
    </Fragment>
  );
}



export default Migrationandimplementation;
