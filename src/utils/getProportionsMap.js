// 5с при 100 000 операциях в секунду = 500 000 операций всего => ограничение на длину массива в 250 000 
// На реальных тестах показатель при длине 2 ** 20 = 6 сек
// Оценка времени: O(n)
// Оценка памяти: O(n)

function getProportionsMap(array = []) {
    if (!Array.isArray(array)) return [];
    const sum = array.reduce((acc, element) => acc += Number.isNaN(Number(element)) ? 0 : Number(element), 0);
    return array.map(element => (sum ? (Number.isNaN(Number(element)) ? 0 : Number(element)) / sum * 100 : 0).toFixed(3));
}

module.exports = getProportionsMap;