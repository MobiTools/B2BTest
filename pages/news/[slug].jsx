import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { useSpacing } from "~/theme/common";
import Header from "~/components/Header";
import Article from "~/components/Blog/Article";
import Sidebar from "~/components/Blog/Sidebar";
import Footer from "~/components/Footer";

import {createTheme } from "@mui/material";

import { handleGetArticles } from "../../utils/realtimeUtils";
import { getAllNewsIds } from "../../utils/getFirebaseIds";

export async function getStaticProps({ params }) {
  // Obține datele din baza de date aici
  const arts = await handleGetArticles();

  const filtered = arts.articlesArray.filter(
    (article) => article.id == params.slug
  );
  let article = filtered;
  return {
    props: {
      article,
      articles: arts,
    },
  };
}

function BlogDetail(props) {
  const { classes } = useSpacing();
  const { article } = props;
  // Creează un useState pentru a gestiona array-ul filtrat

  const defaultTheme = createTheme();

  defaultTheme.typography.p = {
    fontSize: "60px",
    color: "white",
  };

  return (
    <Fragment>
      <Head>
        <title>{article[0].title}</title>
        <meta
          name="description"
          content={article[0].metaDescription}
        />
        <meta name="og:title" content={article[0].title} />
        <meta
          name="og:description"
          content={article[0].metaDescription}
        />
        <meta name="keywords" content={article[0].metaKeys} />
      </Head>
      <CssBaseline />
      <section id="home" />

      <div className={classes.mainWrap}>
        <Header home />
        <div className={classes.wraperSection}>
          <Box pt={5}>
            <Container style={{}}>
              <Grid container spacing={4}>
                <Grid item md={8} xs={12} style={{ paddingTop: 0 }}>
                  <Article filteredArticles={article[0]} />
                </Grid>
                <Grid item md={4} xs={12} style={{ paddingTop: 0 }}>
                  <Sidebar lastFiveArticles={props.articles.lastFiveArticles} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
        <div id="footerr">
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}



export default BlogDetail;

// Use this below for Server Side Render/Translation (SSR)

export async function getStaticPaths() {
  const allNewsIds = await getAllNewsIds(); // Fetch all available news IDs from Firebase

  const paths = allNewsIds.map((id) => ({
    params: { slug: id.toString() },
  }));

  const fallback = false;

  return {
    paths,
    fallback,
  };
}

