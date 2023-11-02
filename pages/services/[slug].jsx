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
import { useRouter } from "next/router";
import { useParams } from "next/navigation";

import { useDatabase } from "../../context/DatabaseContext";
import Serv from "../../components/Services/Serv";
import { getAllServicesIds } from "../../utils/getFirebaseIds";
import { handleGetServices } from "../../utils/realtimeUtils";

export async function getStaticProps({ params }) {
  // Obține datele din baza de date aici
  const serv = await handleGetServices();

  const filtered = serv.servicesArray.filter(
    (service) => service.id == params.slug
  );

  let service = filtered;
  return {
    props: {
      service,
      services: serv,
    },
  };
}

function ServiceDetail(props) {
  const { classes } = useSpacing();
  const { classes: titleClasses } = useStyles();

  return (
    <Fragment>
        <Head>
        <title>{props.service[0].title}</title>
        <meta
          name="description"
          content={props.service[0].metaDescription}
        />
        <meta name="og:title" content={props.service[0].title} />
        <meta
          name="og:description"
          content={props.service[0].metaDescription}
        />
        <meta name="keywords" content={props.service[0].metaKeys} />
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
                    <Serv filteredServices={props.service[0]} />
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


export async function getStaticPaths() {
  const allNewsIds = await getAllServicesIds(); // Fetch all available news IDs from Firebase

  const paths = allNewsIds.map((id) => ({
    params: { slug: id.toString() },
  }));

  const fallback = false;

  return {
    paths,
    fallback,
  };
}

export default ServiceDetail;
