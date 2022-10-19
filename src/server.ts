import express from "express";
import cors from "cors";
import user from "./routes/users.js";
import match from "./routes/matches.js";
import root from "./routes/root.js";

const app = express();
var corsOptions = {
  origin: "http://example.com",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use("/", root);
app.use("/users", user);
app.use("/matches", match);

//set server as a variable and export for tests
let server = app.listen(8000, () => {
  console.log("Running on 8000");
});

//function to stop after tests run
function stop() {
  server.close();
}

export default server;
