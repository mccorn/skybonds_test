const ISIN = [
    {
        id: 'RU000A107RZ0',
        name: 'Облигация ГК Самолет БО-П13',
        currency: 'RUB',
        description: 'description RU000A107RZ0',
    },
    {
        id: 'RU000A106938',
        name: 'Облигация НОВАТЭК 001P-01',
        currency: 'RUB',
        description: 'description RU000A106938',
    },
    {
        id: 'RU000A102GU5',
        name: 'Облигация НоваБев Групп 002P БО-П04 с амортизацией долга',
        currency: 'RUB',
        description: 'description RU000A102GU5',
    },
    {
        id: 'RU000A0ZZES2',
        name: 'Облигация Газпром ПАО БО-22',
        currency: 'USD',
        description: 'description RU000A0ZZES2',
    },
    {
        id: 'RU000A1069P3',
        name: 'Облигация Сбербанк ПАО 002Р-SBER44',
        currency: 'USD',
        description: 'description RU000A1069P3',
    },
]

const getChartNode = (value = 100, year = 2020, mounth = 5, day = 1) => ({
    Date: new Date(year, mounth, day).getTime(),
    Open: Math.random() * 1000,
    High: Math.random() * 1000,
    Low: Math.random() * 1000,
    Close: Math.random() * 1000,
    Volume: Math.random() * 100000,
    "Adj Close": Math.random() * 1000,
})


const getISINData = (idx) => ({
    ...ISIN[idx],
    ...getChartNode(),
})

export const list_1 = [
    { "Date": "2021-03-31", "Open": "232.910004", "High": "239.100006", "Low": "232.389999", "Close": "235.770004", "Adj Close": "233.865067", "Volume": "43623500" },
    { "Date": "2021-04-01", "Open": "238.470001", "High": "242.839996", "Low": "238.050003", "Close": "242.350006", "Adj Close": "240.391922", "Volume": "30338000" },
    { "Date": "2021-04-05", "Open": "242.759995", "High": "249.960007", "Low": "242.699997", "Close": "249.070007", "Adj Close": "247.057617", "Volume": "36910600" },
    { "Date": "2021-04-06", "Open": "247.610001", "High": "249.399994", "Low": "246.880005", "Close": "247.860001", "Adj Close": "245.857391", "Volume": "22931900" },
    { "Date": "2021-04-07", "Open": "247.809998", "High": "250.929993", "Low": "247.190002", "Close": "249.899994", "Adj Close": "247.880890", "Volume": "22719800" },
    { "Date": "2021-04-08", "Open": "252.770004", "High": "254.139999", "Low": "252.000000", "Close": "253.250000", "Adj Close": "251.203842", "Volume": "23625200" },
    { "Date": "2021-04-09", "Open": "252.869995", "High": "255.990005", "Low": "252.440002", "Close": "255.850006", "Adj Close": "253.782837", "Volume": "24326800" },
    { "Date": "2021-04-12", "Open": "254.710007", "High": "257.670013", "Low": "254.619995", "Close": "255.910004", "Adj Close": "253.842331", "Volume": "27148700" },
    { "Date": "2021-04-13", "Open": "257.260010", "High": "259.190002", "Low": "256.829987", "Close": "258.489990", "Adj Close": "256.401459", "Volume": "23837500" },
    { "Date": "2021-04-14", "Open": "257.480011", "High": "258.829987", "Low": "255.160004", "Close": "255.589996", "Adj Close": "253.524918", "Volume": "23070900" },
    { "Date": "2021-04-15", "Open": "257.929993", "High": "259.929993", "Low": "257.730011", "Close": "259.500000", "Adj Close": "257.403351", "Volume": "25627500" },
    { "Date": "2021-04-16", "Open": "259.470001", "High": "261.000000", "Low": "257.600006", "Close": "260.739990", "Adj Close": "258.633301", "Volume": "24878600" },
    { "Date": "2021-04-19", "Open": "260.190002", "High": "261.480011", "Low": "257.820007", "Close": "258.739990", "Adj Close": "256.649475", "Volume": "23209300" },
    { "Date": "2021-04-20", "Open": "257.820007", "High": "260.200012", "Low": "256.839996", "Close": "258.260010", "Adj Close": "256.173370", "Volume": "19722900" },
    { "Date": "2021-04-21", "Open": "258.940002", "High": "260.679993", "Low": "257.250000", "Close": "260.579987", "Adj Close": "258.474609", "Volume": "24030400" },
    { "Date": "2021-04-22", "Open": "260.209991", "High": "261.779999", "Low": "255.639999", "Close": "257.170013", "Adj Close": "255.092148", "Volume": "25606200" },
    { "Date": "2021-04-23", "Open": "257.880005", "High": "261.510010", "Low": "257.269989", "Close": "261.149994", "Adj Close": "259.040009", "Volume": "21462600" },
    { "Date": "2021-04-26", "Open": "261.660004", "High": "262.440002", "Low": "260.170013", "Close": "261.549988", "Adj Close": "259.436768", "Volume": "19763300" },
    { "Date": "2021-04-27", "Open": "261.579987", "High": "263.190002", "Low": "260.119995", "Close": "261.970001", "Adj Close": "259.853394", "Volume": "31014200" },
    { "Date": "2021-04-28", "Open": "256.079987", "High": "256.540009", "Low": "252.949997", "Close": "254.559998", "Adj Close": "252.503250", "Volume": "46903100" }
]

