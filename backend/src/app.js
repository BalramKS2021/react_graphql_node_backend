import "dotenv/config";
import cors from "cors";
import express from "express";
import router from "./routes/index.js";
import { server } from "./controller/message-controller.js";
import "./routes/db.js";

let app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
// home page
app.get("/", (req, res) => {
  res.send("home page").status(200);
  return res.end();
});
// apis
app.use("/api", router);

const port = process.env.PORT || 4000;

server.start(port, () => {
  console.log(`Server on http://localhost:${port}`);
});

app.listen(4001, () => console.log("app listening on port 4001"));
