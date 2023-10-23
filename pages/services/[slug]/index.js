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
import { useDatabase } from "../../../context/DatabaseContext";

import Serv from "../../../components/Services/Serv";

function ServiceDetail() {
  const { services } = useDatabase();
  const { classes } = useSpacing();
  const { classes: titleClasses } = useStyles();
  const router = useRouter();
  const params = useParams();

  // Creează un useState pentru a gestiona array-ul filtrat
  const [filteredServices, setFilteredServices] = useState(services);

  useEffect(() => {
    console.log("router...");
    console.log(router.query.id);
    console.log(services);
    console.log(params);

    // Filtrăm array-ul services după router.query.id
    if (router.query.id && services.servicesArray) {
      const filtered = services.servicesArray.filter(
        (service) => service.id == router.query.id
      );
      // Actualizăm filteredServices cu noul array filtrat
      setFilteredServices(filtered);
    }
    console.log(filteredServices);
    console.log(filteredServices);
  }, [router.query.id, services]);

  return (
    <Fragment>
      <Head>
        <title>{" - Blog Detail"}</title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header home />
        {filteredServices[0] ? (
          <>
            <div className={classes.wraperSection}>
              <Box pt={5}>
                <Container>
                  <Grid container spacing={4}>
                    <Grid item md={8} xs={12} style={{ paddingTop: 0 }}>
                      <Serv filteredServices={filteredServices[0]} />
                    </Grid>
                    <Grid item md={4} xs={12} style={{ paddingTop: 0 }}>
                      <Sidebar />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </div>
            <div id="footer">
              <Footer />
            </div>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </Fragment>
  );
}

ServiceDetail.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default ServiceDetail;
