import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDatabase } from "../../context/DatabaseContext";
import { useSpacing } from "../../theme/common";
import { useRouter } from "next/router";
import Head from "next/head";
import { handleGetServices } from "../../utils/realtimeUtils";

export async function getStaticProps() {
  // Obține datele din baza de date aici
  const services = await handleGetServices();

  return {
    props: {
      services,
    },
  };
}

const MediaCard = ({ item }) => {
  const route = useRouter();
  const maxLines = 4;
  const cardTextStyles = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: maxLines,
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "1.4em", // Înălțimea unei linii
    maxHeight: `${maxLines * 1.4}em`, // Înălțime maximă calculată în funcție de numărul de rânduri
  };

  return (
    <Card
      elevation={0}
      sx={{
        maxWidth: 345,
        width: "100%",
        borderRadius: 1,
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <CardMedia
          sx={{ height: 200, width: 440 }}
          image={item.image.finalUri}
          title="green iguana"
        />
        <CardContent
          sx={{ height: "auto", minHeight: "170px", padding: "24px" }}
        >
          <Typography gutterBottom variant="h5" component="div" color="white">
            {item.title}
          </Typography>
          <Typography
            gutterBottom
            color="white"
            variant="body2"
            style={cardTextStyles}
          >
            {item.metaDescription}
          </Typography>
        </CardContent>
      </div>

      <CardActions>
        <Button
          onClick={() =>
            route.push({
              pathname: "/services/[slug]",
              query: {
                slug: item.id,
              },
            })
          }
          sx={{
            fontSize: "15px",
            fontWeight: "700",
            backgroundColor: "transparent",
            color: "white",
            width: "100%",
            textTransform: "none",
            border: "1px solid #d3a03e",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "rgba(211, 160, 62, 0.1)",
              border: "1px solid #d3a03e",
            },
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export function Services({ services }) {
  const { classes, cx } = useSpacing();
  // const { services } = useDatabase();

  const maxLines = 4; // Numărul maxim de rânduri dorit

  const cardTextStyles = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: maxLines,
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "1.4em", // Înălțimea unei linii
    maxHeight: `${maxLines * 1.4}em`, // Înălțime maximă calculată în funcție de numărul de rânduri
  };

  React.useEffect(() => {
    console.log("asdadsasd");
    console.log(services);
  }, []);

  return (
    <>
      <Head>
        <title>Home | Numele Site-ului</title>
        <meta
          name="description"
          content="Descrierea relevantă pentru pagina de start."
        />
        <meta name="og:title" content="Home | Numele Site-ului" />
        <meta
          name="og:description"
          content="Descrierea relevantă pentru pagina de start."
        />
        <meta name="keywords" content="cuvant1, cuvant2, cuvant3" />
      </Head>
      <div style={{ backgroundColor: "#252525" }}>
        <section>
          <Header />
        </section>
        <section>
          <div className={classes.imgContainer}>
            <img
              src="/servicesHeader.png"
              alt="About Matteale Services image"
              className={classes.aboutImg}
            />
            <h2 className={classes.aboutText}>Services</h2>
          </div>
        </section>

        <section>
          <div
            style={{
              backgroundColor: "black",
            }}
            className={classes.wraperSection}
          >
            <Grid
              container
              rowSpacing={4}
              columnSpacing={2}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {services.servicesArray &&
                services.servicesArray.map((item, index) => {
                  return (
                    <Grid
                      key={index}
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        height: 450,
                      }}
                    >
                      <MediaCard item={item} />
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Services;
