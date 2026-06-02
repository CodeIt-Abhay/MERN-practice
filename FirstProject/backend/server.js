const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/notesDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
const noteRoutes = require("./routes/noteRoutes");
app.use("/api/notes", noteRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));