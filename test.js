test('3.5 EUR es 3.745 USR', () => {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = (3.5 / 1) * 1.07;
    expect(dollars).toBeCloseTo(expected);
});

test('5 JPY es 0.02 GBP', () => {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(5);
    const expected = (5 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected);
});

test('2 USD es 292.52 JPY', () => {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(2);
    const expected = (2 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected);
});