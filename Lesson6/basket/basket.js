const basket = {
    basketBlock: null,
    clrBasketButton: null,
    goods: [

    ],

    init(basketBlockClass, clrBasketButton) {
        this.basketBlock = document.querySelector(`.${basketBlockClass}`);
        this.clrBasketButton = document.querySelector(`.${clrBasketButton}`);
        this.addEventHandlers();
        this.render();
    },

    addEventHandlers() {
        this.clrBasketButton.addEventListener('click', () => this.clrBasket());
    },

    clrBasket() {
        this.goods = [];
        this.render();
    },

    render() {
        if (this.goods.length > 0) {
            this.renderBasketList();
        } else {
            this.renderEmptyBasket();
        }
    },

    renderEmptyBasket() {
        this.basketBlock.innerHTML = '';
        this.basketBlock.textContent = 'Корзина пуста.';
    },

    renderBasketList() {
        this.basketBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.basketBlock.insertAdjacentHTML('beforeend', this.renderBasketItem(item));
        });
        this.basketBlock.insertAdjacentHTML('beforeend', this.renderBasketResultPrice());

    },

    renderBasketItem(item) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${item.product_name}</div>
                    <div><b>Цена за шт.</b>: ${item.product_price}</div>
                    <div><b>Количество</b>: ${item.count}</div>
                    <div><b>Стоимость</b>: ${item.product_price * item.count}</div>
                </div>`;
    },

    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.product_price * cartItem.count, 0);
    },

    countQuantityGoods() {
        return this.goods.reduce((totalQuantity, cartItem) => totalQuantity + cartItem.count, 0);
    },

    renderBasketResultPrice() {
        return `<div class="good">
                    В корзине ${this.countQuantityGoods()} товаров на сумму ${this.countBasketPrice()} рублей
                </div>`
    },

    addToBasket(product) {
        console.log(product);
        if (product) {
            const findInBasket = this.goods.find((item) => product.product_id === item.product_id);
            if (findInBasket) {
                findInBasket.count++;
            } else {
                this.goods.push({ product_id: product.product_id, product_name: product.product_name, product_price: product.product_price, count: 1 });
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },


};

const catalog = {
    catalogBlock: null,
    basket: null,
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

    init(catalogBlockClass, basket) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.basket = basket;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.goods.length > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },


    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'В каталоге нет товаров.';
    },

    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.goods.forEach(item => {
            this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
        });
    },

    renderCatalogItem(item) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${item.product_name}</div>
                    <div><b>Цена за шт.</b>: ${item.product_price}</div>
                    <button class="buy" data-product_id = ${item.product_id}> Купить </button>
                </div>`;
    },

    addEventHandlers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },

    addToBasket(event) {
        if (event.target.tagName !== 'BUTTON') return;
        const product_id = +event.target.dataset.product_id;
        console.log(product_id)
        const productToAdd = this.goods.find((product) => product.product_id === product_id);
        this.basket.addToBasket(productToAdd);
    },

}

catalog.init('catalog', basket);
basket.init('basket', 'clr_basket-btn');
