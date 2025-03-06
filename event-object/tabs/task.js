document.addEventListener('DOMContentLoaded', function () {
    const tabNavigations = document.querySelectorAll('.tab__navigation');

    tabNavigations.forEach(tabNavigation => {
        const tabs = tabNavigation.querySelectorAll('.tab');
        const tabContents = tabNavigation.nextElementSibling.querySelectorAll('.tab__content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Убираем активный класс у всех вкладок и содержимого
                tabs.forEach(t => t.classList.remove('tab_active'));
                tabContents.forEach(content => content.classList.remove('tab__content_active'));

                // Добавляем активный класс к выбранной вкладке и соответствующему содержимому
                tab.classList.add('tab_active');
                tabContents[index].classList.add('tab__content_active');
            });
        });
    });
});