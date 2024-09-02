import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(3001, () => {
  console.log("server is running on http://localhost:3001");
});
