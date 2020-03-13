const { sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner } = require('../challenges/week10');

describe("sumDigits", () => {
    test("returns error if argument not provided", () => {
        expect(() => {
            sumDigits()
        }).toThrow("n is required")
    });
    it("returns the sum of a numbers digits", () => {
        expect(sumDigits(123)).toBe(6)
    });
    it("returns the sum of a numbers digits", () => {
        expect(sumDigits(106)).toBe(7)
    });
});

describe("createRange", () => {
    test("returns error if argument not provided", () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");
    });
    test("returns error if arguments are not numbers", () => {
        expect(() => {
            createRange(9, 18, "potatoes");
        }).toThrow("start, end and step must be numbers");
    });
    test("returns error if arguments are not numbers", () => {
        expect(() => {
            createRange(9, 18, 0);
        }).toThrow("step must be greater than 1 and less than end");
    });
    test("if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    });
    test("if start = 1, end = 6 and step = 1 the resulting range would be: [1, 2, 3, 4, 5, 6]", () => {
        expect(createRange(1, 6, 1)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});

const users = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ]
    },
    {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
    },
];

const users2 = [
    {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
            { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
            { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
            { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
            { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
        ]
    },
    {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
            { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
    },
    {
        username: "e_j_1993",
        name: "Elly Judd",
        screenTime: [
            { date: "2019-05-04", usage: { mapMyRun: 0, whatsApp: 90, facebook: 50, safari: 10 } },
            { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
            { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
        ]
    },
    
];

describe("getScreentimeAlertList", () => {
    test("returns error if argument not provided", () => {
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required");
    });
    it("returns a users username if their screen time is >= 100 minutes on the provided day", () => {
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    });
    it("returns a users username if their screen time is >= 100 minutes on the provided day", () => {
        expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
    });
    it("returns an empty array if no users screen time is >= 100 minutes on the provided day", () => {
        expect(getScreentimeAlertList(users, "2019-06-11")).toEqual([]);
    });
    it("returns all users with screen time >= 100 minutes on the provided day", () => {
        expect(getScreentimeAlertList(users2, "2019-05-04")).toEqual(["beth_1234", "e_j_1993"]);
    });
});

describe.only("hexToRGB", () => {
    
});