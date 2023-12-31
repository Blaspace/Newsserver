const cors = require("cors");
const express = require("express");
const router = require("./routes/AllRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(3500, () => console.log(`app running on ${3500}`));