export const list_2 = [
    { "Date": "2021-04-29", "Open": "255.460007", "High": "256.100006", "Low": "249.000000", "Close": "252.509995", "Adj Close": "250.469818", "Volume": "40589000" },
    { "Date": "2021-04-30", "Open": "249.740005", "High": "253.080002", "Low": "249.600006", "Close": "252.179993", "Adj Close": "250.142487", "Volume": "30945100" },
    { "Date": "2021-05-03", "Open": "253.399994", "High": "254.350006", "Low": "251.119995", "Close": "251.860001", "Adj Close": "249.825058", "Volume": "19626600" },
    { "Date": "2021-05-04", "Open": "250.970001", "High": "251.210007", "Low": "245.759995", "Close": "247.789993", "Adj Close": "245.787933", "Volume": "32756100" },
    { "Date": "2021-05-05", "Open": "249.059998", "High": "249.500000", "Low": "245.820007", "Close": "246.470001", "Adj Close": "244.478622", "Volume": "21901300" },
    { "Date": "2021-05-06", "Open": "246.449997", "High": "249.860001", "Low": "244.690002", "Close": "249.729996", "Adj Close": "247.712280", "Volume": "26491100" },
    { "Date": "2021-05-07", "Open": "252.149994", "High": "254.300003", "Low": "251.169998", "Close": "252.460007", "Adj Close": "250.420242", "Volume": "27032900" },
    { "Date": "2021-05-10", "Open": "250.869995", "High": "251.729996", "Low": "247.119995", "Close": "247.179993", "Adj Close": "245.182877", "Volume": "29299900" },
    { "Date": "2021-05-11", "Open": "244.550003", "High": "246.600006", "Low": "242.570007", "Close": "246.229996", "Adj Close": "244.240540", "Volume": "33641600" },
    { "Date": "2021-05-12", "Open": "242.169998", "High": "244.380005", "Low": "238.070007", "Close": "239.000000", "Adj Close": "237.068985", "Volume": "36684400" },
    { "Date": "2021-05-13", "Open": "241.800003", "High": "245.600006", "Low": "241.419998", "Close": "243.029999", "Adj Close": "241.066422", "Volume": "29624300" },
    { "Date": "2021-05-14", "Open": "245.580002", "High": "249.179993", "Low": "245.490005", "Close": "248.149994", "Adj Close": "246.145035", "Volume": "23901100" },
    { "Date": "2021-05-17", "Open": "246.550003", "High": "246.589996", "Low": "243.520004", "Close": "245.179993", "Adj Close": "243.199020", "Volume": "24970200" },
    { "Date": "2021-05-18", "Open": "246.270004", "High": "246.410004", "Low": "242.899994", "Close": "243.080002", "Adj Close": "241.116013", "Volume": "20168000" },
    { "Date": "2021-05-19", "Open": "239.309998", "High": "243.229996", "Low": "238.600006", "Close": "243.119995", "Adj Close": "241.712540", "Volume": "25739800" },
    { "Date": "2021-05-20", "Open": "243.960007", "High": "247.949997", "Low": "243.860001", "Close": "246.479996", "Adj Close": "245.053070", "Volume": "21800700" },
    { "Date": "2021-05-21", "Open": "247.570007", "High": "248.330002", "Low": "244.740005", "Close": "245.169998", "Adj Close": "243.750687", "Volume": "21863100" },
    { "Date": "2021-05-24", "Open": "247.789993", "High": "251.160004", "Low": "247.509995", "Close": "250.779999", "Adj Close": "249.328186", "Volume": "21411500" },
    { "Date": "2021-05-25", "Open": "251.770004", "High": "252.750000", "Low": "250.820007", "Close": "251.720001", "Adj Close": "250.262756", "Volume": "17704300" },
    { "Date": "2021-05-26", "Open": "251.429993", "High": "252.940002", "Low": "250.750000", "Close": "251.490005", "Adj Close": "250.034088", "Volume": "17771600" }
]

export default [0, 1, 2, 3, 4].map(getISINData)