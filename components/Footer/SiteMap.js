import React from "react";
import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "next-i18next";
import logo from "~/public/images/logo-starter.svg";
import brand from "~/public/text/brand";
import { useTextAlign } from "~/theme/common";
import SelectLang from "../LangSwitch/Select";
import useStyles from "./sitemap-style";
import Logo from "../Logo";
import Subscribe from "../Subscribe";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Copyright() {
  return (
    <Typography
      sx={{ color: "white" }}
      variant="body2"
      display="block"
      color="textSecondary"
    >
      &copy;&nbsp; xx All Rights Reserved 2023
    </Typography>
  );
}

const footers = [
  {
    title: "Company",
    description: ["About us", "Services", "Contact us", "News"],
    link: ["/about", "/services", "/contact", "/news"],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
    link: [
      "#resource",
      "#resource-name",
      "#another-resource",
      "#final-resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
    link: ["/privacypolicy", "#terms-of-use"],
  },
];

function Footer(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Translation Function
  const { toggleDir } = props;
  const { t } = useTranslation("common");

  const { classes } = useStyles();
  const { classes: align } = useTextAlign();

  return (
    <div maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <div style={{ overflow: "hidden" }}>
            <img src={"/logo-transparent-white-1.png"} alt="logo" width={150} />

            <Typography
              color="textPrimary"
              className={classes.footerDesc}
              gutterBottom
            >
              asdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Typography>
          </div>
          {isDesktop && <Copyright />}
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4} justifyContent="space-evenly">
            {footers.map((footer) => (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                key={footer.title}
                className={classes.siteMapItem}
              >
                <div>
                  <Typography
                    variant="h6"
                    className={classes.title}
                    color="white"
                    gutterBottom
                  >
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map((item, index) => (
                      <li key={item}>
                        <Link
                          href={footer.link[index]}
                          className={classes.navLinkMixed}
                          variant="subtitle1"
                          underline="hover"
                          style={{ color: "white" }}
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.socmed}>
            <IconButton
              aria-label="FB"
              className={classes.margin}
              size="small"
              style={{ backgroundColor: "#1877F2", marginLeft: 0 }}
            >
              <a
                href="https://www.facebook.com/mattealeconsulting"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <FacebookIcon style={{ color: "white" }} />
              </a>
            </IconButton>

            <IconButton
              aria-label="IG"
              className={classes.margin}
              size="small"
              style={{
                background:
                  "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <a
                href="https://www.instagram.com/mattealeconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <InstagramIcon style={{ color: "white" }} />
              </a>
            </IconButton>

            <IconButton
              aria-label="LI"
              className={classes.margin}
              size="small"
              style={{ backgroundColor: "#0077B5" }}
            >
              <a
                href="https://www.linkedin.com/company/matteale-consulting-services/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <LinkedInIcon style={{ color: "white" }} />
              </a>
            </IconButton>

            <IconButton
              aria-label="YT"
              className={classes.margin}
              size="small"
              style={{ backgroundColor: "#FF0000" }}
            >
              <a
                href="https://www.youtube.com/channel/UCcCrYY8-Afj8UvVuM0PyC_A"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center" }}
              >
                <YouTubeIcon style={{ color: "white" }} />
              </a>
            </IconButton>
          </div>
          <Subscribe />
        </Grid>
      </Grid>
      {isMobile && (
        <div className={align.textCenter}>
          <Box p={4}>
            <Copyright />
          </Box>
        </div>
      )}
    </div>
  );
}

Footer.propTypes = {
  toggleDir: PropTypes.func,
};

Footer.defaultProps = {
  toggleDir: () => {},
};

export default Footer;
