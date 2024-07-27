const dotenv = require("dotenv");
const express = require("express");
const promptRouter = require("./api/v1/promptServer");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", promptRouter);

const port = process.env.PORT || 3101;
app.listen(port, () => {
  console.log("server spin at port: ", port);
});
