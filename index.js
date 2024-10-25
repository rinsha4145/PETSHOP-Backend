require('dotenv').config();
const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const useRoutes = require('./Routes/userRoutes'); // change import to require

// const cors = require("cors");
// app.use(cors());

app.use('/users', useRoutes);
mongoose.connect(process.env.MONGODB_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
