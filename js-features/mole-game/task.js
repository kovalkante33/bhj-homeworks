(() => {
    let dead = 0; // Счётчик побед
    let lost = 0; // Счётчик поражений
    const maxWins = 10; // Условие победы
    const maxLosses = 5; // Условие поражения

    // Функция для обновления статистики
    const updateStats = () => {
        document.getElementById("dead").textContent = dead;
        document.getElementById("lost").textContent = lost;
    };

    // Функция для проверки условий победы или поражения
    const checkWinOrLose = () => {
        if (dead >= maxWins) {
            alert("Вы победили! 🎉");
            game.stop(); // Останавливаем игру
            resetStats(); // Обнуляем статистику
        } else if (lost >= maxLosses) {
            alert("Вы проиграли! 😢");
            game.stop(); // Останавливаем игру
            resetStats(); // Обнуляем статистику
        }
    };

    // Функция для обнуления статистики
    const resetStats = () => {
        dead = 0;
        lost = 0;
        updateStats();
    };

    // Регистрируем обработчики событий для каждой лунки
    for (let i = 1; i <= 9; i++) {
        game.getHole(i).addEventListener("click", () => {
            if (!game.playing) return; // Если игра не активна, игнорируем клики

            if (game.getHole(i).classList.contains("hole_has-mole")) {
                dead++; // Увеличиваем счётчик побед
                game.deactivateHole(i); // Убираем крота после попадания
            } else {
                lost++; // Увеличиваем счётчик поражений
            }

            updateStats(); // Обновляем статистику
            checkWinOrLose(); // Проверяем, выиграл ли игрок или проиграл
        });
    }
})();