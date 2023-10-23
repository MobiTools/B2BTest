import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import Hidden from "@mui/material/Hidden";
// Use this below for Server Side Render/Translation (SSR)

// Use this below for Static Site Generation (SSG)
// // import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from "~/theme/common";
import Header from "../../components/Header";
import BannerSlider from "../../components/BannerSlider";
import Feature from "../../components/Feature";
import Counter from "../../components/Counter";
import Testimonials from "../../components/Testimonials";
import Pricing from "../../components/Pricing";
import Blog from "../../components/Blog";
import Subscribe from "../../components/Subscribe";
import Footer from "../../components/Footer";
import Corner from "../../components/Corner";
import Notification from "../../components/Notification";
import brand from "~/public/text/brand";
import TrustedBanner from "../../components/TrustetBanner/TrustedBanner";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useDatabase } from "../../context/DatabaseContext";

function Landing(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const { articles, isLoading } = useDatabase();
  return (
    <React.Fragment>
      <Head>
        <title>{brand.starter.name + " - Home Page"}</title>
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
            id="testimonials"
            className={classes.wraperSection}
            style={{ backgroundColor: "#252525" }}
          >
            <Testimonials />
          </section>
          <section className={classes.wraperTrustedBanner}>
            <Counter dark />
          </section>
        </main>
        <FloatingWhatsApp />
        <Footer toggleDir={onToggleDir} />
      </div>
    </React.Fragment>
  );
}

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async () => ({});

// Use this below for Static Site Generation (SSG)
// // const getStaticProps = makeStaticProps(['common']);
// // export { getStaticPaths, getStaticProps };

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;
