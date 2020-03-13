const { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, createMatrix, areWeCovered } = require('../challenges/week9');

describe("sumMultiples", () => {
    test("throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("array is required")
    });
    test("returns the sum of all numbers that are multiples of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("should work for decimals", () => {
        const result = sumMultiples([1, 3.0, 5.0, 0.1]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("should return 0 if there are no numbers divisible by 3 or 5", () => {
        const result = sumMultiples([1, 8, 14, 7, 22, 0.2, 'melon']);
        const expected = 0;
        expect(result).toBe(expected);
    });
});

describe("isValidDNA", () => {
    test("throws an error if not passed a string", () => {
        expect(() => {
            isValidDNA()
        }).toThrow("string is required")
        expect(() => {
            isValidDNA([])
        }).toThrow("string is required")
        expect(() => {
            isValidDNA(8)
        }).toThrow("string is required")
    });
    test("should return true if str has a length of 4 and contains characters C,G,T or A only else false", () => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CCCC")).toBe(true);
        expect(isValidDNA("ATCG")).toBe(true);
        expect(isValidDNA("ATGZC")).toBe(false);
        expect(isValidDNA("A!GZ")).toBe(false);
    });
    test("should be case sensitive", () => {
        expect(isValidDNA("cgta")).toBe(false);
    });
    test("if there are less than or more than 4 characters test should fail", () => {
        expect(isValidDNA("CGT")).toBe(false);
        expect(isValidDNA("CGTAA")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("throws error if not passed a string", () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("string is required");
        expect(() => {
            getComplementaryDNA(["This is an array and should be a string!", 2, 3]);
        }).toThrow("string is required")
    });
    test("throws error if not a valid DNA string", () => {
        expect(() => {
            getComplementaryDNA("ZYEF");
        }).toThrow("valid DNA string is required");
    });
    test("returns complementary DNA string (see function comment for details)", () => {
        expect(getComplementaryDNA("AAAA")).toBe("TTTT");
        expect(getComplementaryDNA("TTTT")).toBe("AAAA");
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });
});

describe("isItPrime", () => {
    test("throws an error if not passed a number", () => {
        expect(() => {
            isItPrime().toThrow("number is required");
        });
        expect(() => {
            isItPrime("I am a string").toThrow("number is required");
        });
        expect(() => {
            isItPrime([1, 2, 'jelly']).toThrow("number is required");
        });
    });
    test("receives a number & returns true/false depending on whether it is a prime number or not", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(2)).toBe(true);
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(23)).toBe(true);
        expect(isItPrime(59)).toBe(true);
        expect(isItPrime(83)).toBe(true);

        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(10)).toBe(false);
        expect(isItPrime(25)).toBe(false);
        expect(isItPrime(42)).toBe(false);
        expect(isItPrime(100)).toBe(false);
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(-7)).toBe(false);
    });
});

describe("createMatrix", () => {
   it("returns a matrix of 1 * 1 when when passed one", () => {
       const result = createMatrix(1, "foo");
       const expected = [["foo"]];
       expect(result).toEqual(expected);
   });
   it("returns a matrix of 3 * 3 when when passed one", () => {
    expect(createMatrix(3, "foo")).toEqual([
        ["foo", "foo", "foo"],
        ["foo", "foo", "foo"],
        ["foo", "foo", "foo"]
     ]);
});
   test("throws error if not passed arguments", () => {
    expect(() => {
        createMatrix();
    }).toThrow("n is required");
    });
    test("throws error if n is not a number", () => {
        expect(() => {
            createMatrix("one", "two");
        }).toThrow("first argument must be a number");
    });
});

const staff =  [
    { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Steve", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Alex", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
   ]

describe.only("areWeCovered", () => {
    test("throws an error if not passed an array", () => {
        expect(() => {
            areWeCovered();
        }).toThrow("staff is required")
    });
    it("returns true/false if enough (3 or more) people can work on the given day", () => {
        const result = areWeCovered(staff, "Monday");
        const expected = false;
        expect(result).toBe(expected);
    });
    it("returns true/false if enough (3 or more) people can work on the given day", () => {
        const result = areWeCovered(staff, "Tuesday");
        const expected = true;
        expect(result).toBe(expected);
    });
});

