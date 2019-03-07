const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.use((req, res) => {
  console.log(req.body);

  return res.send();
});

app.listen(3333);
