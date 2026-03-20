const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

// DB connect
const connectDB = require("./Models/db");
connectDB();

// Routes
const AuthRouter = require("./Routes/AuthRouter");
const ExpenseRouter = require("./Routes/ExpenseRouter");
const ensureAuthenticated = require("./Middlewares/Auth");

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/ping", (req, res) => {
    res.send("PONG");
});

// Routes
app.use("/auth", AuthRouter);
app.use("/expenses", ensureAuthenticated, ExpenseRouter);

// Export for Vercel
module.exports = app;