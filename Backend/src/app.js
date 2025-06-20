const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db/db"); 

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const orderRoutes = require("./routes/orderRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

app.use('/',orderRoutes);
app.use('/',serviceRoutes);

module.exports = app;
