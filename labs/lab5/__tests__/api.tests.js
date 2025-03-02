import request from "supertest";
import { handler } from "../netlify/functions/api.js";

describe("Meme Generator API", () => {
    it("should return a list of images for a valid search query", async () => {
        const res = await request(handler).get("/api/search-images?query=meme");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveLength(5);
    });
});
