// // p.29
// var regular_joe = 'regular_joe is assigned';
// function prison(regular_joe) {
//   console.log(regular_joe);
//   var regular_joe;
//   // 引数でregular_joeの値が定まる。よって'the regular_joe argument'が出力される
//   console.log(regular_joe);
// }

// prison( 'the regular_joe argument');
// // console.log( regular_joe );
// // // 関数ブロック内(ローカル)で定義されている変数にはアクセスできない
// // console.log( prisoner );

// 引数(変数)を期待通りにさせるぜ
// (function (what_to_eat) {
//   var sentence = 'I am going to eat a ' + what_to_eat;
//   console.log(sentence);
// })('sandwich');

// p.57
// var prison = (function () {
//   // 自己実行型無名関数の中身であるため、実行後'なくなる'
//   var prisoner_name = 'Mike Mikowski';
//       jail_term = '20 year term';

//   return {
//     prisoner: prisoner_name + ' - ' + jail_term,
//     sentence: jail_term
//   };
// })();

// console.log(prison.prisoner_name);

// console.log(prison.prisoner);

// console.log(prison.sentence);

// 60p
// var prison = (function () {
//   // prisonerがここではクロージャーとなる
//   var prisoner = 'Josh Powell';

//   return {
//     prisoner: prisoner
//   };
// })();

// console.log(prison.prisoner);

// 65p
// var menu, outer_function, food = 'cake';

// outer_function = function() {
//   var fruit, inner_funtion;

//   fruit = 'apple';

//   inner_function = function() {
//     return {
//       food: food,
//       fruit: fruit
//     };

//   };
//   return inner_funtion;
// };

// menu = outer_function();

// menu();

