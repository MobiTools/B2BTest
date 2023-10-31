import React, { useState, useEffect } from "react";

import { Alert, CssBaseline } from "@mui/material";
import ContactForm from "../../components/Forms/Contact";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import MapContainer from "../../components/Forms/ContactMap";
import Head from "next/head";

function Contact() {
  const [isMessageSent, setIsMessageSent] = useState(false); // Stare pentru a afișa mesajul de succes

  useEffect(() => {
    // Dacă mesajul a fost trimis cu succes, setează o întârziere pentru a-l ascunde după 3 secunde
    if (isMessageSent) {
      const timeoutId = setTimeout(() => {
        setIsMessageSent(false);
      }, 3000); // Ascunde mesajul după 3 secunde (3000 milisecunde)

      // Curăță timeout-ul când componenta este demontată pentru a evita memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [isMessageSent]);

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
      <Header />
      <CssBaseline />
      <div style={{ backgroundColor: "#252525" }}>
        <section>
          <ContactForm
            setIsMessageSent={setIsMessageSent}
            isMessageSent={isMessageSent}
          />
        </section>
        <section>
          <MapContainer />
        </section>
        <section>
          <Footer />
        </section>
      </div>
      {/* Afișează Alert-ul pentru mesajul de succes în partea de jos a browserului */}
      {isMessageSent && (
        <Alert
          severity="success"
          sx={{
            position: "fixed",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            maxWidth: 500,
            zIndex: 1000, // Asigură că alerta este afișată peste tot conținutul
            marginBottom: 5,
            backgroundColor: "#edf7ed", // Verde deschis transparent
          }}
        >
          Message sent successfully!
        </Alert>
      )}
    </>
  );
}

export default Contact;
