import React from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import link from "~/public/text/link";
import { useText } from "~/theme/common";
import useStyles from "./blog-style";
import { useRouter } from "next/router";
import {
  CssBaseline,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

function Headline({ newestArticle }) {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const route = useRouter();
  return (
    <>
      <CssBaseline />
      <Card className={classes.blogHeadline}>
        <Image
          className={classes.media}
          src={newestArticle && newestArticle.image.finalUri}
          width={500}
          height={500}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          loading="lazy"
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
              <Typography
                className={cx(classes.headlineTitle, text.title2)}
                style={{ fontSize: "40px" }}
              >
                {newestArticle && newestArticle.name}
              </Typography>
              <Typography
                className={cx(classes.subtitle, text.subtitle2)}
                style={{
                  maxHeight: isMobile ? "none" : "5em", // Setează înălțimea maximă pe desktop la 4 linii
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: isMobile ? 4 : "none", // Afisează maxim 4 linii pe desktop
                  overflow: "hidden",
                  fontSize: "20px",
                }}
              >
                {newestArticle && newestArticle.metaDescription}
              </Typography>
            </span>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Headline;
