// Функция для генерации случайного цвета в формате HEX
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Функция для смены цвета фона и обновления текста цвета
function changeBackgroundColor() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector('.color').textContent = newColor;
}

// Привязка функции к кнопке
const changeColorButton = document.querySelector('.main-button');
changeColorButton.addEventListener('click', changeBackgroundColor);

 