/*
  2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
        2.1. Пустая корзина должна выводить строку «Корзина пуста»;
        2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».


    3*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
        3.1. Создать массив товаров (сущность Product);
        3.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.
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
            count: 1,
        },

    ],

    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.product_price * cartItem.count, 0);
    },

    countQuantityGoods() {
        return this.goods.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.count, 0);
    },

    drawBasket() {
        const basketElement = document.querySelector('.basket');
        let contentBasket;
        if (this.goods.length === 0) {
            content = 'Корзина пуста';
        }
        else {
            content = `В корзине ${this.countQuantityGoods()} товаров на сумму ${this.countBasketPrice()} рублей`;
        }
        basketElement.innerText = content;
    }
};

const product = {
    goods: [
        {
            product_id: 1,
            product_name: 'товар_1',
            product_price: 100,
        },
        {
            product_id: 2,
            product_name: 'товар_2',
            product_price: 200,
        },
        {
            product_id: 3,
            product_name: 'товар_3',
            product_price: 300,
        },

    ],

    drawProduct() {
        const productElement = document.querySelector('.catalog');
        let contentCatalog = 'Каталог товаров\n';
        for (let value of this.goods) contentCatalog += `Название товара: ${value.product_name} Цена: ${value.product_price}\n`;
        productElement.innerText = contentCatalog;
    }

}


basket.drawBasket();
product.drawProduct();