import {Api, Greeting} from "../Api";
const httpAdapter = require("axios/lib/adapters/http");
import nock = require("nock");

describe("Api", function () {
    let adapter: any;

    beforeEach(()=>{
        adapter = Api.getInstance().defaults.adapter;
        Api.getInstance().defaults.adapter = httpAdapter;
    });

    afterEach(function () {
        Api.getInstance().defaults.adapter = adapter
    });

    it("calls the greeting endpoint", async () => {
        nock("http://localhost:8080")
            .get("/greeting")
            .reply(200, {
                greeting: "hello"
            });

        let greeting = await Api.getGreeting();

        expect(greeting).toEqual(new Greeting("hello"))
    });
});