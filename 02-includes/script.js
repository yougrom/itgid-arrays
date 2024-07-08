// indexOf применялся для поиска значений внутри массивов
const arr = [44, 55, 66, 77, 88, 99, '100', 101, 102, 103, 104, 100, 105, 106, 107, 108];
// indexOf возвращает индекс элемента в массиве
// indexOf возвращает -1, если элемента нет в массиве
// indexOf возвращает индекс первого найденного элемента
// indexOf определяет по типу данных ===
if (arr.indexOf(100) !== -1) { // если значение 100 есть в массиве, то indexOf вернет его индекс, если нет, то -1
    console.log('100 is in the array');
} else {
    console.log('100 is not in the array');
}; 

// includes применяется для поиска значений внутри массивов
// includes возвращает true, если значение есть в массиве, и false, если нет
// includes не возвращает индекс, а только true или false
// includes не возвращает Элемент, а только true или false
// includes определяет по типу данных ===

if (arr.includes(100, 7)) { // если значение 100 есть в массиве, то includes вернет true, если нет, то false
    console.log('100 is in the array');
} else {
  console.log('100 is not in the array');
};

// Можно проводить поиск символов в строках
const str = 'Hello world';
if (str.includes('world')) {
    console.log('world is in the string');
}

// Можно проводить поиск объектов в массивах
const users = [
  {'name' : 'Ivan', 'age' : 30},
  {'name' : 'Petr', 'age' : 25},
  {'name' : 'Sidor', 'age' : 35},
  {'name' : 'Vasya', 'age' : 20}
];

let newUser = users.filter(item => item.name.includes('idor'));
console.log(newUser);