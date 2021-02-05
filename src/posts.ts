import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
	res.json([
		{ id: 1, title: "Fewer mocks, better tests" },
		{ id: 2, title: "Using TypeScript in Node, the simple way" },
	]);
});

export default router;
