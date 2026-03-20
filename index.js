const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const connectDB = require("./Models/db");
connectDB();

const AuthRouter = require("./Routes/AuthRouter");
const ExpenseRouter = require("./Routes/ExpenseRouter");
const ensureAuthenticated = require("./Middlewares/Auth");

app.use(bodyParser.json());
app.use(cors());

app.get("/ping", (req, res) => {
    res.send("PONG");
});

app.use("/auth", AuthRouter);
app.use("/expenses", ensureAuthenticated, ExpenseRouter);

module.exports = app;