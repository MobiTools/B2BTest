import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ScrollAnimation from "react-scroll-animation-wrapper";

const centerContent = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};

const TrustedBanner = () => {
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
          <Grid container spacing={2} style={centerContent}>
            <Grid item xs={12} md={4} sm={12}>
              <img
                src="/kyndryl-logo-3.png"
                alt="Imagine 1"
                style={{ width: "270px", height: "80px" }}
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <img
                src="/kyndryl-logo-3.png"
                alt="Imagine 2"
                style={{ width: "270px", height: "80px" }}
              />
            </Grid>
            <Grid item xs={12} md={4} sm={12}>
              <img
                src="/kyndryl-logo-3.png"
                alt="Imagine 3"
                style={{ width: "270px", height: "80px" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </Paper>
  );
};

export default TrustedBanner;
