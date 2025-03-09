document.addEventListener('DOMContentLoaded', function () {
    const rotator = document.querySelector('.rotator');
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;

    function rotateCases() {
        // Убираем класс active у текущего элемента
        cases[currentIndex].classList.remove('rotator__case_active');

        // Переходим к следующему элементу
        currentIndex = (currentIndex + 1) % cases.length;

        // Добавляем класс active новому элементу
        cases[currentIndex].classList.add('rotator__case_active');
    }

    // Запускаем ротатор каждую секунду
    setInterval(rotateCases, 1000);
});