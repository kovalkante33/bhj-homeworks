document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = document.querySelector('.modal__close');

    // Функция для установки cookie
    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Функция для получения cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Проверяем, было ли окно закрыто
    const modalClosed = getCookie('modalClosed');

    // Если cookie нет, показываем окно
    if (modalClosed !== 'true') {
        modal.classList.add('modal_active');
    }

    // Обработчик закрытия окна
    closeButton.addEventListener('click', function () {
        modal.classList.remove('modal_active');
        // Устанавливаем cookie на 30 дней
        setCookie('modalClosed', 'true', 30);
    });
});