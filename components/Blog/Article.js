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

function Article() {
  const { classes } = useStyles();
  const { t } = useTranslation("common");

  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const content = `<div>
  <span style="font-size: 18px;">Quill Rich Text Editor</span>
</div>
<div>
  <br>
</div>
<div>Quill is a free,
  <a href="https://github.com/quilljs/quill/">open source</a>WYSIWYG editor built for the modern web. With its
  <a href="http://quilljs.com/docs/modules/">extensible architecture</a>and a
  <a href="http://quilljs.com/docs/api/">expressive API</a>you can completely customize it to fulfill your needs. Some built in features include:</div>
<div>
  <br>
</div>
<ul>
  <li>Fast and lightweight</li>
  <li>Semantic markup</li>
  <li>Standardized HTML between browsers</li>
  <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
</ul>
<div>
  <br>
</div>
<div>
  <span style="font-size: 18px;">Downloads</span>
</div>
<div>
  <br>
</div>
<ul>
  <li>
      <a href="https://quilljs.com">Quill.js</a>, the free, open source WYSIWYG editor</li>
  <li>
      <a href="https://zenoamaro.github.io/react-quill">React-quill</a>, a React component that wraps Quill.js</li>
</ul>`;
  return (
    <div className={classes.root}>
      <article className={classes.article}>
        <div className={classes.content}>
          <Typography variant="h4" className={classes.titleBlog}>
            Maecenas rutrum dolor sed nisi
          </Typography>
          <span className={classes.caption} style={{ color: "white" }}>
            June 19, 2020 by Oliver
          </span>
          <figure className={classes.imageBlog}>
            <img src="https://source.unsplash.com/random" alt="blog" />
          </figure>
          <div
            dangerouslySetInnerHTML={{
              __html: content,
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
