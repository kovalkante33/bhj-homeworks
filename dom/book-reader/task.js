document.addEventListener('DOMContentLoaded', function () {
    const book = document.getElementById('book');
    const fontSizes = document.querySelectorAll('.font-size');
    const textColors = document.querySelectorAll('[data-text-color]');
    const bgColors = document.querySelectorAll('[data-bg-color]');

    fontSizes.forEach(fontSize => {
        fontSize.addEventListener('click', function (event) {
            event.preventDefault();

            // Убираем класс font-size_active у всех элементов
            fontSizes.forEach(fs => fs.classList.remove('font-size_active'));

            // Добавляем класс font-size_active текущему элементу
            this.classList.add('font-size_active');

            // Убираем все классы размера шрифта у книги
            book.classList.remove('book_fs-small', 'book_fs-big');

            // Добавляем соответствующий класс в зависимости от data-size
            const size = this.getAttribute('data-size');
            if (size === 'small') {
                book.classList.add('book_fs-small');
            } else if (size === 'big') {
                book.classList.add('book_fs-big');
            }
        });
    });

    // Функция для изменения цвета текста
    textColors.forEach(textColor => {
        textColor.addEventListener('click', function (event) {
            event.preventDefault();

            // Убираем класс color_active у всех элементов
            textColors.forEach(tc => tc.classList.remove('color_active'));

            // Добавляем класс color_active текущему элементу
            this.classList.add('color_active');

            // Убираем все классы цвета текста у книги
            book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

            // Добавляем соответствующий класс в зависимости от data-text-color
            const color = this.getAttribute('data-text-color');
            if (color === 'black') {
                book.classList.add(`book_color-${color}`);
            } else if (color === 'gray') {
                book.classList.add(`book_color-${color}`);
            } else if (color === 'whitesmoke') {
                book.classList.add(`book_color-${color}`);
            }

        });
    });

    // Функция для изменения цвета фона
    bgColors.forEach(bgColor => {
        bgColor.addEventListener('click', function (event) {
            event.preventDefault();

            // Убираем класс color_active у всех элементов
            bgColors.forEach(bg => bg.classList.remove('color_active'));

            // Добавляем класс color_active текущему элементу
            this.classList.add('color_active');

            // Убираем все классы цвета фона у книги
            book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

            // Добавляем соответствующий класс в зависимости от data-bg-color
            const color = this.getAttribute('data-bg-color');
            if (color === 'black') {
                book.classList.add(`book_bg-${color}`);
            } else if (color === 'gray') {
                book.classList.add(`book_bg-${color}`);
            } else if (color === 'white') {
                book.classList.add(`book_bg-${color}`);
            }
        });
    });
});