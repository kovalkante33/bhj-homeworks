document.addEventListener('DOMContentLoaded', function () {
    const tooltipElements = document.querySelectorAll('.has-tooltip');

    tooltipElements.forEach(element => {
        element.addEventListener('click', function (event) {
            event.preventDefault();

            const activeTooltip = document.querySelector('.tooltip_active');
            if (activeTooltip) {
                activeTooltip.remove();
            }

            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = this.getAttribute('title');

            const elementRect = this.getBoundingClientRect();
            tooltip.style.top = elementRect.bottom + 'px';
            tooltip.style.left = elementRect.left + 'px';

            document.body.appendChild(tooltip);

            tooltip.classList.add('tooltip_active');
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('has-tooltip')) {
            const activeTooltip = document.querySelector('.tooltip_active');
            if (activeTooltip) {
                activeTooltip.remove();
            }
        }
    });
});