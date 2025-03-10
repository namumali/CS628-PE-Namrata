require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const recipeRoutes = require("./routes/recipes");
app.use("/api/recipes", recipeRoutes);
  

app.listen(5001, () => console.log("Server running on port 5001"));
