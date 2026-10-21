const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./utils/dbConnect");


dotenv.config();
connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/register", require("./Controllers/adminRegister"));
app.use("/api/login", require("./Controllers/login"));
app.use("/api/registerCompany", require("./Controllers/companyRegistration"));
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}); 

