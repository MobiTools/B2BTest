import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import link from "~/public/text/link";
import { useText } from "~/theme/common";
import useStyles from "./blog-style";
import { useRouter } from "next/router";

function Headline({ newestArticle }) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const route = useRouter();
  return (
    <Card className={classes.blogHeadline}>
      <CardMedia
        className={classes.media}
        image={newestArticle && newestArticle.image.finalUri}
      />
      <CardActionArea
        onClick={() =>
          route.push({
            pathname: "/news/[slug]",
            query: {
              slug: newestArticle.id,
            },
          })
        }
      >
        <CardContent>
          <span className={classes.anchorContent}>
            <span className={cx(classes.headlineTitle, text.title2)}>
              {newestArticle && newestArticle.name}
            </span>
            <span className={cx(classes.subtitle, text.subtitle2)}>
              {newestArticle && newestArticle.metaDescription}
            </span>
          </span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Headline;
