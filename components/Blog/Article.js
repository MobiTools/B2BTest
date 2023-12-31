import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "next-i18next";
import CommentForm from "../Comment/Form";
import Item from "../Comment/Item";
import useStyles from "./blog-style";

function Article({ filteredArticles }) {
  const { classes } = useStyles();
  const { t } = useTranslation("common");

  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <article className={classes.article}>
        <div className={classes.content}>
          <Typography variant="h4" className={classes.titleBlog}>
            {filteredArticles.title}
          </Typography>
          <span className={classes.caption} style={{ color: "white" }}>
            {filteredArticles.date}
          </span>
          <figure className={classes.imageBlog}>
            <img src={filteredArticles.image.finalUri} alt="blog" />
          </figure>
          <div
            dangerouslySetInnerHTML={{
              __html: filteredArticles.content,
            }}
            style={{ color: "white" }}
          ></div>

          <Divider className={classes.dividerBordered} />
        </div>
      </article>
      <section className={classes.socmedShare}>
        <div className={classes.btnArea}>
          <Typography variant="h6" sx={{ color: "white" }}>
            Share to social media
          </Typography>
          <Box mt={3}>
            <Button
              variant="outlined"
              className={classes.indigoBtn}
              type="button"
            >
              <i className="ion-social-facebook" />
              {isDesktop && "Facebook"}
            </Button>
            <Button
              variant="outlined"
              className={classes.cyanBtn}
              type="button"
            >
              <i className="ion-social-twitter" />
              {isDesktop && "Twitter"}
            </Button>
            <Button
              variant="outlined"
              className={classes.blueBtn}
              type="button"
            >
              <i className="ion-social-linkedin" />
              {isDesktop && "Linkedin"}
            </Button>
          </Box>
        </div>
      </section>
      <Divider className={classes.dividerBordered} />
    </div>
  );
}

export default Article;
