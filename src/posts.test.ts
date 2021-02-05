import request from "supertest";
import express from "express";

import posts from "./posts";

function setup() {
	const app = express();

	app.use("/posts", posts);

	return app;
}

test("I get two measly posts from my JSON posts endpoint", (done) => {
	const app = setup();

	request(app)
		.get("/posts")
		.expect("Content-Type", /json/)
		.expect(200)
		.then((response) => {
			expect(response.body.length).toBe(2);
			expect(response.body[1].title).toBe(
				"Using TypeScript in Node, the simple way"
			);
			done();
		});
});
