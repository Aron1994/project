"use strict";

const personalMovieDB = {

    'count': 0,
    'movies': {},
    'actors': {},
    'genres': [],
  'privat': false,
  start: function () {

    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || personalMovieDB.count == isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function() {

    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов ?', ''),
        b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && != '' && b != '' && a.length < 50) {

        personalMovieDB.movies[a] = b;

        cinsole.log('done');

      } else {

        console.log('error');
        i--;
      }
    }
  },

  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрена мало фильмов');

    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    }

  } else if(personalMovieDB.count > 30) {
    console.log('Вы киноман');
}

} else {
  console.log('Произошла ошибка');
}
},

showMyDB: function (hidden) {

  if (!hidden) {
    console.log(personalMovieDB);
  }
},

toggleVisibleMyDB: function () {
if (personalMovieDB.privat) {
  personalMovieDB.privat = false;
} else {

  personalMovieDB.privat = true;
}
},

writeYourGenres: function () {
  for (let i = 1; i <= 3; i++) {

    let genres = prompt(`Ваш любимый жанр под номером ${i}`);

    if (genres === '' || genres == null) {

      console.log('Вы ввели некорректные данные или не ввели их вовсе');
      i--;

    } else {
      personalMovieDB.genres[i - 1] = genres;
    }
  }

  personalMovieDB.genres.forEach((item, i) => {
    console.log(`Любимый жанр ${i + 1} - это ${item}`)
  });
}
};

// еще один способ

// writeYourGenres: function () {
//   for (let i = 1; i < 2; i++) {

//     let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

//     if (genres === '' || genres == null) {

//       console.log('Вы ввели некорректные данные или не ввели их вовсе');
//       i--;

//     } else {
//       personalMovieDB.genres = genres.split(', ');
//       personalMovieDB.genres = genres.sort();
//     }
//   }

//   personalMovieDB.genres.forEach((item, i) => {
//     console.log(`Любимый жанр ${i + 1} - это ${item}`)
//   });
// }
// };


let x = 5; console.log(x++); //5

console.log([] + false - null + true);//NaN

let y = 1;
let x = y = 2;
console.log(x);//2

console.log([] + 1 + 2); //'12'

console.log("1"[0]);//1

console.log(2 && 1 && null && 0 && undefined);//null

console.log(!!(1 && 2) === (1 && 2));//false

console.log(null || 2 && 3 || 4);//3

const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b); //false

console.log(+Infinity);//Infinity

console.log("Ёжик" > "яблоко");//false

console.log(0 || "" || 2 || undefined || true || falsе);//2



// const a = prompt('Один из последних просмотренных фильмов ?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     с = prompt('Один из последних просмотренных фильмов ?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[с] = d;

// автоматизаяция процесса 

// for (let i = 0; i < 2; i++) {
//   const a = prompt('Один из последних просмотренных фильмов ?', ''),
//     b = prompt('На сколько оцените его?', '');
// }

// console.log(personalMovieDB);


// rememberMyFilms();

// detectPersonalLevel();




// let num = 50;

// // while(num <= 55)  {
// //     console.log(num);
// //     num++;
// // }

// do {
//   console.log(num);
//   num++;
// } while (num < 55);

// for (let i = 1; i < 10; i++) {
//   if (i === 6) {
//     // break; - прерывание
//     // continue; - цикл не прерывается
//   }

//   console.log(i);
// }




// const pet = "How are you ?";

// console.log(pet.slice(4));


// const tog = 12.6;
// console.log(Math.round(tog));


// const test = "12.7px";
// console.log(parseFloat(test));



// const arr = [1, 12, 23, 14, 45, 36, 57, 18];

// // arr.forEach(function (item, i, arr){
  
// //   console.log(`${i}: ${item} внутри массива ${arr}`);

// // });

// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {

//   return a - b; 
// }


// const add = {

//   d: 17,
//   e: 20
// };


// const clone = Object.assign({}, add);

// clone.d = 20;

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'national';
// console.log(newArray);
// console.log(oldArray);



// const video = ['youtube', 'vimeo', 'rutube'],
//   blogs = ['wordpress', 'livejournal', 'blogger'],
//   internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);




// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);



// const array = ['a', 'b'];

// const nArray = [...array];

// const q = {

//   one: 1,
//   two: 2
// };


// const newObj = { ...q };


let answerTheQuestion = prompt("Какое «официальное» название JavaScript?", "");
if (answerTheQuestion = 'ECMAScript') {
  alert('Верно!');

} else { 
  alert('Не знаете? ECMAScript!');
}
// ---------------------

let num = +prompt('Выведите число', 0);
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}
// ---------------------

/*let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}*/



result = (a + b < 4) ? 'Мало' : 'Много';
----------------
    
//   let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }


  let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
      (login == '') ? 'Нет логина' : '';



if (age >= 14 && age <= 90 );
        
if (! (age >= 14 && age <= 90) );

if (age < 14 || age > 90);


Напишите код, который будет спрашивать логин с помощью prompt.

Если посетитель вводит «Админ», то prompt запрашивает пароль,
  если ничего не введено или нажата клавиша Esc – показать «Отменено»,
в противном случае отобразить «Я вас не знаю».

Пароль проверять так:

Если введён пароль «Я главный», то выводить «Здравствуйте!»,
Иначе – «Неверный пароль»,
При отмене – «Отменено».


let userName = prompt(" Кто там ?", '');

if (userName == 'Админ') {

  let pass = prompt('Пароль', '');

  if (pass == 'Я главный') {
    alert(' Здравствуйте! ');
  }

} else if (pass == '' || pass == null) {
  alert('Отменено');

} else {
  alert(' Неверный пароль ');
}

} else if (userName == '' || cod == nul) {

  alert('Отменено');

} else {
  alert('Я вас не знаю');
}