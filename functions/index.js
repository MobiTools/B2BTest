const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "radu.p@gmail.com",
    pass: "njem eqak ptoz eqbh",
  },
});

exports.sendEmail = functions.https.onRequest(async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "GET, POST");
    res.status(204).send("");
    return undefined;
  }
  if (req.method !== "POST") {
    res.status(405).end();
    return undefined;
  }
  const { fullName, email, message } = req.body;
  const mailOptions = {
    from: email,
    to: "radu.p1995@yahoo.com",
    subject: `Message from ${fullName}`,
    text: message,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true });
    return undefined;
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ success: false });
    return undefined;
  }
});
