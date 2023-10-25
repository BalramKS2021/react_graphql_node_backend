import "dotenv/config";
import cors from "cors";
import express from "express";
import router from "./routes/index.js";
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
app.listen(port, () => console.log("app listening on port 4000"));
