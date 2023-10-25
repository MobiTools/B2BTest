import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import ScrollAnimation from "react-scroll-animation-wrapper";
import { useTranslation } from "next-i18next";
import { useText } from "~/theme/common";
import useStyles from "./expertise-style";
import TitleDeco from "./Title/WithDecoration";

function Expertise() {
  // Theme breakpoints
  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // Translate Function
  const { t } = useTranslation("common");

  const { classes, cx } = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container justifyContent="center" spacing={6}>
          <Grid item md={4} xs={12}>
            <div className={classes.titleDeco}>
              {isDesktop && (
                <svg
                  fill="#252525"
                  width={845}
                  height={1099}
                  className={classes.decoration}
                >
                  <use xlinkHref="/images/expertise/wave_decoration.svg#main" />
                </svg>
              )}
              <TitleDeco text={"Our expertise"} />
              <ScrollAnimation
                animateOnce
                animateIn="zoomInShort"
                offset={-50}
                delay={300}
                duration={0.3}
              ></ScrollAnimation>
            </div>
          </Grid>
          <Grid item lg={7} md={8} xs={12}>
            <h4 className={text.subtitle} style={{ color: "white" }}>
              Our team at MATTEALE CONSULTING consists of highly skilled SAP
              consultants with extensive experience in various SAP modules,
              including:
            </h4>

            <div className={classes.list}>
              <Grid container spacing={4}>
                <Grid item sm={6} xs={12}>
                  <div
                    className={cx(classes.descIcon, classes.iconPrimary)}
                  ></div>
                  <h3 className={text.subtitle} style={{ color: "white" }}>
                    SAP S/4HANA
                  </h3>
                  <p className={text.paragraph} style={{ color: "white" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div
                    className={cx(classes.descIcon, classes.iconSecondary)}
                  ></div>
                  <h3 className={text.subtitle} style={{ color: "white" }}>
                    SAP S/4HANA
                  </h3>
                  <p className={text.paragraph} style={{ color: "white" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                  </p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div
                    className={cx(classes.descIcon, classes.iconAccent)}
                  ></div>
                  <h3 className={text.subtitle} style={{ color: "white" }}>
                    SAP S/4HANA
                  </h3>
                  <p className={text.paragraph} style={{ color: "white" }}>
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <div
                    className={cx(classes.descIcon, classes.iconAccent)}
                  ></div>
                  <h3 className={text.subtitle} style={{ color: "white" }}>
                    SAP S/4HANA
                  </h3>
                  <p className={text.paragraph} style={{ color: "white" }}>
                    standard dummy text ever since the 1500s.
                  </p>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Expertise;
