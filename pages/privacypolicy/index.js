import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CookiesPrivacyPolicyPage = () => {
  return (
    <>
      <Header />
      <div style={{ backgroundColor: "black", height: "100vh" }}>
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" gutterBottom color={"white"}>
            Cookies and Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph color={"white"}>
            This is the content of your Cookies and Privacy Policy. You can
            provide details about how you handle cookies and user privacy here.
          </Typography>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default CookiesPrivacyPolicyPage;
