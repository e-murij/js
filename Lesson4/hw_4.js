'use strict';

/*
    1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function numberInObj(num) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        console.log('Неверные данные. Должно быть целое число от 0 до 999');
        return {};
    }
    return {
        units: num % 10,
        tens: Math.floor(num / 10) % 10,
        hundreds: Math.floor(num / 100),
    };
};

//console.log(numberInObj(1));

/*
    2.Продолжить работу с интернет-магазином:
        2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
        2.2. Реализуйте такие объекты.
        2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const basket = {
    goods: [
        {
            product_id: 1,
            product_name: 'товар_1',
            product_price: 100,
            count: 3,
        },
        {
            product_id: 2,
            product_name: 'товар_2',
            product_price: 200,
            count: 1,
        },
        {
            product_id: 3,
            product_name: 'товар_3',
            product_price: 300,
            count: 2,
        },

    ],

    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.product_price * cartItem.count, 0);
    }
}

//console.log(basket.countBasketPrice());