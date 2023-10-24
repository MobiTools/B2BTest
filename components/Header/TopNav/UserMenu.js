import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "next-i18next";
import PhoneIcon from "@mui/icons-material/Phone";
import Settings from "./Settings";
import useStyles from "../header-style";
import link from "~/public/text/link";

function UserMenu(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation("common");
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.userMenu}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <PhoneIcon style={{ color: "white" }} />
        <Button
          href={"Tel:+40345404753"}
          style={{ color: "white", marginLeft: "8px" }}
        >
          +40345404753
        </Button>
      </div>
    </div>
  );
}

export default UserMenu;
