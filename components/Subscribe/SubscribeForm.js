import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { useTranslation } from "next-i18next";
import useStyles from "./subscribe-style";
import { Button } from "@mui/material";

function SubscribeForm() {
  const { t } = useTranslation("common");
  const { classes } = useStyles();
  const [values, setValues] = useState({
    email: "",
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // Theme breakpoints
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.subscribeWrap} style={{ paddingTop: 20 }}>
      <Paper
        className={classes.paper}
        elevation={0}
        style={{
          padding: 0,
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography color={"white"} align="center" variant="h5">
          Subscribe
        </Typography>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          style={{
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <TextField
            variant="filled"
            id="standard-email"
            label={"Email"}
            className={classes.textField}
            fullWidth
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
            InputProps={{
              style: { color: "white" },
              // placeholder: "Email", // Setează textul de placeholder
            }}
            InputLabelProps={{
              style: { color: "white", borderBottomColor: "red" }, // Setează culoarea etichetei
            }}
          />

          <div style={{ textAlign: "center" }}>
            <Button className={classes.buttonHeader}>Subscribe</Button>
          </div>
        </form>
      </Paper>
    </div>
  );
}

export default SubscribeForm;
