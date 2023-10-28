import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import { useSpacing } from "~/theme/common";
import Header from "../components/Header";
import BannerSlider from "../components/BannerSlider";
import Feature from "../components/Feature";
import ContactBanner from "../components/ContactBanner";
import NewsBanner from "../components/NewsBanner";
import Footer from "../components/Footer";
import TrustedBanner from "../components/TrustetBanner/TrustedBanner";
import { handleGetArticles } from "../utils/realtimeUtils";
import { useEffect } from "react";

export async function getStaticProps() {
  const articles = await handleGetArticles();
  return {
    props: {
      articles,
    },
  };
}

function Landing(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir, articles } = props;

  useEffect(() => {
    console.log(articles);
  }, [articles]);

  return (
    <React.Fragment>
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
        <link
          rel="canonical"
          href="https://mattealeconsulting.com/"
          key="canonical"
        />
        <meta name="keywords" content="cuvant1, cuvant2, cuvant3" />
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} home />
        <main className={classes.containerWrap} style={{ marginTop: 0 }}>
          <section id="home">
            <BannerSlider />
          </section>
          <section
            className={classes.wraperTrustedBanner}
            id="feature"
            style={{ backgroundColor: "#252525" }}
          >
            <TrustedBanner />
          </section>
          <section
            id="feature"
            className={classes.wraperSection}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feature />
          </section>
          <section
            id="NewsBanner"
            className={classes.wraperSection}
            style={{ backgroundColor: "#252525" }}
          >
            <NewsBanner articles={articles} />
          </section>
          <section className={classes.wraperTrustedBanner}>
            <ContactBanner dark />
          </section>
        </main>
        <Footer toggleDir={onToggleDir} />
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
