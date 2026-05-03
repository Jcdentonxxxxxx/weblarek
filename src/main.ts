import './scss/styles.scss';

import { Products } from "./components/Models/Products";
import { Basket } from "./components/Models/Basket";
import { Buyer } from "./components/Models/Buyer";

import { Api } from "./components/base/Api";
import { Connection } from "./components/Connection/Connection";
import { API_URL } from "./utils/constants";

import { apiProducts } from "./utils/data";

let productsModel = new Products();
let basketModel = new Basket();
let buyerModel = new Buyer();

// проверка productsModel
productsModel.saveProducts(apiProducts.items);

console.log("Массив товаров из каталога: ", productsModel.getProducts());

console.log("Товар по id из каталога: ", productsModel.getProduct("c101ab44-ed99-4a54-990d-47aa2bb4e7d9"));

productsModel.saveChosenProduct(apiProducts.items[0]);
console.log("Получение сохраненного товара: ", productsModel.getChosenProduct());

// проверка basketModel
basketModel.addProduct(apiProducts.items[0]);
basketModel.addProduct(apiProducts.items[1]);
basketModel.addProduct(apiProducts.items[2]);
basketModel.addProduct(apiProducts.items[2]);
basketModel.addProduct(apiProducts.items[2]);
console.log("Массив товаров из корзины: ", basketModel.getChosenProducts());

basketModel.removeProduct(apiProducts.items[1]);
console.log("Массив товаров из корзины после удаления одного товара: ", basketModel.getChosenProducts());

basketModel.addProduct(apiProducts.items[0]);
basketModel.addProduct(apiProducts.items[1]);
console.log("Общая цена товаров в корзине: ", basketModel.getTotalPrice());

console.log("Количество товаров в корзине: ", basketModel.getQuantityProducts());

console.log("Есть ли товар в корзине по id: ", basketModel.isProductInCart("854cef69-976d-4c2a-a18c-2aa45046c390"));

basketModel.clearBasket();
console.log("Массив товаров из корзины после очистки: ", basketModel.getChosenProducts());

// проверка buyerModel
buyerModel.setProperties({address: 'address', email: 'email', phone: '',payment: 'card'});
console.log("Данные покупателя", buyerModel.getProperties());

console.log("Валидация данных покупателя", buyerModel.validationProperties());

buyerModel.clearProperties()
console.log("Данные покупателя после очистки", buyerModel.getProperties());


// проверка запроса на сервер
const api = new Api(API_URL);
const connection = new Connection(api);
connection.get()
    .then(data => {
        console.log('Данные c сервера:', data);
        productsModel.saveProducts(data.items);
        console.log("Массив товаров из каталога после запроса на сервер: ", productsModel.getProducts());
    })
    .catch(err => console.error('Ошибка:', err));




