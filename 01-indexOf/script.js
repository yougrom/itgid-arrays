// indexOf - Метод Который Позволяет искать значение в массиве и возвращает его индекс (позицию) в массиве И 
// Будет возвращена его первая позиция в массиве. Если значение не найдено, то возвращается -1.
// Если значение не найдено, то возвращается -1.

const arr = ['orange', 'apple', 'banana', 5, 10, 25, 30, 40, 45];
console.log(arr.indexOf('banana')); // 2
console.log(arr.indexOf(110)); // -1
console.log(arr.indexOf(40)); // 7

// Проверка на наличие элемента в массиве **************************************************************
if (arr.indexOf('banana') !== -1) {
    console.log('banana is in the array');
} else {
    console.log('banana is not in the array');
} // banana is in the array

// Проверка на наличие элемента в массиве (40) - не найден элемент - Строгая проверка на тип данных
if (arr.indexOf('40') !== -1) {
  console.log('40 is in the array');
} else {
  console.log('40 is not in the array');
} // 40 is not in the array

// Example 2
const arr2 = ['orange', 'apple', 'banana', 5, 10, 25, 30, 40, 45];
console.log(arr2.indexOf('orange')); // 0
console.log(arr2.indexOf('Orange')); // -1 — нужно учитывать регистр

// 1. indexOf требует привидение типа данных
// 2. При поиске строк учитываем регистр

// 3. Будет возвращена его первая позиция в массиве.
let arr3 = ['orange', 'apple', 'banana', 5, 10, 25, 'banana', 40, 5];
console.table(arr3);
console.log(arr3.indexOf('banana'));

// indexOf может искать значение не только с нулевой позиции — indexOf('banana', 3);
let arr4 = ['orange', 'apple', 'banana', 5, 10, 25, 'banana', 40, 5];
console.table(arr4);
console.log(arr4.indexOf('banana', 3)); // 6

// Логика работы indexOf - сначала ищет значение, если находит - возвращает его индекс, если нет - возвращает -1
// 1. Нужно перебрать массив и найти значение
// 2. Если значение найдено - вернуть его индекс
// 3. Если значение не найдено - вернуть -1

// Example 3
let arr5 = ['orange', 'apple', 'banana', 5, 10, 25, 'banana', 40, 5];

function indexOfEmul(arr, value, from = 0) {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(indexOfEmul(arr5, 5, 4)); // 8
