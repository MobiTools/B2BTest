import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTranslation } from "next-i18next";
import useStyles from "./blog-style";
import { usePathname } from "next/navigation";

// Definiți stilurile CSS direct aici
const customStyles = `
  /* Stiluri pentru paragrafe */
  p {
    font-size: 20px;
    line-height: 1.5;
  }

  /* Stiluri pentru titluri */
  h1 {
    font-size: 40px;
    font-weight: bold;
  }

  h2 {
    font-size: 30px;
    font-weight: bold;
  }

  /* Alte stiluri pentru elementele generate de react-quill */
`;

function Article({ filteredArticles }) {
  const { classes } = useStyles();
  const { t } = useTranslation("common");
  const pathname = usePathname();

  // Functie pentru partajare pe Facebook
  const shareOnFacebook = () => {
    console.log(pathname);
    console.log(window.location.hostname);
    console.log(window.location.href);
    const url = window.location.href;
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  // Functie pentru partajare pe Twitter
  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?url=${url}`, "_blank");
  };

  // Functie pentru partajare pe LinkedIn
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${url}`,
      "_blank"
    );
  };

  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <style>{customStyles}</style> {/* Incluziunea stilurilor CSS */}
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
              onClick={shareOnFacebook}
            >
              <i className="ion-social-facebook" />
              {isDesktop && "Facebook"}
            </Button>
            <Button
              variant="outlined"
              className={classes.cyanBtn}
              type="button"
              onClick={shareOnTwitter}
            >
              <i className="ion-social-twitter" />
              {isDesktop && "Twitter"}
            </Button>
            <Button
              variant="outlined"
              className={classes.blueBtn}
              type="button"
              onClick={shareOnLinkedIn}
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
