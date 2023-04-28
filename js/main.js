//строгии режим 
//"use strict"
//переменная название переменной  тут можем
//let number = 5;
//переменная второе имя переменной(ширина какойто границы)const  контанта значение менять не можем
//const leftBorderWidth = 1;

//number = 10;
//console.log(number);

//var name = 'Ivan';
//задаёт вопро пользователю  помощью команды confirm
//const result = confirm("Are you here?");
//console.log(result);
//вся информация от пользователя будет в виде строк
//const answer = +prompt('Вам еcть 18 ?', ' ');
//console.log(typeof(answer));

//const answers = [];
//answers[0] = prompt('как ваше имя?', '');
//answers[1] = prompt('как ваша фамилия?', '');
//answers[2] = prompt('сколько вам лет?', '');

//document.write(answers);

//console.log(typeof(answers));

//интерполяция
//const category = 'toys';
//console.log(`https://someurl.com/${category}/5`);

//const user = "Ivan";
//alert(`Привет, ${user}`);

//операторы
//console.log('arr' + " - object")

//инкримент дикримент

//let incr = 10,
//decr = 10;
//постфиксное значение когда + в конце или - начало возращает тарое значение пое его увеличивает
//увеличение на единицу
//incr++;
//уменьшения значения на 1 
//decr--;
//префиксное значение когда + впереди или -
//++incr;
//--decr;
//console.log(incr);
//console.log(decr);
//сравнение и или 
//const isChecked = true,
//isClose = false;
//console.log(isChecked || !isClose);



//const number0fFilms = +prompt('Сколько фильмов вы уже помотрели ?', '' );





//const personalMovieDB = {
//   count: number0fFilms,
//   movies:{},
//   ators:{},
//   genres:[],
//   privat: false
//};

//const a = prompt('один из последних промотренных фильмов?', ''),
//   b = prompt('на сколько оцените его?', ''),
//   c = prompt('один из последних промотренных фильмов?', ''),
//   d = prompt('на сколько оцените его ?', '');

//   personalMovieDB.movies[a] = b;
//   personalMovieDB.movies[c] = d;

//   console.log(personalMovieDB);


//const num = 50;
//if(num < 49) {
//   console.log('error');

//} else if(num > 100) {
//   console.log('Много');
//} else {
//   console.log('ok!');
//}

////тернарный оператор
//(num === 50) ? console.log('ок!') : console.log('Error');

//const num = '50';
//контрукция свичь  вегда идет на жесткое сравнение строгое в отличии от других ил проверку

//switch (num) {

//   case '49':
//console.log('неверно!');
//после этой конструкции вегда надотавить break; с точкой и запятой
//break;
//case '100':
//   console.log('неверно');
//   break;

//   case '50':
//   console.log('в точку');
//   break;
   //значение по умолчанию если ничего не вышло?
//   default:
//      console.log('не в этот раз');
//      break;

//}

//циклы 

//let num =50;
//while (num <= 55) {
//   console.log(num);
//   num++;

//}
//cделай пожалуйста что то do
//do{
//   console.log(num);
//   num++;
//}
//while (num < 55);

//for (let i = 1; i < 10; i++){
//if (i === 6) {
////break;
////позволяет пропустить тот шаг который нам не нужен но не прерывает  цикл
//continue;
//}


//console.log(i);
//}

//const a = prompt('один из последних промотренных фильмов?', ''),
//  b = prompt('на сколько оцените его?', ''),
//  c = prompt('один из последних промотренных фильмов?', ''),
//   d = prompt('на сколько оцените его ?', '');

//  personalMovieDB.movies[a] = b;
//  personalMovieDB.movies[c] = d;



//==========================================================================


//const number0fFilms = prompt('Сколько фильмов вы уже помотрели ?', '' );





//const personalMovieDB = {
//   count: number0fFilms,
//   movies:{},
// ators:{},
//   genres:[],
//  privat: false
//};


//  for (let i = 0; i < 2; i++) {
//   const a = prompt('один из последних промотренных фильмов?', ''),
//  b = prompt('на сколько оцените его?', '');
//  //если пользователь не нажал отмену
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//       personalMovieDB.movies[a] = b;
//       console.log('done');
//      } else {

//     console.log('error');
//      i--;
//   }

//  }

//  if(personalMovieDB.count < 10){
//   console.log('промтренно доаольно мало фильмов');
//  } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//   console.log('вы класический зритель');
//  } else if(personalMovieDB.count >= 30) {
//   console.log('вы киноман');
//  } else {
//   console.log('Произошла ошибка');
//  }


//   console.log(personalMovieDB);

//=====================================================================функции
let num = 20;
function showFirstMessage(text) {
	console.log('text');
	console.log(num);
}

showFirstMessage('hello world!');


console.log(num);

//!функця работает до того как она была вызвана запомни
console.log(calc(4, +3));
console.log(calc(5, +6));
console.log(calc(10, +6));

function calc(a, b){
	return (a + b);
}


function ret(){
	let num = 50;
	return num;
}

const anotherNum = ret();
console.log(anotherNum);

logger();
//создается только после обьявления
const logger = function (){
	console.log('hello');
};


