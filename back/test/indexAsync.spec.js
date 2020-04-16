const axios = require("axios");
const {Ajax} = require("./index");

jest.mock("axios");

describe("Ajax: echo", () => {
    let data;

    beforeEach(() => {
        data = "some data"
    });

    test("should return value async", async () => {
        const result = await Ajax.echo(data);

        expect(result).toBe(data);
    });

    test("should catch error async", async () => {
        try {
            await Ajax.echo();
        } catch (e) {
            expect(e.message).toBe("data in not defined");
        }
    });

    test("should return value with promise", () => {
        return Ajax.echo(data).then(data => {
            expect(data).toBe(data)
        })
    });

    test("should catch error with promise", () => {
        return Ajax.echo().catch(error => {
            expect(error).toBeInstanceOf(Error);
        })
    });
});

describe("Ajax: get", () => {
    let response;
    let todos;

    beforeEach(() => {
        todos = [
            {id: 1, title: "Todo 1", completed: false}
        ];
        response = {
            data: {
                todos
            }
        }
    });

    test("should return data from backend", () => {
        axios.get.mockReturnValue(response);

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos);
        })
    });
});