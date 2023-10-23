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

const gridList = [
  {
    image: { finalUri: "/pozaweb2-1.png" },
    title: "Titlu serviciu",
    description:
      "asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd",
  },
  {
    image: { finalUri: "/pozaweb2-1.png" },
    title: "Titlu serviciu",
    description:
      "asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd",
  },
  {
    image: { finalUri: "/pozaweb2-1.png" },
    title: "Titlu serviciu",
    description:
      "asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd",
  },
  {
    image: { finalUri: "/pozaweb2-1.png" },
    title: "Titlu serviciu",
    description:
      "asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd",
  },
  {
    image: { finalUri: "/pozaweb2-1.png" },
    title: "Titlu serviciu",
    description:
      "asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd",
  },
  {
    image: { finalUri: "/pozaweb2-1.png" },
    title: "Titlu serviciu",
    description:
      "asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd asdasddddsdadasdsd asdsd s d dsdasdasdsdasdasdasdasdas dasdasdasa sdasdasasdsdsd",
  },
];

const MediaCard = ({ item }) => {
  const route = useRouter();
  return (
    <Card
      sx={{
        maxWidth: 300,
        width: "100%",
        minHeight: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <CardMedia
          sx={{ height: 140 }}
          image={item.image.finalUri}
          title="green iguana"
        />
        <CardContent>
          <Typography
            variant="h2"
            color="white"
            fontSize={30}
            fontWeight={"bold"}
          >
            {item.title}
          </Typography>
          <Typography
            gutterBottom
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
            variant="body1"
            color="white"
          >
            {item.metaDescription}
          </Typography>
        </CardContent>
      </div>
      <CardActions
        sx={{
          height: "100%",

          maxHeight: "none",
          minHeight: "100%",
          marginBottom: 2,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            width: "100%",
            height: "100%",

            maxHeight: "none",
            minHeight: "100%",
          }}
        >
          <Button
            onClick={() =>
              route.push({
                pathname: "/services/[id]",
                query: {
                  id: item.id,
                },
              })
            }
            size="small"
            sx={{
              fontSize: "15px",
              fontWeight: "700",

              backgroundColor: "transparent",
              color: "white",
              width: "170px",
              textTransform: "none",
              border: "1px solid #d3a03e",
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: "rgba(211, 160, 62, 0.1)",
                border: "1px solid #d3a03e",
              },
            }}
          >
            Read More
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export function Services() {
  const { classes, cx } = useSpacing();
  const { services } = useDatabase();

  React.useEffect(() => {
    console.log("asdadsasd");
    console.log(services);
  }, []);
  return (
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
  );
}

export default Services;
