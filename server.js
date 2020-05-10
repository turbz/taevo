const compression = require("compression");
const express = require("express");
const helmet = require("helmet");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
const creds = require("./config/config");
const path = require("path");

const app = express();

// compress all responses
app.use(compression());

//  helmet setup
app.use(helmet());

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cors setup
app.use(cors());

// Serve the static files from the React app
app.use(express.static("build"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let transport = {
  pool: true,
  host: "mail.taevo.co.za",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/send", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;

  let mail = {
    from: name,
    to: creds.USER, //Change to email address that you want to receive messages on
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});

// // // Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`express is running on port ${PORT}`));
