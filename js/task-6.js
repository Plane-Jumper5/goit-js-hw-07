// Функція для генерації випадкового кольору
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  const controls = document.getElementById('controls');
  const input = controls.querySelector('input');
  const createBtn = controls.querySelector('.button-create');
  const destroyBtn = controls.querySelector('.button-destroy');
  const boxesContainer = document.getElementById('boxes');

  // Функція для створення колекції елементів
  function createBoxes(amount) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      box.style.margin = '5px';
      size += 10;
      boxes.push(box);
    }

    // Очищаємо контейнер перед додаванням нових елементів
    boxesContainer.innerHTML = '';
    boxesContainer.append(...boxes);
  }

  // Функція для очищення колекції елементів
  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  // Обробник для кнопки Create
  createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value, 10);

    // Валідація введеного значення
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = ''; // Очищуємо поле інпуту після створення елементів
    }
  });

  // Обробник для кнопки Destroy
  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });
