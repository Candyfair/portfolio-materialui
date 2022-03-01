// Import dependencies
const express = require("express");
const app = express();
require("dotenv").config()

const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

// body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// cors
app.use(cors());

// Send e-mail route
app.post("/send-mail", cors(), async (req, res) => {
    let {text} = req.body;
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    await transport.sendMail({
        from: process.env.MAIL_FROM,
        to: "test@test.com",
        subject: "test e-mail",
        html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <h2>Here is your e-mail!</h2>
        <p>${text}</p>
        
        <p>All the best, Candy</p>
        </div>`
    })

});

// Server starts
app.listen((process.env.PORT || 4000, () => {
    console.log("Server is listening on port 4000");
}));
