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
import { useDatabase } from "../../../context/DatabaseContext";
import { useRouter } from "next/router";
import { useParams } from "next/navigation";
import { CircularProgress } from "@mui/material";

function BlogDetail(props) {
  const { articles } = useDatabase();
  const { classes } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  // Creează un useState pentru a gestiona array-ul filtrat
  const router = useRouter();
  const params = useParams();
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    console.log("router..");
    console.log(router.query.id);
    // console.log(article);
    console.log(params);

    // Filtrăm array-ul articles după router.query.id
    if (params.slug && articles.articlesArray) {
      const filtered = articles.articlesArray.filter(
        (article) => article.id == params.slug
      );
      // Actualizăm filteredServices cu noul array filtrat
      setFilteredArticles(filtered);
    }
    console.log("articles....");
    console.log(articles);
  }, [params.slug, articles]);

  return (
    <Fragment>
      <Head>
        <title>{brand.starter.name + " - Blog Detail"}</title>
      </Head>
      <CssBaseline />
      <section id="home" />
      {filteredArticles[0] ? (
        <div className={classes.mainWrap}>
          <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} home />
          <div className={classes.wraperSection}>
            <Box pt={5}>
              <Container style={{}}>
                <Grid container spacing={4}>
                  <Grid item md={8} xs={12} style={{ paddingTop: 0 }}>
                    <Article filteredArticles={filteredArticles[0]} />
                  </Grid>
                  <Grid item md={4} xs={12} style={{ paddingTop: 0 }}>
                    <Sidebar lastFiveArticles={articles.lastFiveArticles} />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </div>
          <div id="footer">
            <Footer toggleDir={onToggleDir} />
          </div>
        </div>
      ) : (
        <CircularProgress />
      )}
    </Fragment>
  );
}

BlogDetail.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BlogDetail;

// Use this below for Server Side Render/Translation (SSR)

// export async function getStaticPaths(params) {
//   console.log(params);
//   // Return a list of possible value for id
// }

// export const getStaticProps = async ({ locale }) => ({
//   props: { ...(await serverSideTranslations(locale, ["common"])) },
// });

// Use this below for Static Site Generation (SSG)
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };
