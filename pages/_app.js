import React, { useState, useEffect } from "react";
import Head from "next/head";
import App from "next/app";
import "./globals.css"
import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import CssBaseline from "@mui/material/CssBaseline";

import { appWithTranslation } from "next-i18next";

import appTheme from "../theme/appTheme";

/* import css */
import "react-18-image-lightbox/style.css";
import "../vendors/animate.css";
import "../vendors/animate-slider.css";
import "../vendors/hamburger-menu.css";
import "../vendors/animate-extends.css";

import { DatabaseProvider } from "../context/DatabaseContext";
import { FloatingWhatsApp } from "react-floating-whatsapp";

let themeType = "light";

const isBrowser = typeof document !== "undefined";
let insertionPoint;

if (isBrowser) {
  const emotionInsertionPoint = document.querySelector(
    'meta[name="emotion-insertion-point"]'
  );
  insertionPoint = emotionInsertionPoint ?? undefined;
}

const cacheRTL = createCache({
  key: "mui-style-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
  insertionPoint,
  prepend: true,
});

const cacheLTR = createCache({
  key: "mui-style-ltr",
  insertionPoint,
  prepend: true,
});

function MyApp(props) {
  const { Component, pageProps, router } = props; // eslint-disable-line
  const [loading, setLoading] = useState(0);



  const themeName = "mainTheme";
  const defaultTheme = "light";
  const [theme, setTheme] = useState({
    ...appTheme(themeName, defaultTheme),
    direction: "ltr",
  });

  useEffect(() => {
    // Set layout direction
    const themeDir = "ltr";
    document.dir = themeDir;


    // Set color mode and direction
    if (themeType === "dark" ) {
      setTheme({
        ...appTheme(themeName, themeType || defaultTheme),
        direction: themeDir,
      });
    }

    // Enable this code below for Server Side Rendering/Translation (SSR)
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath);

    // Remove preloader
    const preloader = document.getElementById("preloader");
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => {
      setLoading(100);
    }, 2000);
  }, []);

  const toggleDirection = (dir) => {
    document.dir = dir;
    // set theme
    setTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette,
      },
    });
  };

  const muiTheme = createTheme(theme);
  return (
    <CacheProvider value={theme.direction === "rtl" ? cacheRTL : cacheLTR}>
      <DatabaseProvider>
        <Head>
          <meta charSet="utf-8" />
          
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta name="image" content="URL-imagine" />
        </Head>

        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
   
          <div id="main-wrap">
            <Component
              {...pageProps}
              onToggleDir={toggleDirection}
              key={router.route}
            />
          </div>
        </ThemeProvider>
      </DatabaseProvider>
      <div className="aspect-ratio-box">
      <FloatingWhatsApp
        phoneNumber="+40787813831"
        accountName="Matteale Consulting"
        avatar="/logo-transparent-white-4.png"
      />
      </div>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
