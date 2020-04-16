const {SimpleFunc, Lodash, map} = require("./index");

describe("SimpleFunc: sum", () => {
    test("should return sum of two values", () => {
        expect(SimpleFunc.sum(1, 3)).toBe(4);
        expect(SimpleFunc.sum(1, 3)).toEqual(4);
    });

    test("should return value correctly comparing to other", () => {
        expect(SimpleFunc.sum(2, 3)).toBeGreaterThan(4);
        expect(SimpleFunc.sum(2, 3)).toBeGreaterThanOrEqual(5);
        expect(SimpleFunc.sum(2, 3)).toBeLessThan(9);
        expect(SimpleFunc.sum(2, 3)).toBeLessThanOrEqual(5);
    })

    test("should sum two floats value correctly", () => {
        expect(SimpleFunc.sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
});

describe("SimpleFunc: nativeNull", () => {
    test("should return false value null", () => {
        expect(SimpleFunc.nativeNull()).toBe(null);
        expect(SimpleFunc.nativeNull()).toBeNull();
        expect(SimpleFunc.nativeNull()).toBeFalsy();
        expect(SimpleFunc.nativeNull()).toBeDefined();
        expect(SimpleFunc.nativeNull()).not.toBeTruthy();
        expect(SimpleFunc.nativeNull()).not.toBeUndefined();
    });
});

describe("Lodash: compact", () => {
    let _ = new Lodash();
    let array;
    let result;

    beforeEach(() => {
        array = [false, 42, 0, "", true, null, "hello"];
        result = [42, true, "hello"];
    });

    afterAll(() => {
        _ = new Lodash();
    });

    test("should be defined", () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    })

    test("should remove falsy values from array", () => {

        // expect(_.compact(array)).toBe(result); Это метчер для примитивов, для сложных - toEqual
        expect(_.compact(array)).toEqual(result);
    });

    test("should NOT contain falsy values", () => {

        expect(_.compact(array)).not.toContain(false);
        expect(_.compact(array)).not.toContain(0);
        expect(_.compact(array)).not.toContain("");
        expect(_.compact(array)).not.toContain(null);
    });
});

describe("Lodash: groupBy", () => {
    let _ = new Lodash();

    beforeEach(() => {
    });

    afterAll(() => {
        _ = new Lodash();
    });

    test("should be defined", () => {
        expect(_.groupBy).toBeDefined();
        expect(_.groupBy).not.toBeUndefined();
    });

    test("should group array items by Math.floor", () => {
        const array = [2.2, 2.4, 4.2, 3.1];
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        };

        expect(_.groupBy(array, Math.floor)).toEqual(result);
    });

    test("should group array items by length", () => {
        const array = ["one", "two", "three"];
        const result = {
            3: ["one", "two"],
            5: ["three"]
        };

        expect(_.groupBy(array, "length")).toEqual(result);
    });

    test("should NOT return array", () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
    });
});

describe("Map function", () => {
    let array;
    let fn;

    beforeEach(() => {
        array = [1, 2, 3, 5];
        fn = jest.fn(x => x ** 2);
        map(array, fn);
    });

    test("should call callback", () => {
        expect(fn).toBeCalled();
    });

    test("should call callback 4 times", () => {
        expect(fn).toBeCalledTimes(4);
        expect(fn.mock.calls.length).toBe(4);
    });

    test("should pow 2 each element", () => {
        expect(fn.mock.results[0].value).toBe(1);
        expect(fn.mock.results[1].value).toBe(4);
        expect(fn.mock.results[2].value).toBe(9);
        expect(fn.mock.results[3].value).toBe(25);
    });

    test("should fn work", () => {
        fn
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValue("x");
        expect(fn()).toBe(100);
        expect(fn()).toBe(200);
        expect(fn()).toBe("x");
        expect(fn()).toBe("x");
    });
});