'use strict';
/* JSを良くない書き方をしている場合にエラーをだしてくれる厳格モード
必ず最初に書く
*/
{
// 定数に代入する 値の再代入はできない
// const price = 150;
// const rate = 1.1;

// 変数
// let price = 150;
// console.log(price * 120 * rate);
// console.log(150 * 130 * 1.1);
// console.log(150 * 140 * 1.1);

// price = 300;
// console.log(price * 120 * rate);
// console.log(150 * 130 * 1.1);
// console.log(150 * 140 * 1.1);

// console.log('it\'s a pen.');
// console.log("it's a pen.");
// console.log("it's \na \npen."); // /n は改行表現

// // My name is Taro Yamada, call me Taro!

// const fname = 'Taro';
// const lname = 'Yamada';
// console.log('My name is ' + fname + ' ' + lname + ', call me ' + fname + '!');
// console.log(`My name is ${fname} ${lname}, call me ${fname}!`); //テンプレートリテラル

// console.log(50 + '20');  //JSは＋記号で文字と数字をつなぐと、全て文字列になる

// const n = prompt('Any number?'); //prompt ユーザーの入力を受けとる
// console.log(n + 10); //promptの入力は全て文字列になる

// console.log(Number(n) + 10); //Numberで文字列を数値に変換する

// const score = Number(prompt('Score?'));

// console.log(score);

// if(score >= 90) {
//   console.log('A判定');
// } else if(score >= 70) {
//   console.log('B判定');
// } else {
//   console.log('C判定');
// }

// const color = prompt('Color?');
// switch (color) {
//   case 'red':
//     console.log('Stop!');
//     break;
//   case 'yellow':
//     console.log('Slow down!');
//     break;
//   case 'blue':
//   case 'green':
//     console.log('Go!');
//     break;
//   default:
//     console.log('Wrong color');
// }

// }
// for (let i = 0; i < 3; i++) {
// console.log(`${i}: Hello`);

// const rate = 1.1;

// for (let price = 150; price <=160; price++) {
//   console.log(`Price: ${price}`);
//   for (let amount = 120; amount <= 140; amount = amount + 10) {
//     console.log(price * amount * rate);
//   }
// }

// price = 150;


// price = 300;
// console.log(price * 120 * rate);
// console.log(150 * 130 * 1.1);
// console.log(150 * 140 * 1.1);


// let command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
// while (command !== 0) {
//   console.log(`Menu is ${command}`);
//   command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
// }

// let command

// do {
//   command = Number(prompt('Menu 1, 2, 3 or 0 to exit'));
//   if (command === 0) {
//     console.log('Exited.');
//   } else {
//     console.log(`Menu is ${command} processed.`);
//   }
// } while (command !== 0);

// let money = 100;
// for (let year = 1; year <= 30; year++) {
//   money *= 1.05;
//   if (money < 200) {
//     continue;
//   }
//   if (money >= 300) {
//     break;
//   }
//   console.log(`${year} 年目：${money} yen`);
// }


// const score = Number(prompt('Score?'));
// const result = score > 80 ? 'A' : 'B';
// // console.log(result);
// const english = Number(prompt('English?'));
// const math = Number(prompt('Math?'));

// if (english >= 80 && math >=80) {
//   console.log('A');
// } else {
//   console.log('B');
// }

// let x = 10;
// {
//   x = 20;
//   console.log(x);
// }
// console.log(x);


  // function calculateTotal(price, amount, rate = 1.1) {
  //   if (amount >= 100) {
  //     return price * amount;
  //   } else {
  //   return price * amount * rate;
  //   }
  // }

  // console.log(calculateTotal(100, 100));
  // console.log(calculateTotal(1000, 10));

// function Ad() {
//     console.log("---------");
//     console.log("SALE! 50% OFF!");
//     console.log("---------");
//   }

//   function Content() {
//     console.log("BREAKING NEWS!");
//     console.log("Two baby pandas born at our Zoo!");
//   }

//   Ad();
//   Content();
//   Ad();

// function double(num) {
//   return num * 2;
// }

// console.log(double(10));

// const double = function(num) {
//   return num * 2;
// };

// console.log(double(10));

// const double = (num) => {
//   return num * 2;
// };

// const calc = (num, func) => {
//   return func(num);
// };

// console.log(calc(20, bledou)

// document.querySelector('button').addEventListener('click', () => {
//   alert(document.querySelector('input').value);
// });

// document.querySelector('button').addEventListener('click', () => {
//   alert(document.querySelector('textarea').value);
// });

// document.querySelector('button').addEventListener('click', () => {
//   alert(document.querySelector('select').value);
// });

// document.querySelector('input').addEventListener('input', () => {
//   const pElements = document.querySelector('p');
//   const inputElements = document.querySelector('input');
//   // pElements.textContent = inputElements.value; インプット欄に打ち込んだ文字がそのままPタグに出る
//   pElements.textContent = inputElements.value.length; //インプット欄に打ち込んだ文字数が出る
// });

// 映画の時間　分を入力ー＞時間に変換
// const m = Number(prompt('minutes?'));
// console.log(`${ Math.floor(m/60)} : ${m%60}`);


  // const n = Number(prompt('Number?'));
  // let A = 0;
  // let max = 0;
  // for (let i = 0; i < 10; i++) {
  //   const r = Math.random();
  //   A = (n * r).toFixed(2);
  //   console.log(`${i}: ${A}`);
  // }

  // const array= [24,93,85,63,49,28];
  // console.log(Math.max(...array));
  // console.log(Math.min(...array));

//   const string = prompt('any string?');
//   console.log(string);
//   console.log(string.length);
//   console.log(string[4]);

// const d = new Date();
// console.log(d.toLocaleString());
// console.log(d);
// console.log(d.toLocaleString());
// console.log(d.getFullYear());
// console.log(d.getMonth()); // 0:1月, 1：2月, , ...
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());
// console.log(d.getDay()); // 0：月曜日, 1：火曜日, ...

// const d = new Date(2000,3,11);
// console.log(d.toLocaleString());

// const f = new Date(2000,2,0);
// f.setMonth(f.getMonth() + 100);
// console.log(f.toLocaleString());


// let count = 3;

//   const I = setInterval(() => {
//     console.log(count);
//     count--;
//     if (count < 0) {
//       clearInterval(I);
//     }
//   }, 1000);

const scores = [80, 90, 40, 70];

  scores.forEach((score) => {
  // scores.forEach((score, index) => {
    console.log(`Score ${index}: ${score}`);
  });

 }