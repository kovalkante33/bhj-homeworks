document.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');

    reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const revealBottom = reveal.getBoundingClientRect().bottom;

        // Проверяем, находится ли элемент в области видимости
        if (revealTop < window.innerHeight && revealBottom > 0) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

revealOnScroll();