
// Знаходимо список категорій
const categoriesList = document.querySelector('#categories');

// Знаходимо всі елементи з класом 'item' в межах списку категорій
const items = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${items.length}`);

// Проходимося по кожному елементу з класом 'item'
items.forEach(item => {
  // Знаходимо заголовок категорії
  const categoryTitle = item.querySelector('h2').textContent;
  // Знаходимо всі елементи <li> всередині кожної категорії
  const categoryItems = item.querySelectorAll('ul li');
  // Виводимо текст заголовка і кількість елементів у категорії//
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItems.length}`);
});
