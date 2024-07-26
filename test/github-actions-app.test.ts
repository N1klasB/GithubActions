import { handler } from "../src";

describe("Github Actions tests", () => {

    it("returns name and text", async () => {
        const output = await handler ({ name: "Niklas" });
        expect(output).toStrictEqual("Good Job Niklas!")
    })

    it("returns no name and text", async () => {
        const output = await handler ({ name: ""});
        expect(output).toStrictEqual("Good Job")
    })
});