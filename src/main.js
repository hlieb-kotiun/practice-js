// TASK 1

// Якщо імейл і пароль користувача збігаються, зберігайте дані з форми при сабміті
// у локальне сховище і змінюй кнопку login на logout і роби поля введення
// Недоступними для змін.

// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.

// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

// const USER_DATA = {
//   email: 'user@mail.com',
//   password: 'secret',
// };

// const LS_KEY = 'user-data';

// const form = document.querySelector('.login-form');
// const email = document.querySelector('[name="email"]');
// const password = document.querySelector('[name="password"]');
// const button = document.querySelector('.login-form button');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const emailValue = email.value.trim();
//   const passwordValue = password.value.trim();

//   if (button.textContent === 'Logout') {
//     form.reset();
//     localStorage.removeItem(LS_KEY);
//     button.textContent = 'Login';
//     email.removeAttribute('readonly');
//     password.removeAttribute('readonly');
//     return;
//   }

//   if (emailValue === '' || passwordValue === '') {
//     return alert('Fill all fields!');
//   }

//   if (emailValue === USER_DATA.email && passwordValue === USER_DATA.password) {
//     localStorage.setItem(
//       LS_KEY,
//       JSON.stringify({ email: emailValue, password: passwordValue })
//     );

//     button.textContent = 'Logout';
//     email.setAttribute('readonly', true);
//     password.setAttribute('readonly', true);
//   } else {
//     alert('Wrong data!');
//   }
// }

// if (localStorage.getItem(LS_KEY)) {
//   const loginData = JSON.parse(localStorage.getItem(LS_KEY));
//   email.value = loginData.email || '';
//   password.value = loginData.password || '';
//   button.textContent = 'Logout';
//   email.setAttribute('readonly', true);
//   password.setAttribute('readonly', true);
// }

// ЗАВДАННЯ 2

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const promptValue = prompt('Enter value');

// function handlePrompt(promptValue) {
//   return new Promise((resolve, reject) => {
//     const promptValueNum = Number(promptValue);
//     if (isNaN(promptValueNum)) {
//       reject('error');
//     }
//     if (promptValueNum % 2 === 0) {
//       setTimeout(() => {
//         resolve('even');
//       }, 1000);
//     }
//     if (promptValueNum % 2) {
//       setTimeout(() => {
//         resolve('odd');
//       }, 2000);
//     }
//   });
// }
// handlePrompt(promptValue)
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

//   ЗАВДАННЯ 3

// Додай відображення дати і часу в реальному часі
// <!-- Task 3 -->
// <p class="date">Current data and time: <span></span></p>

// const setDate = document.querySelector('.date span');
// update();
// function update (){
//     setDate.textContent=new Date().toLocaleString("en-US");

// }

// setInterval(update, 1000);

// ЗАВДАННЯ 4

// Напишіть функцію calculateAge(birthDate), яка приймає дату народження у форматі YYYY-MM-DD і повертає поточний вік.
// Підказка: Використайте об'єкт Date для обчислення різниці між сьогоднішньою датою і датою народження.

// function calculateAge(birthDate) {
//   const currentDate = new Date();
//   const birth = new Date(birthDate);
//   let difference = currentDate.getFullYear() - birth.getFullYear();

//   const month = currentDate.getMonth() - birth.getMonth();
//   const day = currentDate.getDate() - birth.getDate();

//   if (month < 0 || (day < 0 && month === 0)) {
//     difference -= 1;
//   }

//   return difference;
// }

// console.log(calculateAge('2005-03-10'));
// console.log(calculateAge('2005-11-25'));
// console.log(calculateAge('2005-12-10'));

// ЗАДАЧА 3

// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

const input = document.querySelector('.checkbox');

const STYLE_PAGE = 'theme';

input.addEventListener('change', changeStyle);

function changeStyle(event) {
  if (event.target.checked) {
    document.body.classList.add('dark');

    localStorage.setItem(STYLE_PAGE, 'dark');

    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');

    localStorage.setItem(STYLE_PAGE, 'light');

    document.body.classList.remove('dark');
  }
}

if (localStorage.getItem(STYLE_PAGE) === 'dark') {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  input.checked = true;
}
