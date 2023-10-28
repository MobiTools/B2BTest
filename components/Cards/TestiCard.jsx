import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import Image from "next/image";

export default function NewsCard(props) {
  const route = useRouter();
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

  const handleRoute = (item) => {
    route.push({
      pathname: "/news/[slug]",
      query: {
        slug: item.id,
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 1 }} elevation={0}>
      <Image
        height={200}
        width={440}
        src={props.item.image.finalUri}
        alt="green iguana"
        style={{ objectFit: "cover", width: "100%" }}
        loading="lazy"
      />
      <CardContent sx={{ height: "auto", minHeight: "170px", padding: "24px" }}>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {props.item.name}
        </Typography>
        <Typography variant="body2" color="white" style={cardTextStyles}>
          {props.item.metaDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => handleRoute(props.item)}
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
}
