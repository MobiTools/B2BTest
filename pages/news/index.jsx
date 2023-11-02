import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import { useSpacing } from "~/theme/common";
import Header from "~/components/Header";
import Headline from "~/components/Blog/Headline";
import PostCard from "~/components/Cards/PostCard";
import Sidebar from "~/components/Blog/Sidebar";
import Footer from "~/components/Footer";

import link from "~/public/text/link";

import { useState } from "react";
import { useEffect } from "react";
import { Fragment } from "react";

import { handleGetArticles } from "../../utils/realtimeUtils";


export async function getStaticProps() {
  // Obține datele din baza de date aici
  const articles = await handleGetArticles();
  console.log("articles...");
  console.log(articles);
  return {
    props: {
      articles,
    },
  };
}

function BlogHome(props) {
  const { classes } = useSpacing();
  const {articles } = props;



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
    console.log("articleSSSsss.....");
    console.log(articles);
  }, []);

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
      {
        <div className={classes.mainWrap}>
          <Header  home />
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
                      <Sidebar lastFiveArticles={articles.lastFiveArticles} />
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



export default BlogHome;

