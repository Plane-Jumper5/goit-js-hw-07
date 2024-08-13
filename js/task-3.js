// спочатку отримуємо посилання на елементи input і span
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// тепер додаємо прослуховувач події input на інпут
nameInput.addEventListener('input', () => {
    // очищаємо значення від пробілів по краях
    const trimmedValue = nameInput.value.trim();

    // перевіряємо, чи не є значення порожнім
    if (trimmedValue) {
        // Якщо не порожнє, підставляємо значення у span
        nameOutput.textContent = trimmedValue;
    } else {
        // Якщо порожнє, підставляємо "Anonymous"
        nameOutput.textContent = 'Anonymous';
    }
});
