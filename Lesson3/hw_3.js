'use strict';
/*
    1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

function simpleUpTo100() {
    let n = 2;
    while (n < 100) {
        let t = 2, isSimple = true;
        while (t <= n) {
            if (n % t === 0 && t !== n) {
                isSimple = false;
                break;
            };
            t++;
        };
        if (isSimple) {
            console.log(n);
        };
        n++;
    };
};

//simpleUpTo100();

/*
    2, 3. Товары в корзине хранятся в массиве. Задачи:
        a) Организовать такой массив для хранения товаров в корзине;
        b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

const basket = [
    ['товар_1', 100, 3],
    ['товар_2', 200, 1],
    ['товар_3', 400, 2],
    ['товар_4', 300, 10],
]; // [название, цена,количество]

function countBasketPrice(basket) {
    let basketPrice = 0;
    for (const value of basket) {
        basketPrice += value[1] * value[2];
    };
    return basketPrice;
}

// console.log(countBasketPrice(basket))

/*
    4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
    for(…){// здесь пусто}
*/

// for (let i = 0; i < 10; console.log(i++)) { };


/*
    5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
    x
    xx
    xxx
    xxxx
    xxxxx
*/

let str = 'x';
console.log(str);
for (let x = 1; x < 20; x++) {
    console.log(str += 'x');
};


