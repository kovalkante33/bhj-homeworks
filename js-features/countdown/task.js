// Шаг 1: начальное значение таймера в секундах
let timer = 59;
const timerElement = document.getElementById('timer');

// Шаг 2: Создаем функцию, которая будет уменьшать таймер каждую секунду
function startTimer() {
    const interval = setInterval(() => {
        if (timer > 0) {
            timerElement.textContent = formatTime(timer); // Обновляем текст элемента
            timer--;
        } else {
            clearInterval(interval); // Останавливаем интервал, когда таймер достигнет 0
            alert("Вы победили в конкурсе!"); // Шаг 3: Выводим сообщение об окончании таймера
            // Повышенный уровень сложности #2
            // Загрузка файла
            const fileUrl = "https://rucars.ru/image/cache/catalog/avtomobili/voyah/1-voyah-free-318-2025-715x493.jpg"; // Укажите URL файла
            // Добавляем невидемый тег "а" с атребутами
            const link = document.createElement("a");
            link.href = fileUrl;
            link.download = "1-voyah-free-318-2025-715x493.jpg"; // Имя файла для загрузки
            link.target = "_blank"; // Для старых браузеров
            link.style.display = "none"; // Скрываем элемент
            document.body.appendChild(link);

            // Программно вызываем клик
            link.click();
        }
    }, 1000); // Интервал в 1000 миллисекунд (1 секунда)
}

// Повышенный уровень сложности #1
// время в формате hh:mm:ss
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Запускаем таймер
startTimer();