//コンソールへログを出す
console.log("hello!");

//変数を作成し、ログを表示
const array = 1 + 3;

console.log(array);

//if文
const rating = 3;
// if (rating === 3) {
//     console.log('変数と数字が同じでした！');

// }

if (rating === 2) {
  console.log("変数と数字が同じでした！");
} else {
  console.log("条件がfalseでした");
}

//1~10の中でランダムに出したいとき
const random = Math.floor(Math.random() * 10) + 1;

console.log(random);

//画面上にポップを出す
// const password = prompt('パスワードを入力して下さい');
// console.log(password);

//if文でpasswordの長さによって、ログに出すメッセージを変える
// const password = prompt('入力して！')

// if(password.length >= 5) {
//     console.log('十分な長さです');

// } else {
//     console.log('短すぎます！');

// }

//空白を含めないようにする(半角、全角は判断できない)
// const password = prompt('入力して！')

// if(password.indexOf(' ') === -1) {
//     console.log('空白は見つかりませんでした');

// } else {
//     console.log('空白が存在します');

// }

// const password = prompt("入力して！");

// if (password.length >= 5) {
//   if (password.indexOf(" ") === -1) {
//     console.log("空白もなく、長さも問題なしです");
//   } else {
//     console.log("空白が存在します");
//   }
// } else {
//   console.log("短すぎます！");
// }

//&&(AND)
// const password = prompt("入力して！");

// if (password.length >= 5 && password.indexOf(" ") === -1) {
//   console.log("空白もなく、長さも問題なしです");
// } else {
//   console.log("パスワードが正しくありません");
// }

// ||(OR)
const num = 2;
if (num === 3 || num === 2) {
  console.log("片方がtrueでした");
}

//!(NOT)
let username = prompt("ユーザ名を入力して下さい");

if (!username) {
  username = prompt("空文字はダメですよ");
}
