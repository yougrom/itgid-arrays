// TASK 01
// По нажатию b-1 выполняется функция f1. Функция считывает значение из i-1 и с помощью indexOf и ищет данный элемент в массиве a1. 
// Выводит в out-1 результат работы.
// Как тестируется - ввожу числа и проверяю результат.

let a1 = [4, 12, 4, 2, 15, 98];

const f1 = () => {
    let input = parseInt(document.querySelector('.i-1').value);
    let out = document.querySelector('.out-1');
    let index = a1.indexOf(input);
    if (index !== -1) {
        out.textContent = `Value: ${input}`;
    } else {
        out.textContent = 'Value not found';
    }
}
document.querySelector('.b-1').onclick = f1; 

// TASK 02
// По нажатию b-2 выполняется функция f2. Функция считывает значение из i-2 и с помощью indexOf и ищет данный элемент в массиве a2. 
// Выводит в out-2 false, если такого элемента нет в массиве, и ИНДЕКС элемента если есть.
// Как тестируется - ввожу чисlo

let a2 = [4, 12, 4, 2, 15, 98];

const f2 = () => {
    let input = parseInt(document.querySelector('.i-2').value);
    let out = document.querySelector('.out-2');
    let index = a2.indexOf(input);
    if (index !== -1) {
        out.textContent = `Index: ${index}`;
    } else {
        out.textContent = false;
    }
}
document.querySelector('.b-2').onclick = f2; 


// TASK 03
// По нажатию b-3 выполняется функция f3. Функция считывает значение из i-3 и с помощью indexOf и ищет данный элемент в массиве a3.
// Выводит в out-3  false, если такого элемента нет в массиве, и true если есть.
// Как тестируется - ввожу числа и проверяю результат.


let a3 = [4, 12, 4, 2, 15, 98];

const f3 = () => {
    let input = Number(document.querySelector('.i-3').value);
    let out = document.querySelector('.out-3');
     if (a3.indexOf(input) !== -1) {
        out.textContent = 'true';
     } else {
        out.textContent = 'false';
     }
}
document.querySelector('.b-3').onclick = f3;

// TASK 04
// По нажатию b-4 выполняется функция f4. Функция принимает 2 параметра, первый - массив, второй элемент. 
// Функция должна с помощью indexOf найти и вывести в out-4 индекс искомого элемента в массиве a4 или -1 если элемента в массиве нет. 
// Протестируйте задачу на строке '2' и числе 2. Сделайте выводы.

let a4 = [1, '1', 2, '2', '3'];

const f4 = (arr, elem) => {
    let out = document.querySelector('.out-4');
    let index = arr.indexOf(elem);

    if (index !== -1) {
        index = arr.indexOf(Number(elem));
    } else if (index !== -1) {
        out.textContent = index;
    } else {
         out.textContent = -1;
    }
}

document.querySelector('.b-4').onclick = () => {
    let input = document.querySelector('.i-4').value;
    f4(a4, input);
};

// TASK 05
// По нажатию b-5 выполняется функция f5. Функция считывает значение из i-5-1 и индекс с которого начинается поиск в массиве с i-5-2 и 
// с помощью indexOf и ищет данный элемент в массиве a5 c позиции указанной в i-5-2. Выводит в out-5 индекс если он есть в массиве, или -1 если нет.
// Введите пары и изучите поведение
// число 33 и индекс старта 2
// число 33 и индекс старта 0
// число 44 и индекс старта 50
// число 44 и индекс старта -3


let a5 = [22, 33, 44, 55, 66, 77, 88, 33, 44, 55, 66, 77];

const f5 = () => {
    let out = document.querySelector('.out-5');
    let value = Number(document.querySelector('.i-5-1').value);
    let index = Number(document.querySelector('.i-5-2').value);
    let element = a5.indexOf(value, index);
    if (element !== -1) {
        out.textContent = element;
    } else {
        out.textContent = -1;
    }
}
document.querySelector('.b-5').onclick = f5;

// TASK 06
// По нажатию b-6 выполняется функция f6. Функция считывает значение из i-6 и с помощью indexOf и ищет данный элемент в СТРОКЕ a6. Выводит в out-6 результат поиска.
// Изучите поведение введя по очереди 3, '3', 'a', 5, ytt


let a6 = '987123abcdefyttb4';

const f6 = () => {
let input = document.querySelector('.i-6').value;
let out = document.querySelector('.out-6');
if (a6.indexOf(input) !== -1) {
    out.textContent = input;
} else {
    out.textContent = 'nothing';
}
}
document.querySelector('.b-6').onclick = f6;

// TASK 07
// По нажатию b-7 выполняется функция f7. Функция принимает 2 параметра, первый массив, второй - искомое число. Функция должна эмулировать работу метода indexOf с помощью цикла. Что понимается под эмуляцией? Мы не используем метод indexOf, а циклом перебираем массив и с помощью if решаем задачу. Функция должна только либо выводить в out-7 число -1, если искомого числа нет в массиве, или индекс числа в массиве.


