import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Carousel from "react-multi-carousel";
import useStyle from "./testi-style";

const centerContent = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const imageStyle = {
  width: "50%", // Aici am redus lățimea la 50% pentru a le face pe jumătate
  height: "auto", // Păstrăm aspect ratio
};

const TrustedBanner = () => {
  const { classes, cx } = useStyle();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Paper elevation={0}>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUp"
        offset={10}
        delay={100}
        duration={1.0}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2
              style={{
                color: "white",
                fontSize: 37,
                marginTop: 0,
                marginBottom: 40,
                ...centerContent,
              }}
            >
              Trusted by companies of all sizes
            </h2>
          </Grid>
          <Grid item xs={12} style={{ height: "150px" }}>
            <Carousel
              responsive={responsive}
              ssr={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              showDots={true}
              renderDotsOutside={true}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              style={centerContent}
            >
              <div className={classes.cardWrapper}>
                <img
                  src="/kyndryl-logo-3.png"
                  alt="Imagine 1"
                  style={imageStyle}
                />
              </div>
              <div className={classes.cardWrapper}>
                <img
                  src="/kyndryl-logo-3.png"
                  alt="Imagine 1"
                  style={imageStyle}
                />
              </div>
              <div className={classes.cardWrapper}>
                <img
                  src="/kyndryl-logo-3.png"
                  alt="Imagine 1"
                  style={imageStyle}
                />
              </div>
              <div className={classes.cardWrapper}>
                <img
                  src="/kyndryl-logo-3.png"
                  alt="Imagine 1"
                  style={imageStyle}
                />
              </div>
              <div className={classes.cardWrapper}>
                <img
                  src="/kyndryl-logo-3.png"
                  alt="Imagine 2"
                  style={imageStyle}
                />
              </div>
              <div className={classes.cardWrapper}>
                <img
                  src="/kyndryl-logo-3.png"
                  alt="Imagine 3"
                  style={imageStyle}
                />
              </div>
            </Carousel>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </Paper>
  );
};

export default TrustedBanner;
