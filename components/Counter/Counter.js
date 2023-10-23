import React, { useState } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import ScrollAnimation from "react-scroll-animation-wrapper";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import EcoIcon from "@mui/icons-material/EnergySavingsLeaf";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import useStyles from "./counter-style";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

function Counter(props) {
  const { classes, cx } = useStyles();
  const { dark } = props;
  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>{isPlay ? <CountUp end={val} /> : 0}</span>
  );
  const route = useRouter();
  const handlePlay = (visible) => {
    if (visible.inViewport) {
      setTimeout(() => {
        setPlay(true);
      }, 500);
    }
  };
  return (
    <div style={{ backgroundColor: "black" }}>
      <Container maxWidth="md">
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offset={300}
          afterAnimatedIn={handlePlay}
        >
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            className={classes.root}
            spacing={0}
          >
            <Grid md={12} item>
              <div className={classes.counterItem}>
                <Typography
                  variant="h3"
                  style={{ color: "white", marginBottom: 40 }}
                >
                  Take your first step towards success
                </Typography>
                <Button
                  onClick={() => route.push("/contact")}
                  className={classes.buttonHeader}
                >
                  Contact Us
                </Button>
              </div>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  dark: PropTypes.bool,
};

Counter.defaultProps = {
  dark: false,
};

export default Counter;
