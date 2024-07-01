import dotenv from "dotenv";

// require("dotenv").config({ path: "./env" });

import connectToDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectToDB()
  .then(() => {
    app.on("Error", (Error) => {
      console.log("ERR:", Error);
    });

    app.get("/", (req, res) => {
      res.send("hello AZLAN");
    });

    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is Starting aat PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`mongoDB Connection FUILED !!!!! `, err);
  });