let a7 = [21, 22, 23, 24, 25, 26, 27];

const f7 = (arr, elem) => {
let out = document.querySelector('.out-7');
let found = false;
    for (let i = 0; i < arr.length; i++) {
        if (elem === arr[i]) {
            out.textContent = i;
            found = true;
            break;
        }
    }
    if (!found) {
        out.textContent = -1;
    }
}

document.querySelector('.b-7').onclick = () => {
    let input = document.querySelector('.i-7').value;
    f7(a7, input)
};

// TASK 08 * - сложная
// По нажатию b-8 выполняется функция f8. +
// Функция должна получить число из i-8 +
// и с помощью цикла и indexOf найти все индексы данного числа в массиве a8. 
// Индексы должны быть добавлены в res08. Результат (res08) выведите в out-8. Если число не встречается в массиве, то res08 должен быть пустым.

let a8 = [1, 2, 3, 1, 3, 2, 55, 23, 53, 24, 55,3, 1, 5, 2, 3, 5, 4,6,7,12, 53];
let res08 = [];

const f8 = () => {
    let input = Number(document.querySelector('.i-8').value);
    res08 = [];
    for (let i = 0; i < a8.length; i++) {
        if (a8[i] === input) {
            res08.push(i);
        }
    }
    document.querySelector('.out-8').innerHTML = res08;
}
document.querySelector('.b-8').addEventListener('click', f8);

// TASK 09
// По нажатию b-9 выполняется функция f9. +
// Функция должна получить число из i-9 +
// и с помощью цикла и indexOf вывести в out-9 
// все индексы вложенных в a9 массивов содержащие указанное число. Вывод через пробел. Если совпадений нет - выводите пустую строку.

// пример если a9 = [ [1,2] , [2, 3], [3,4,5], [6, 7, 5] ]
// и ввели число 5 то в out-9 должен быть вывод 2 3 поскольку [3,4,5] находится в a9 под индексом 2,
// a [6, 7, 5] под индексом 3

// пример 2. Если a9 = [ [1,2] , [2, 3], [3,4,5], [6, 7, 5] ]
// и ввели 3 то в out-9 будет 1 2

let a9 = [
    [55, 22, 33],
    [3, 4, 22, 7],
    [66, 2, 12, 55],
    [142, 12, 7, 15],
    [45, 12, 67, 32]
];

const f9 = () => {
    let input = Number(document.querySelector('.i-9').value);
    let out = document.querySelector('.out-9');
    
    let result = [];
    out.textContent = '';

    for (let i = 0; i < a9.length; i++) {
        let inputValue = a9[i].indexOf(input);
        if (inputValue !== -1){
            result.push(i);
        } 
    }
    out.textContent = result.join(' ');
}
document.querySelector('.b-9').addEventListener('click', f9);


// TASK 10
// По нажатию b-10 выполняется функция f10. +
// Как вы заметили, indexOf ищет по строгому сравнению ( 4 task ).
// Давайте напишем функцию f10 которая принимает два параметра - массив и искомую строку или число. 
// Функция должна ВОЗВРАТИТЬ -1 если никаких совпадений нет, либо индекс при нестрогом совпадении. 
// Пример
// массив a10 = [1, 2, '3'] введи 3 получили индекс 2
// массив a10 = [1, 2, '3'] введи '3' получили индекс 2
// массив a10 = [1, 2, '3'] введи '2' получили индекс 1
// массив a10 = [1, 2, '3'] введи '9' получили -1
// массив a10 = [1, 2, '2', '3'] введи '2' получили 1
// массив a10 = [1, 2, '2', '3'] введи 2 получили 1

let a10 = [67, '55', 2, 5, '4', '8', 8, '66', '54', 11];

const f10 = (arr, elem) => {
let out = document.querySelector('.out-10');
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
        out.textContent = i;
        found = true;
        break;
    } 
}
if (!found) {
    out.textContent = -1;
}
}
f10(a10, '55');
document.querySelector('.b-10').addEventListener('click', f10)

document.querySelector('.b-1').addEventListener('click', f1);
document.querySelector('.b-2').addEventListener('click', f2);
document.querySelector('.b-3').addEventListener('click', f3);
document.querySelector('.b-4').addEventListener('click', ()=>{
    f4(a4, '2'); // изучите какой индекс вывело. Разберитесь почему
   // f4(a4, 2); // изучите какой индекс вывело. Разберитесь почему
});
document.querySelector('.b-5').addEventListener('click', f5);
document.querySelector('.b-6').addEventListener('click', f6);
document.querySelector('.b-7').addEventListener('click', ()=>{
    let num = +document.querySelector('.i-7').value;
    f7(a7, num);
});
document.querySelector('.b-8').addEventListener('click', f8);
document.querySelector('.b-9').addEventListener('click', f9);
document.querySelector('.b-10').addEventListener('click', ()=>{
    document.querySelector('.out-10').innerHTML = f10(a10, 8);
});
