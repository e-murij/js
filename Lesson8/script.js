// 'use strict';
// function myFunc() {
//     console.log('Hello!')
// }
// myFunc();
//
// // function myFunc() {
// //     console.log('Hello!')
// // }
//
// myFunc();
// var a;
// console.log(a);
// // var a = 5;
// a = 5;
// console.log(a);
// console.log(a);
// let a = 5;
// console.log(a);

// foo(); // ?
// let foo = function () {
//     console.log(123);
// }
//
// foo();
// console.log(a); // ?
// if (false) {
//     var a = 5;
// }
// console.log(a); // ?

// var a = 5;
// let a = 5;

// let b = 5;
// let result;
//
// if (b > 3) {
//     result = () => {
//         console.log('>');
//     }
// } else {
//     result = () => {
//         console.log('<=');
//     }
// }
//
// result();
// 'use strict';

// function foo() {
//     'use strict';
//     console.log(this);
// }
// function foo2() {
//     console.log(this);
// }
//
// foo();
// foo2();

// window.foo();

// 'use strict';
// let game = {
//     // run() {
//     //     console.log(this);
//     // }
//     run: function() {
//         console.log(this);
//     }
// };
//
// // game.run();
//
// let myRun = game.run;
// myRun(); // ?
// console.log(this);

// const user = {
//     name: 'Vasya',
//     sayName() {
//         console.log(this);
//     }
// };

// setTimeout(user.sayName(), 1000);
// setTimeout(user.sayName, 1000);
// setTimeout(user.sayName.bind(user), 1000);
// setTimeout(function () {
//     console.log(this);
//     user.sayName();
// }, 1000);

// function sum(a, b) {
//     console.log(this);
//     console.log(a, b);
// }

// sum(4, 7);

// sum.call(user, 4, 7);
// sum.apply(user, [4, 7]);

// const obj = {
//     prop: 'something',
//     init() {
//         console.log(this);
//         const _this = this;
//         const btn = document.getElementById('btn');
//         // btn.addEventListener('click', this.method);
//         // btn.addEventListener('click', obj.method);
//         // btn.addEventListener('click', function () {
//         //     obj.method();
//         // });
//         // btn.addEventListener('click', this.method.bind(this));
//         // btn.addEventListener('click', function () {
//         //     _this.method();
//         // });
//         btn.addEventListener('click', () => this.method());
//     },
//     method() {
//         console.log(this);
//     }
// };
//
// obj.init();
// 'use strict';
// const user = {
//     // name: 'Vasya',
//     // sayName() {
//     //     console.log(this);
//     // }
//     sayName: () => {
//         console.log(this);
//     }
// };
//
// user.sayName();

// const foo2 = () => {
//     console.log(arguments);
// }
// foo2(1, 6, 7);

// function foo(a, b, ...params) {
//     // console.log(arguments);
//     // console.log([].includes.call(arguments, 9));
//     // console.log(Array.prototype.includes.call(arguments, 9));
//     // console.log(Array.from(arguments).includes(9));
//     console.log(params, a, b)
//     console.log(params.includes(9));
// }
//
// foo(4, 7, 9, 3, 50);

// function getObj(name) {
//     return {
//         name,
//         sayName() {
//             console.log(this.name);
//         }
//     }
// }
//
// const obj1 = getObj('Vasya');
// const obj2 = getObj('Ann');
//
// obj1.sayName();
// obj2.sayName();

// function game() {
//     let privateVariable;
//
//     function privateFunction() {
//         console.log('privateFunction started');
//         console.log('privateVariable = ', privateVariable)
//     }
//
//     return {
//         init(value) {
//             privateVariable = value;
//             privateFunction();
//         },
//     };
// }
//
// const myGame = game();
//
// myGame.init(100);
// console.log(myGame);

// function add(a, b) {
//     return a + b;
// }
// function add(a) {
//     return function (b) {
//         return a + b;
//     };
// }
//
// // console.log(add(4, 8));
// // console.log(add(4)(8));
//
// const addTwo = add(4);
// console.log(addTwo(8));

// console.log(sum(a)(b)...(n)()); // => a + b + ... + n
// console.log(sum(a)(b)...(n)); // => a + b + ... + n
