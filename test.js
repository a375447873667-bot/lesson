// //let age = 10;

// if (age > 13 && age < 18) {
//     console.log('Подросток');
// } else if (age < 13) {
//     console.log('Ребенок');
// }

// let numbers = [2, 4, 6];
// let result = ""

// for (let n of numbers) {
//     let res = `Результат: ${n * 2}\n`;
//     result += res;
// }
// console.log(result)

// let user = {
//     name: 'Valery',
//     age: 25
// };
// // Добавить новое свойство
// user.job = "developer";

// console.log(user.name);

// // Массив объектов

// let users = [
//     {name: Valery, age: 25, job: Developer},
//     {name: Jein, age: 30, job: Developer},
//     {name: Sofia, age: 8, job: Developer}
// ]
// // Достать из массива значение

// console.log(users[0]); 

// // Если хотим что-то определенное

// console.log(users[0].name);

// // Как перебрать объекты в массиве

// // let user = [
// //     {name: Valery, age: 25, job: Developer},
// //     {name: Jein, age: 30, job: Developer},
// //     {name: Sofia, age: 8, job: Developer}
// // ]

// // for (let obj of user) {
// //     console.log(obj.name);
// // }

// // Тест для себя с выводом красивой информации из массивного объекта

// let user = [
//     {name: 'Valery', age: 25, job: 'Developer'},
//     {name: 'Jein', age: 30, job: 'Developer'},
//     {name: 'Sofia', age: 8, job: 'Developer'}
// ]


// let resulte = "";

// for (let obj of user) {
//     resulte += `Привет! меня зовут ${obj.name}. Мне ${obj.age} лет и моя должность ${obj.job}\n`
// }
// console.log(resulte)

//Поиск максимального значения
// let numbers = [3, 7, 2, 9, 5];
// let max = 0
// for ( let n of numbers) {
//     if (n > max) {
//         max = n;
//     }
// }
// console.log(max)

//Функция четного числа
// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(3))

//Сумма массива
// let numbers = [5, 15, 20]

// let result = numbers.reduce((acc, n) => acc + n, 0)
// console.log(result)

//Фильтр четных чисел
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let result = number.filter(n => n % 2 === 0)
// console.log(result)

// Умножение массива
// let number = [2, 4, 6, 8]

// let result = number.map(n => n * 3)
// console.log(result)

//Поиск пользователя
// let users = [
//     {user:'Valera', age:20},
//     {user:'Chery', age:32},
//     {user:'Sofi', age:21}
// ];

// let result = users.find( n => n.user === 'Valera')
// console.log(result)

//подсчет суммы четных чисел
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = numbers
//     .filter(n => n % 2 === 0)
//     .reduce((acc, n) => n + acc, 0)

// console.log(result)

// Строка из массива
// let fruits = ["Apple", "banana", "orange"];
// console.log(fruits.join(", "))

// Подсчет количества эллементов
// let fruits = ["Apple", "banana", "orange", "kiwi"];

// console.log(fruits.length);

//Приветствие
// function greet(name) {
// console.log(`Привет ${name}`)
// }
// greet('Валерий')

// Челлендж
// let numbers = [1, 2, 3, 4, 5];

// let result = numbers
//     .filter(n => n % 2 === 0)
//     .map(n => n * 2)
// console.log(result)

// let text = 'Hello'
// let rev = reverse(text)
// console.log(rev)

// function debounce(n, delay) {
    
// }

// const log = () => console.log("hello");

// const debouncedlog = debounce(log, 1000);

// debouncedlog();
// debouncedlog();
// debouncedlog();

// let numbers = [1, 2, 3, 4];
// let result_1  = "";
// let result_2 = "";
// let i = 0;

// for (let i = 0; i < numbers.length; ++i) {
//     if (i === numbers.length - 1) {
//         result_1 += numbers[i] + '.';
//     } else {
//         result_1 += numbers[i] + ', ';
//     }
// }
// for (n of numbers) {
//     if (i === numbers.length - 1) {
//         result_2 += n + '.';
//     } else {
//         result_2 += n + ', ';
//     }
//     ++i
// }

// let result_3 = numbers.join(', ') + '.';

// console.log(result_1,'\n',result_2, '\n', result_3);

// let numbers = [10, 20, 30];
// let result_1 = '';
// let result_2 = '';
// let i = 0;

// for (n of numbers) {
//     if (i === numbers.length - 1) {
//         result_1 += n + '!';
//     } else {
//         result_1 += n + ' - ';
//     }
    
//     ++i
// }

// for (let n = 0; n < numbers.length; ++n) {
//     if (n === numbers.length - 1) {
//         result_2 += numbers[n] + '!';
//     } else {
//         result_2 += numbers[n] + ' - ';
//     }
// }

// let result_3 = numbers.join(' - ') + '!'

// console.log(`${result_1} \n ${result_2} \n ${result_3}`)
// задача 1 2 варианта решения. приемущество отдаю 2 так как он проще в использовании.
// let numbers = [1,2,3,4];
// let sum_1 = 0;
// let mat = '';
// let i = 0;

// for (n of numbers) {
//     if (i === numbers.length - 1) {
//         mat += n + ' =';
//     } else {
//         mat += n + ' + ';
//     }
//     sum_1 +=n;
//     ++ i
// }

// let sum_2 = numbers.join(' + ') + ' =';
// let sum_3 = numbers.reduce((acc, n) => acc + n, 0);

