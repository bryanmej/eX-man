require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

// Connection to Data Base
mongoose
  .connect(
    "mongodb+srv://bryanmej:Jackass123!@cluster0-0upwv.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Session
app.use(
  session({
    secret: "S3cr3t",
    saveUninitialized: true,
    resave: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// CORS SETTINGS TO ALLOW CROSS-ORIGIN INTERACTION:
app.use(
  cors({
    credentials: true,
    origin: ["https://brave-meitner-ace637.netlify.com"]
  })
);

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
//app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

// ROUTES MIDDLEWARE STARTS HERE:
const index = require("./routes/authRoutes");
app.use("/", index);

const crud = require("./routes/crudRoutes");
app.use("/", crud);

module.exports = app;
