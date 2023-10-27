import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useText } from "~/theme/common";
import useStyles from "./about-style";

function Banner() {
  const { classes } = useStyles();
  const { classes: text } = useText();

  return (
    <div
      className={classes.bannerWrap}
      style={{
        backgroundColor: "black",
      }}
    >
      <div className={classes.inner}>
        <Container sx={{ padding: 0 }}>
          <Grid container alignItems="flex-start" justifyContent="flex-start">
            <Grid item sm={6}>
              <Box px={{ sm: 5 }}>
                <div className={classes.text}>
                  <h2
                    className={text.title2}
                    style={{
                      color: "white",
                      marginTop: 0,
                      fontSize: 40,
                      marginBottom: 20,

                      lineHeight: 1,
                    }}
                  >
                    Our story
                  </h2>
                  <h5
                    className={text.subtitle2}
                    style={{ marginTop: 0, fontSize: 20 }}
                  >
                    {
                      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this posts contents"
                    }
                  </h5>
                </div>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box px={{ sm: 5 }}>
                <img
                  // src="/pozaweb2-1.png"
                  src="/servicesHeader.png"
                  alt="illustration"
                  style={{
                    width: "100%",
                    height: "auto",
                    minWidth: "60%",
                    // borderRadius: 2,
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default Banner;