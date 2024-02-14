const getProportionsMap = require("./getProportionsMap");

describe('getProportionsMap: test function', () => {
    test('default', () => {
        expect(getProportionsMap([5, 5, 10])).toStrictEqual(['25.000', '25.000', '50.000']);
        expect(getProportionsMap([1.5, 3, 6, 1.5])).toStrictEqual(['12.500', '25.000', '50.000', '12.500']);
        expect(getProportionsMap(['1.5', '3', '6', '1.5'])).toStrictEqual(['12.500', '25.000', '50.000', '12.500']);
    });

    test('fails', () => {
        expect(getProportionsMap(true)).toStrictEqual([]);
        expect(getProportionsMap(false)).toStrictEqual([]);
        expect(getProportionsMap(null)).toStrictEqual([]);
        expect(getProportionsMap('')).toStrictEqual([]);
        expect(getProportionsMap('asdasdasd')).toStrictEqual([]);
        expect(getProportionsMap('1500')).toStrictEqual([]);
        expect(getProportionsMap(1500)).toStrictEqual([]);
        expect(getProportionsMap([])).toStrictEqual([]);
        expect(getProportionsMap({})).toStrictEqual([]);
    });

    test('long', () => {
        const length = 2 ** 18;
        expect(getProportionsMap(new Array(length).fill(0))).toStrictEqual(new Array(length).fill('0.000'));
    });
})
