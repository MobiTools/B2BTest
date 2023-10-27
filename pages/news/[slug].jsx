import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// Use this below for Static Site Generation (SSG)
// import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from "~/theme/common";
import Header from "~/components/Header";
import Article from "~/components/Blog/Article";
import Sidebar from "~/components/Blog/Sidebar";
import Footer from "~/components/Footer";
import brand from "~/public/text/brand";

import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { CircularProgress, createTheme } from "@mui/material";
import { useDatabase } from "../../context/DatabaseContext";
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
  const { onToggleDark, onToggleDir, article } = props;
  // Creează un useState pentru a gestiona array-ul filtrat

  const defaultTheme = createTheme();

  defaultTheme.typography.p = {
    fontSize: "60px",
    color: "white",
  };

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
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} home />
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
        <div id="footer">
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

BlogDetail.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

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

// export const getStaticProps = async ({ locale }) => ({
//   props: { ...(await serverSideTranslations(locale, ["common"])) },
// });

// Use this below for Static Site Generation (SSG)
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };
