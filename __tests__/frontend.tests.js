import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "../frontend/index.html"), "utf8");

describe("Meme Generator UI", () => {
    let dom, document;

    beforeEach(() => {
        dom = new JSDOM(html);
        document = dom.window.document;
    });

    it("should have an input field for bottom text", () => {
        const input = document.querySelector("#textBottom");
        expect(input).not.toBeNull();
    });

    it("should have a file input for image", () => {
        const input = document.querySelector("#imageUpload");
        expect(input).not.toBeNull();
    });

    it("should have a button to generate meme", () => {
        const button = document.querySelector("button");
        expect(button.textContent).toBe("Generate Meme");
    });
});
