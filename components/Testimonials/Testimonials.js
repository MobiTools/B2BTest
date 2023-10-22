import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
// import Carousel from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "next-i18next";
import useStyle from "./testi-style";
import imgAPI from "~/public/images/imgAPI";
import { useText, useTextAlign } from "~/theme/common";
import TestiCard from "../Cards/TestiCard";
import NewsCard from "../Cards/TestiCard";
import { DatabaseProvider, useDatabase } from "../../context/DatabaseContext";

function Testimonials() {
  const { classes, cx } = useStyle();
  const { t } = useTranslation("common");

  const { classes: align } = useTextAlign();
  const { classes: text } = useText();
  const [loaded, setLoaded] = useState(false);
  const { articles, isLoading } = useDatabase();

  let testiContent = [
    {
      text: "Sed imperdiet enim ligula, vitae viverra justo porta vel.",
      avatar: "/pozaweb2-1.png",
      name: "John Doe - CTO La Lieur",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const mappedData = articles.map((item) => {
    // testiContent.splice(0, testiContent.length);
    testiContent.push({
      text: item.metaDescription,
      avatar: item.image.finalUri,
      name: `${item.name}`,
    });
  });

  useEffect(() => {
    setLoaded(true);
    console.log("Text");
    // console.log(mappedData);

    // testiContent = mappedData;
  }, []);

  return (
    <div className={classes.testimonialWrap}>
      <div style={{ marginBottom: 40 }}>
        <Typography
          gutterBottom
          variant="h2"
          className={cx(text.capitalize, align.textCenter)}
          display="block"
          style={{ color: "white" }}
        >
          Check our latest news
        </Typography>
        <Typography
          style={{ color: "white" }}
          gutterBottom
          variant="body1"
          className={align.textCenter}
          display="block"
        >
          We're passionate about this industry! You can find some articles we've
          written here.
        </Typography>
      </div>
      <div className={classes.carousel}>
        {!isLoading && (
          <Carousel
            responsive={responsive}
            ssr={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            showDots={true}
            renderDotsOutside={true}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          >
            {testiContent.map((item, index) => (
              <div className={classes.cardWrapper}>
                <NewsCard item={item} />
              </div>
            ))}
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default Testimonials;
