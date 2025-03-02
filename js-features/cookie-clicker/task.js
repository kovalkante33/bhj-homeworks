(() => {
    let clickCount = 0; // Счётчик кликов
    let startTime = null; // Время первого клика
    let lastClickTime = null; // Время последнего клика
    const cookie = document.getElementById("cookie"); // Элемент печеньки
    const counter = document.getElementById("clicker__counter"); // Элемент счётчика
    const speedDisplay = document.getElementById("speed"); // Элемент скорости клака

    // Функция для обработки клика
    const handleClick = () => {
        const now = new Date();
        if (!startTime) { // Запоминаем первый клик
            startTime = now;
        }
        lastClickTime = now; // Обновляем время последнего клика

        clickCount++; // Увеличиваем счётчик
        counter.textContent = clickCount; // Обновляем счётчик на странице

        // Чередуем уменьшение и увеличение печеньки
        if (clickCount % 2 === 1) {
            cookie.style.width = "180px"; // Уменьшаем размер
        } else {
            cookie.style.width = "200px"; // Возвращаем исходный размер
        }

        // Рассчитываем скорость клика
        const timeDiff = (lastClickTime - startTime) / 1000; // Время в секундах
        const speed = clickCount / timeDiff; // Скорость клика
        speedDisplay.textContent = `${speed.toFixed(2)}`;
    };

    // Добавляем обработчик клика на печеньку
    cookie.addEventListener("click", handleClick);
})();