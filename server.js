const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./utils/dbConnect");


dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());

// Define your routes here
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}); 

