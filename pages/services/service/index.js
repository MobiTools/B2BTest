import React, { Fragment } from "react";
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
import brand from "~/public/text/brand";
import { Divider, Typography } from "@mui/material";

function ServiceDetail(props) {
  const { classes } = useSpacing();
  const { classes: titleClasses } = useStyles();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>{brand.starter.name + " - Blog Detail"}</title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} home />
        <div className={classes.containerGeneral}>
          <Box pt={5}>
            <Container>
              <Grid container spacing={4}>
                <Grid item md={6} xs={12}>
                  <div className={classes.content}>
                    <figure className={titleClasses.imageBlog}>
                      <img src="/pozaweb4-1.png" alt="blog" />
                    </figure>

                    <Divider className={titleClasses.dividerBordered} />
                  </div>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Typography
                    variant="h1"
                    className={titleClasses.titleBlog}
                    sx={{ fontSize: 40 }}
                  >
                    Maecenas rutrum dolor sed nisi
                  </Typography>

                  <Service />
                </Grid>
                <Grid item md={12} xs={12}>
                  <Sidebar />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
        <div id="footer">
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

ServiceDetail.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default ServiceDetail;

// Use this below for Static Site Generation (SSG)
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };
