'use strict';

// let i = 0;
//
// while (i < 3) {
//     console.log(i);
//     i++;
// }

// let i = 10;
//
// do {
//     console.log(i);
//     i++;
// } while (i < 3);

// for (var i = 0, b = 10; i < 3, b > 3; i++, b--) {
// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }

// while (true) {
//     // some code
// }
//
// do {
//     // some code
// } while (true);

// for (;;) {
//     // some code
// }
//
// for (let i = 0;; i++) {
//     if (i > 10) break; // Выход из цикла
//     if (i % 2 === 1) continue; // завершение итерации
//     console.log(i);
// }

// outerLoop: for (let a = 0; a < 3; a++) {
//         console.log('Upper cycle is running');
//         for (let b = 0; b < 3; b++) {
//             console.log('Inner cycle is running');
//             if (b >= 1) {
//                 console.log('Breaking inner cycle');
//                 break outerLoop;
//             }
//         }
//     }

// const arr = new Array(4, 7, 9);
// const arr = [4, 7, 9];
// console.log(arr[3]);
// arr.length = 0;
// console.log(arr.length);
// arr[arr.length] = 7;
// arr[50] = 50;
// delete arr[1];
// console.log(arr);

// let arr = [
//     [1, 5, 'hi', false],          // 0
//     [55, true, 1, 100],           // 1
//     [true, 'string', NaN, 32],    // 2
// ];

// console.log(arr[2][1]);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function (item, index, array) {
//     console.log(index, item, array);
// });

// find(), some(), indexOf(), reduce(), map(), filter(), includes()

// for (const index in arr) {
//     console.log(arr[index]);
// }

// for (const value of arr) {
//     console.log(value);
// }

// let arr = [true, 'string', NaN, 32];

// console.log(arr.push('end'), arr);
// console.log(arr.unshift('begin'), arr);
//
// console.log(arr.pop(), arr);
// console.log(arr.shift(), arr);

// console.log(arr.splice(1, 1), arr);
// console.log(arr.splice(1, 1, 'qwerty'), arr);
// console.log(arr.splice(1, 0, 'qwerty'), arr);

// let arr = [true, 'string', NaN, 32];
// let arr2 = arr;
// let arr2 = Array.from(arr);
// let arr2 = [...arr];
// let arr2 = JSON.parse(JSON.stringify(arr));
//
// console.log(arr === arr2);
//
// arr2.pop();
// console.log(arr, arr2);
