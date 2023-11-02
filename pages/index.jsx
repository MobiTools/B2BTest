import React from "react";

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
  const {  articles } = props;


  return (
    <React.Fragment>
      <Head>
        <title>Home | test Site-ului</title>
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
    
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header  home />
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
        <Footer  />
      </div>
    </React.Fragment>
  );
}



export default Landing;
