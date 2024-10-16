let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
    "EUR": 1
}

const fromDollarToYen = (amount) => {
    let resultUSD = (amount / oneEuroIs.USD) * oneEuroIs.JPY;
    return resultUSD;
}

const fromEuroToDollar  = (amount) => {
    let resultEUR = (amount / oneEuroIs.EUR) * oneEuroIs.USD;
    return resultEUR;
}

const fromYenToPound = (amount) => {
    let resultJPY = (amount / oneEuroIs.JPY) * oneEuroIs.GBP;
    return resultJPY;
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};