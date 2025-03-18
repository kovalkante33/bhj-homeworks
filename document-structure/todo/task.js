document.addEventListener('DOMContentLoaded', function () {
    const tasksForm = document.getElementById('tasks__form'); // Форма для добавления задач
    const taskInput = document.getElementById('task__input'); // Поле ввода задачи
    const tasksList = document.getElementById('tasks__list'); // Контейнер для списка задач

    // Функция для добавления новой задачи
    function addTask(taskText) {
        if (taskText.trim() === '') return; // Не добавляем пустые задачи

        // Создаем HTML-структуру задачи
        const taskHTML = `
            <div class="task">
                <div class="task__title">
                    ${taskText}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;

        // Добавляем задачу в список
        tasksList.insertAdjacentHTML('beforeend', taskHTML);

        // Очищаем поле ввода
        taskInput.value = '';
    }

    // Обработчик отправки формы (нажатие на кнопку "Добавить" или Enter)
    tasksForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Отменяем стандартное поведение формы
        addTask(taskInput.value); // Добавляем задачу
    });

    // Обработчик клика на кнопку удаления задачи
    tasksList.addEventListener('click', function (event) {
        if (event.target.classList.contains('task__remove')) {
            event.preventDefault(); // Отменяем стандартное поведение ссылки
            const taskElement = event.target.closest('.task'); // Находим родительский элемент задачи
            taskElement.remove(); // Удаляем задачу
        }
    });
});