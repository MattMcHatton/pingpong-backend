import express from "express";
import cors from "cors";

const app = express();
var corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.route("/").get((req, res) => {
  res.status(200);
  res.send("Hello World!!");
});

app.route("/myendpoint").get((req, res) => {
  res.status(200);
  res.send({ name: "Matt", phone: "555-555-5555" });
});

app.listen(8000, () => {
  console.log("Running on 8000");
});
