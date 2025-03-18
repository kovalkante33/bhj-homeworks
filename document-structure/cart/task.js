document.addEventListener('DOMContentLoaded', function () {
    const cartProducts = document.querySelector('.cart__products'); // Контейнер для товаров в корзине
    const products = document.querySelectorAll('.product'); // Все карточки товаров

    // Функция для обновления количества товара
    function updateQuantity(product, delta) {
        const quantityValue = product.querySelector('.product__quantity-value');
        let quantity = parseInt(quantityValue.textContent);
        quantity += delta;

        // Минимальное количество товара - 1
        if (quantity < 1) quantity = 1;

        quantityValue.textContent = quantity;
    }

    // Функция для добавления товара в корзину
    function addToCart(product) {
        const productId = product.getAttribute('data-id'); // ID товара
        const productImage = product.querySelector('.product__image').src; // Изображение товара
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent); // Количество товара

        // Проверяем, есть ли товар уже в корзине
        const existingCartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

        if (existingCartProduct) {
            // Если товар уже есть, увеличиваем его количество
            const cartProductCount = existingCartProduct.querySelector('.cart__product-count');
            let currentCount = parseInt(cartProductCount.textContent);
            currentCount += quantity;
            cartProductCount.textContent = currentCount;
        } else {
            // Если товара нет, создаем новый элемент в корзине
            const cartProductHTML = `
                <div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${productImage}">
                    <div class="cart__product-count">${quantity}</div>
                </div>
            `;
            cartProducts.insertAdjacentHTML('beforeend', cartProductHTML);
        }
    }

    // Обработчики событий для кнопок увеличения/уменьшения количества
    products.forEach(product => {
        const decButton = product.querySelector('.product__quantity-control_dec');
        const incButton = product.querySelector('.product__quantity-control_inc');
        const addButton = product.querySelector('.product__add');

        // Уменьшение количества
        decButton.addEventListener('click', function () {
            updateQuantity(product, -1);
        });

        // Увеличение количества
        incButton.addEventListener('click', function () {
            updateQuantity(product, 1);
        });

        // Добавление товара в корзину
        addButton.addEventListener('click', function (event) {
            event.preventDefault(); // Отменяем стандартное поведение кнопки
            addToCart(product);
        });
    });
});