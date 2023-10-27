import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Hidden from "@mui/material/Hidden";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
import Carousel from "react-slick";
import { useTranslation } from "next-i18next";
import { useText } from "~/theme/common";
import useStyles from "./slider-style";
import { Button } from "@mui/material";
import { useSpacing } from "../../theme/common";
import ScrollAnimation from "react-scroll-animation-wrapper";
import { useRouter } from "next/router";

function BannerSlider() {
  const { classes: spacingClasses } = useSpacing();
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation("common");
  const slider = useRef(null);
  const route = useRouter();

  const [loaded, setLoaded] = useState(false);
  const [curSlide, setCurSlide] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    infinite: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          dots: true,
          fade: true,
        },
      },
    ],
  };

  const handleAfterChange = (currentSlide) => {
    setCurSlide(currentSlide);
  };

  const gotoSlide = (slide) => {
    slider.current.slickGoTo(slide);
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className={classes.bannerWrap}>
        {loaded && (
          <div className={classes.carousel}>
            <Grid container style={{ width: "100%", height: "88vh" }}>
              <Grid
                item
                sm={8}
                lg={8}
                xs={12}
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ backgroundColor: "#252525" }}
                className={spacingClasses.bannerWrapper1}
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  offset={100}
                  delay={100}
                  duration={1.0}
                >
                  <div className={classes.text}>
                    <h1
                      className={text.title}
                      style={{
                        color: "white",
                        margin: 0,
                        padding: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      Let us handle your services
                    </h1>

                    <h2
                      style={{
                        color: "white",
                        margin: 0,
                        padding: 0,
                        lineHeight: 1.5,
                      }}
                    >
                      Our services are
                      <span style={{ color: "#d3a03e", lineHeight: 1.5 }}>
                        {" "}
                        tailored to your needs.
                      </span>
                    </h2>
                    <Button
                      onClick={() => route.push("/services")}
                      className={classes.buttonHeader}
                    >
                      Learn More
                    </Button>
                  </div>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                sm={4}
                lg={4}
                xs={12}
                style={{
                  backgroundColor: "black",
                }}
                className={spacingClasses.bannerWrapper2}
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  offset={100}
                  delay={100}
                  duration={1.0}
                >
                  <img
                    src="/pozaHeader.png"
                    alt="Imaginea principală a serviciilor noastre"
                    className={classes.imageHeader}
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </>
  );
}

export default BannerSlider;
