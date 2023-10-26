import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useTranslation } from "next-i18next";
import useStyles from "./action-style";

function CallAction() {
  // Translation Function
  const { t } = useTranslation("common");

  const { classes } = useStyles();
  return (
    <Container sx={{ padding: 0 }}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container alignItems="center">
            <Grid item md={9} xs={12}>
              <Typography
                variant="h4"
                gutterBottom
                display="block"
                style={{ color: "rgb(255,192,69)" }}
              >
                Ready to get started?
              </Typography>
              <Typography
                display="block"
                component="p"
                style={{ color: "white", fontSize: "20px" }}
              >
                Pellentesque ac bibendum tortor. Nulla eget lobortis lacus.
              </Typography>
            </Grid>
            <Grid item md={3} xs={12}>
              <Grid container alignItems="center">
                <Button
                  size="large"
                  variant="outlined"
                  color="accent"
                  href="/contact"
                  className={classes.button}
                  sx={{ color: "rgb(255,192,69)" }}
                >
                  Contact us
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
  );
}

export default CallAction;
