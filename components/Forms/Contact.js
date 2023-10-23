import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  CircularProgress,
  Paper,
  Typography,
  CssBaseline,
} from "@mui/material";
import Alert from "@mui/material/Alert";

const ContactForm = (props) => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    // Sending email code (commented out for the example)

    setIsSubmitting(false);
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <CssBaseline />
      <Container sx={{ padding: "120px", position: "relative" }}>
        <Grid
          container
          spacing={10}
          sx={{
            display: "flex",
            alignItems: "stretch", // Intinderea componentelor pe inaltime
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                // padding: 2,
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%", // Asigura inaltimea la 100%
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "white", textAlign: "start", marginBottom: 2 }}
              >
                Contact Us
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  name="from_name"
                  type="text"
                  label="Name"
                  variant="filled"
                  fullWidth
                  sx={{
                    marginBottom: 2,
                    "& .MuiFilledInput-input": {
                      backgroundColor: "#252525", // Background color
                      color: "white", // Text color
                      borderRadius: 2,
                    },
                    "& .MuiFormLabel-root": {
                      color: "white", // Text color
                    },
                  }}
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name="email"
                  type="email"
                  label="Email"
                  variant="filled"
                  fullWidth
                  sx={{
                    marginBottom: 2,
                    "& .MuiFilledInput-input": {
                      backgroundColor: "#252525", // Background color
                      color: "white", // Text color
                      borderRadius: 2,
                    },
                    "& .MuiFormLabel-root": {
                      color: "white", // Text color
                    },
                  }}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name="message"
                  label="Message"
                  variant="filled"
                  multiline
                  rows={5}
                  fullWidth
                  sx={{
                    marginBottom: 2,
                    backgroundColor: "#252525", // Background color
                    borderRadius: 2,
                    "& .MuiFilledInput-input": {
                      borderRadius: 2,
                      color: "white", // Text color
                    },
                    "& .MuiFormLabel-root": {
                      backgroundColor: "#252525", // Background color
                      borderRadius: 2,
                      color: "white", // Text color
                    },
                    "& .MuiInputBase-root": {
                      backgroundColor: "#252525", // Background color
                      borderRadius: 2,

                      // padding: 0, // Text color
                    },
                  }}
                  value={formData.message}
                  onChange={handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "700",
                    backgroundColor: "#d3a03e",
                    color: "white",
                    width: "170px",
                    textTransform: "none",
                    border: "1px solid transparent",
                    transition: "background-color 0.3s", // Adaugă o tranziție pentru culoarea de fundal
                    "&:hover": {
                      backgroundColor: "transparent", // Culorea de fundal pentru hover
                      border: "1px solid #d3a03e", // Adaugă o bordură la hover
                    },
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <CircularProgress size={24} /> : "Send"}
                </Button>
              </form>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                backgroundColor: "#252525",
                padding: 2,
                minHeight: "100%", // Asigura inaltimea la 100%
                width: "100%",
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                sx={{ color: "white", paddingBottom: 2 }}
              >
                Contact Information
              </Typography>

              <Typography
                sx={{ fontSize: "16px", color: "white", marginTop: 1 }}
              >
                Address
              </Typography>
              <Typography
                sx={{ fontSize: "16px", color: "white", marginTop: 1 }}
              >
                Strada Tudor Vladimirescu 94, Targoviste, Dambovita
              </Typography>

              <Typography
                sx={{ fontSize: "16px", color: "white", marginTop: 1 }}
              >
                Phone{" "}
                <span>
                  {" "}
                  <a
                    href="tel:+40774621411"
                    sx={{ fontSize: "16px", color: "white", marginTop: 1 }}
                  ></a>
                </span>
              </Typography>

              <Typography
                sx={{ fontSize: "16px", color: "white", marginTop: 1 }}
              >
                Email <span> office@mattealeconsulting.com</span>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactForm;
