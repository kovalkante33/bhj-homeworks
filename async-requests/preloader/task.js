document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');

    function requestCurrencyData() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                const valutes = data.response.Valute;
                itemsContainer.innerHTML = ''; // Очистка контейнера перед добавлением новых данных

                for (let key in valutes) {
                    const item = document.createElement('div');
                    item.className = 'item';
                    item.innerHTML = `
                        <div class="item__code">${valutes[key].CharCode}</div>
                        <div class="item__value">${valutes[key].Value}</div>
                        <div class="item__currency">руб.</div>
                    `;
                    itemsContainer.appendChild(item);
                }
                loader.classList.remove('loader_active'); // Скрываем анимацию загрузки
            }
        };

        xhr.send();
    }

    requestCurrencyData();
});