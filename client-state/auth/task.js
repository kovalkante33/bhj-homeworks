document.addEventListener('DOMContentLoaded', () => {
    const signinForm = document.getElementById('signin__form');
    const signinBlock = document.getElementById('signin');
    const welcomeBlock = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');
    const errorBlock = document.getElementById('error');

    // Проверяем, есть ли сохраненный пользователь
    const savedUserId = localStorage.getItem('user_id');

    if (savedUserId) {
        // Если есть, показываем приветствие
        userIdSpan.textContent = savedUserId;
        signinBlock.classList.remove('signin_active');
        welcomeBlock.classList.add('welcome_active');
    } else {
        // Если нет, показываем форму входа
        signinBlock.classList.add('signin_active');
    }

    // Обработка отправки формы
    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(signinForm);
        const login = formData.get('login');
        const password = formData.get('password');

        // Формируем данные для отправки в формате x-www-form-urlencoded
        const requestData = new URLSearchParams();
        requestData.append('login', login);
        requestData.append('password', password);

        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: requestData
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.success) {
                    // Успешная авторизация
                    localStorage.setItem('user_id', data.user_id);
                    userIdSpan.textContent = data.user_id;
                    signinBlock.classList.remove('signin_active');
                    welcomeBlock.classList.add('welcome_active');
                    errorBlock.textContent = '';
                } else {
                    // Ошибка авторизации
                    errorBlock.textContent = 'Неверный логин/пароль';
                }
            })
            .catch(error => {
                console.error('Ошибка:', error);
                errorBlock.textContent = 'Произошла ошибка при авторизации';
            });
    });
});