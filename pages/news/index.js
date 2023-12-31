import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "next-i18next";
// Use this below for Server Side Render/Translation (SSR)

// Use this below for Static Site Generation (SSG)
// import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from "~/theme/common";
import Header from "~/components/Header";
import Headline from "~/components/Blog/Headline";
import PostCard from "~/components/Cards/PostCard";
import Sidebar from "~/components/Blog/Sidebar";
import Footer from "~/components/Footer";
import brand from "~/public/text/brand";
import link from "~/public/text/link";
import { DatabaseProvider, useDatabase } from "../../context/DatabaseContext";
import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";
import { CircularProgress } from "@mui/material";

function BlogHome(props) {
  const { classes } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation("common");
  const { articles, isLoading: loadedDb } = useDatabase();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  // Calculează indexul de start și de sfârșit pentru articolele de pe pagina curentă
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Extrage articolele de pe pagina curentă
  const articlesToDisplay =
    articles.articlesArray &&
    articles.articlesArray.slice(startIndex, endIndex);

  useEffect(() => {
    console.log("articleSSSs.....");
    console.log(articles.latestArticles);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{brand.starter.name + " - Blog"}</title>
      </Head>
      <CssBaseline />
      <section id="home" />
      {
        <div className={classes.mainWrap}>
          <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} home />
          <div className={classes.containerGeneral}>
            <Box pt={{ xs: 5, sm: 3, md: 4 }}>
              <Container>
                <Grid container spacing={3}>
                  <Grid item sm={12}>
                    <Headline newestArticle={articles.newestArticle} />
                  </Grid>
                </Grid>
                <Box mt={8}>
                  <Grid container spacing={3}>
                    {articles.latestArticles &&
                      articles.latestArticles.map((article, index) => (
                        <Grid item md={6} xs={12}>
                          <PostCard
                            href={link.starter.blogDetail}
                            img={article.image.finalUri}
                            title={article.name}
                            desc={article.metaDescription}
                            date={article.date}
                            id={article.id}
                            articleData={article}
                            orientation="landscape"
                            type="full"
                          />
                        </Grid>
                      ))}
                  </Grid>
                </Box>
                <Box mt={2}>
                  <Grid spacing={4} container>
                    <Grid item md={8} xs={12}>
                      {articlesToDisplay &&
                        articlesToDisplay.map((article, index) => (
                          <Box key={index.toString()} mt={index > 0 ? 6 : 0}>
                            <PostCard
                              href={link.starter.blogDetail}
                              img={article.image.finalUri}
                              title={article.name}
                              desc={article.metaDescription}
                              date={article.date}
                              id={article.id}
                              orientation="portrait"
                              type="round"
                            />
                          </Box>
                        ))}

                      <Box mt={5} className={classes.arrow}>
                        <Grid container justifyContent="space-between">
                          <Button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                          >
                            <ArrowBackIcon />
                            Previous
                          </Button>
                          <Button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={
                              articles.articlesArray &&
                              endIndex >= articles.articlesArray.length
                            }
                          >
                            Next
                            <ArrowForwardIcon />
                          </Button>
                        </Grid>
                      </Box>
                    </Grid>
                    <Grid item md={4} xs={12}>
                      <Sidebar latestArticles={articles.latestArticles} />
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </Box>
          </div>
          <div id="footer">
            <Footer toggleDir={onToggleDir} />
          </div>
        </div>
      }
    </Fragment>
  );
}

BlogHome.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default BlogHome;

// Use this below for Server Side Render/Translation (SSR)

// Use this below for Static Site Generation (SSG)
// const getStaticProps = makeStaticProps(['common']);
// export { getStaticPaths, getStaticProps };
