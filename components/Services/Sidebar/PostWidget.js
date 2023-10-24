import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "next-i18next";
import Paper from "../../Paper";
import useStyles from "../service-style";
import { Button } from "@mui/material";
import { useDatabase } from "../../../context/DatabaseContext";
import { useRouter } from "next/router";
import ListAltIcon from "@mui/icons-material/ListAlt";

function PostWidget() {
  const { classes } = useStyles();
  const { t } = useTranslation("common");
  const { services } = useDatabase();
  const route = useRouter();
  const handleRoute = (item) => {
    route.push({
      pathname: "/services/[slug]",
      query: {
        slug: item.id,
      },
    });
  };
  return (
    <Paper
      title={"Other services"}
      sx={{ alignText: "start" }}
      icon="none"
      whiteBg
      desc=""
    >
      <div
        className={classes.albumRoot}
        style={{ backgroundColor: "transparent" }}
      >
        <List component="nav">
          {services.servicesArray.map((item, index) => (
            <ListItem
              key={index.toString()}
              onClick={() => handleRoute(item)}
              button
              sx={{ width: "auto", paddingLeft: 0, paddingRight: 0 }}
              className={classes.listItemContainer}
            >
              <ListItemText
                className={classes.listItem}
                primary={item.title}
                primaryTypographyProps={{
                  style: { color: "white", width: "auto" },
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
}

export default PostWidget;
