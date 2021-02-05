import express from "express";
import posts from "./posts";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.json("Hello World!");
});

app.use("/posts", posts);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
