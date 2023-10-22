import React, { useState } from "react";
import ScrollAnimation from "react-scroll-animation-wrapper";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import { useText } from "~/theme/common";
import useStyles from "./about-style";

function Progress() {
  const { classes } = useStyles();
  const { classes: text } = useText();

  const [play, setPlay] = useState(false);

  const handlePlay = (visible) => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 200);
    }
  };

  return (
    <div className={classes.progressWrap} style={{ padding: 0 }}>
      <ScrollAnimation
        animateOnce
        animateIn="fadeIn"
        delay={400}
        duration={0.3}
        afterAnimatedIn={handlePlay}
      >
        <div style={{ marginBottom: "27px" }}>
          <Typography
            variant="h2"
            className={text.title2}
            style={{ fontSize: "54px" }}
          >
            Our values
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <div
            className={classes.textIcon}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginBottom: "18px",
              marginLeft: "2px",
            }}
          >
            {/* <i className="ion-wand" /> */}
            <Typography
              variant="h4"
              className={text.title2}
              style={{
                color: "rgb(240,181,67)",
                fontSize: "27px",
                lineHeight: "1.5em",
              }}
            >
              Learn
            </Typography>
            <Typography
              variant="body"
              className={text.subtitle2}
              style={{
                marginLeft: 0,
                fontSize: "18px",
                lineHeight: "1.5em",
                marginLeft: "1px",
              }}
            >
              Our learning comes first from the front line, as close to the
              Client as possible.
            </Typography>
          </div>
          <div
            className={classes.textIcon}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginBottom: "18px",
              marginLeft: "2px",
            }}
          >
            <Typography
              variant="h4"
              className={text.title2}
              style={{
                color: "rgb(240,181,67)",
                fontSize: "27px",
                lineHeight: "1.5em",
              }}
            >
              Commit
            </Typography>
            <Typography
              variant="body"
              className={text.subtitle2}
              style={{
                marginLeft: 0,
                fontSize: "18px",
                lineHeight: "1.5em",
                marginLeft: "1px",
              }}
            >
              Committing means opening and closing the loop in a timely manner.
            </Typography>
          </div>
          <div
            className={classes.textIcon}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginBottom: "18px",
              marginLeft: "2px",
            }}
          >
            <Typography
              variant="h4"
              className={text.title2}
              style={{
                color: "rgb(240,181,67)",
                fontSize: "27px",
                lineHeight: "1.5em",
              }}
            >
              Change
            </Typography>
            <Typography
              variant="body"
              className={text.subtitle2}
              style={{
                marginLeft: 0,
                fontSize: "18px",
                lineHeight: "1.5em",
                marginLeft: "1px",
              }}
            >
              Climate change forces change, the one we control.
            </Typography>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Progress;
