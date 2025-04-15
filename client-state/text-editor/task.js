document.addEventListener('DOMContentLoaded', function () {
    const editor = document.getElementById('editor');

    // Восстановление текста из localStorage при загрузке
    const savedText = localStorage.getItem('editorText');
    if (savedText) {
        editor.value = savedText;
    }

    // Сохранение текста при изменении
    editor.addEventListener('input', function () {
        localStorage.setItem('editorText', editor.value);
    });

    // Дополнительное сохранение при потере фокуса
    editor.addEventListener('blur', function () {
        localStorage.setItem('editorText', editor.value);
    });
});