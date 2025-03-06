document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');

        value.addEventListener('click', function() {
            list.classList.toggle('dropdown__list_active');
        });

        list.addEventListener('click', function(event) {
            if (event.target.classList.contains('dropdown__link')) {
                event.preventDefault();
                value.textContent = event.target.textContent;
                list.classList.remove('dropdown__list_active');
            }
        });
    });
});