// console.log(`${mat} ${sum_1} \n ${sum_2} ${sum_3}`);
// // Задача 2
// let num = [5, 12, 8, 20, 3];

// let res = num.filter(n => n > 10);
// console.log(res)

// // Задача 3
// let nu_m = [1, 2, 3, 4, 5];

// let re_s = nu_m
//     .map(n => n * 2)
//     .filter(n => n > 5);
// console.log(re_s);

// // Задача 4
// let nums = [10, 50, 120, 80];

// let res_u = nums.find(n => n > 100);

// console.log(res_u);

// // Задача 5
// let numb = [1, 2, 3, 4, 5, 6];

// let rer = numb
//     .filter(n => n % 2 === 0)
//     .map(n => n);
// console.log(rer.length);

// // Задача 6
// let users = [
//     {name: 'Alex', age: 20},
//     {name: 'John', age: 17},
//     {name: 'Kate', age: 25},
//     {name: 'Valera', age: 18}
// ];

// let resu = users
//     .filter(n => n.age >= 18)
//     .map(n => n.name);
// console.log(resu);

// // Задача 7
// let nambe = [3, 7, 2, 9, 5, 25];

// let max = Math.max(... nambe);

// console.log(max);

// // Челлендж
// let number = [1,2,3,4,5];
// let resul = number.map(n => n * 2);
// console.log(resul.join(', ') + '.')

// Новый уровень 1
// let numbers = [2, 4, 6, 8];
// let i = 0
// let counting = 1;
// let text_qm = '"';
// let text = ''
// for (let n of numbers) {
//     if (i === numbers.length - 1) {
//         text += n + ' ='
//     } else {
//         text += n + ' * '
//     }
//     counting *= n
//     ++ i
// }
// console.log(`${text_qm}${text} ${counting}${text_qm}`)

// // Уровень 2
// let words = ['cat', 'dog', 'elephant', 'bee'];

// let work = words.filter(n => n.length > 3);

// console.log(work);

// // Уровень 3

// let wordds = ['hello', 'world', 'js'];
// let Upwords = wordds.map(n => n.toUpperCase());
// console.log(Upwords);

// // Уровень 4

// let numbers = [1, 2, 3, 4, 5, 6];
// let resnum = numbers
//     .filter(n => n % 2 != 0)
//     .reduce((acc, n) => acc + n, 0);
// console.log(resnum);

// // Уровень 5

// let users = [
//   {name: "Alex", age: 20},
//   {name: "John", age: 17},
//   {name: "Kate", age: 25}
// ];

// let adult = users.find(n => n.age > 17);
// console.log(adult.name);

// // Уровень 1
// let numbers = [2, 4, 6, 8];

// let resnum = numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
// console.log(resnum);

// // Уровень 2
// let words = ["apple", "cat", "banana", "dog"];
// let lword = words.filter(n => n.length > 4);
// console.log(lword.length);

// // Уровень 3
// let users = [
//     {name: "Alex", age: 20},
//     {name: "John", age: 17},
//     {name: "Kate", age: 25}
// ];

// let name = users.map(n => n.name);
// console.log(name);

// // Уровень 4
// let numrs = [10, 20, 10, 15, 30, 10];

// let ret = numrs.some(num => {
//     if (num > 100) return true;
// });

// // решение ИИ
// // let ret = numrs.some(num => num > 100);

// console.log(ret)

// // Уровень 5
// let num = [-2, 5, -1, 10];

// let rs = num
//     .filter(n => n >= 0)
// console.log(rs)

// // Уровень повышен на for не обращай внимание, просто вспоминал как пишется.
// let numbers = [5, 2, 8, 1, 9];
// let num_min = Math.max(...numbers);
// let num_max = Math.min(...numbers);

// for (n of numbers) {
//     if ( n < num_min) {
//         num_min = n;
//     } else if (n > num_max) {
//         num_max = n;
//     }
// }

// console.log(num_min, num_max);

// // Уровень 2 ?????????? задать вопрос GPT
// let num = [1,1,1,1,1,2,2,3,4,4,5];
// let res_num = num.filter((item, n) => num.indexOf(item) === n);
// console.log(res_num);

// // Уровень 3 сложно в разборе, разобрать с GPT
// let numb = [1,2,2,3,3,3];

// let res_res = numb.reduce((acc, num) => {
//     acc[num] = (acc[num] || 0) + 1;
//     return acc
// }, {});
// console.log(res_res);

// // Уровень 4 пытаюсь решить сам. Попросил помощь в другом чате но по сути это стрелочная функция которая при выполнении условия выдает true в противоположном случае false
// let num_bers = [1,2,3,4];
// let rer = num_bers.every( n => n > 0);
// console.log(rer)

// // Уровень 5 А это я уже решал)
// let words = ["cat", "elephant", "dog"];
// let ress = words.map(n => n.length)

// console.log(Math.max([...ress]))

let words = ["hi", "hello", "cat", "javascript"];

let ress_words = [];

for ( let word of words) {
    if (word.length > 4) {
        ress_words.push(word);
    }
}
let res_word = words.find(word => word.length > 4);
console.log(res_word);

console.log(ress_words[0]);

let numbers = [1,2,2,3,3,3,4];

let result = numbers.reduce((acc, n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc
}, {});

let count = numbers.filter(n => n === 3).length;
console.log(count);

console.log(result[3]);
