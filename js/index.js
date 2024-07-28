// 1 misol
// function sum(arg) {

//     if (arg < 0) {
//         return NaN;
//     }
//     return Math.sqrt(arg);
// }

// let son = 100;
// let natija = sum(son);
// console.log(natija);

// 2 misol

// function sum(num1, num2) {
//     return num1 - num2;
// }

// let son1 = 100;
// let son2 = 50;
// let natija = sum(son1, son2);
// console.log(natija);

// 3 misol

// function repetition(str, marta) {
//     if (marta < 0) {
//         return '';
//     }
//     return str.repeat(marta);
// }

// let matn = "salomat ";
// let takrorlash = 3;
// let natija =repetition(matn, takrorlash);
// console.log(natija);

// 4 misol
// function sum(num1) {
//     return num1 * 3;
// }

// let son1 = 5;
// let natija = sum(son1);
// console.log(natija);

// 5 misol
// function sum(num1, num2) {
//     return num1 / num2;
// }

// let son1 = 100;
// let son2 = 50;
// let natija = sum(son1, son2);
// console.log(natija);

// 6 misol
// function asrniAniqla(yil) {
//     if (yil < 1) {
//     }

//     return Math.floor(yil / 100);
// }

// console.log(`100 yil ${asrniAniqla(100)} asr`);
// console.log(`2001 yil ${asrniAniqla(2001)} asr`)

// 7 misol;

// function sum(n) {
//     if(n === 0){
//      return 1;
//      }

//      return n* sum(n-1);

// }
// console.log(sum(5));
// console.log(sum(7));
// console.log(sum(4));

// 8 misol

// 9 misol
// function name(str, son) {
//     if (son < 0) {
//     }

//     return str.slice(0, -son);
// }

// let matn1 = "salom";
// let matn2 = "salomat";
// let matn3 = "xayrli kun";

// console.log(name(matn1, 1));
// console.log(name(matn2, 5));
// console.log(name(matn3, 5));

// 10 misol
// 11 misol
// function sum(num1) {
//     return num1 * 2;
// }

// let son1 = 3;
// let natija = sum(son1);
// console.log(natija);

// 12 misol

// function name(arg) {
//     return arg.split(' ').join('');
// }

// console.log(name("salom  xayr"));
// console.log(name("salom bolalar"));

// 13 misol

// function name(arg1 , arg2) {
//     return arg1 + arg2;
// }

// console.log(name('salom' ,  'xayr'));

// 14 misol

// function tasodif(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(tasodif(1, 10));
// console.log(tasodif(1, 100));

// 15 misol

//  function name(arg) {
//     let res = arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
//     return res

//  }

// let sum = name ('salom');
// console.log(sum);

// 16 misol
// function num(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum +=arr[i];
//     }
//     return sum;
// }

// console.log(num([1, 2, 3, 4, 5, 6, 7, 8]));
// console.log(num([11, 55, 99]));
// console.log(num([11, 55, 7]));

// 17 misol

// function num(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {

//             max = arr[i]
//         }

//     }
//     return max;
// }

// console.log(num([1, 2, 3, 4, 5, 6, 7, 8]));

// 18 misol

// function sum(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.unshift(arr[i]); 
//     }
//     return res;
// }

// let arr = [2, 4, 6, 8, 10];
// console.log(sum(arr));

// 19 misol


// function sum(arr) {
//     return arr.filter(num => num > 0);
// }
// console.log(sum([-2,5,6,-9]));    



// 20 misol

// function num(arr) {
//     return arr.map(num => num * num);
// }

// console.log(num([1, 2, 3, 4, 5])); 

// 21 misol

// function sum(arr) {
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// console.log(sum([1, 2, 2, 3, 4, 4, 5]));
// console.log(sum(['a', 'b', 'a', 'c']));

// 22 misol
// function name(arg1 , arg2) {
//     return arg1.concat(arg2) 
// }

// console.log(name(['salom' , 'xayr'],['salomat' , 'xayr']));
// console.log(name(['salomat' , 'xayr'],['salom' , 'xayr'],));

// 23 misol

// function sum(arr) {
//     let num = arr.filter(num => num % 2 !== 0);
//     return num.length;
// }

// console.log(sum([1, 2, 3, 4, 5, 6, 7])); 
// console.log(sum([10, 12, 14, 15, 16])); 

// 24 misol

// 25 misol

// function num(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {

//             min = arr[i]
//         }

//     }
//     return min;
// }

// console.log(num([1, 2, 3, 4, 5, 6, 7, 8]));










// 1 misol
// function sum(son) {
//     return son ** 2;
// }

// let son = 5;
// console.log(`${son} ning kvadrati: ${sum(son)}`);

// 2 misol

// function sum(s) {
//     return s.length;
// }

// const result = sum("Salom, dunyo!");
// console.log(result);

// 3 misol
// function sum(num1, num2) {
//     return num1 + num2;
// }

// let son1 = 5;
// let son2 = 10;
// let natija = sum(son1, son2);
// console.log(natija);

//  4 misol

// function max(a, b) {
//     return a > b ? a : b;
// }

// const result = max(10, 20);
// console.log(result);

// 5 misol
// function sum(str) {
//     return str.split('').reverse().join('');
// }

// const sum = "Salom, dunyo!";
// const sum = revertString(sum);
// console.log(sum);

// 6 misol

// function sum(son) {
//     if (son > 0) {
//         return 'Musbat';
//     } else if (son < 0) {
//         return 'Manfiy';
//     } else {
//         return 'Nol';
//     }
// }

// console.log(sum(5));
// console.log(sum(-3));
// console.log(sum(10));

// 7 misol
// function sum(str) {
//     return str.sum();
// }

// let test = "salom xayr";
// let test1 = sum(test);
// console.log(test);

// 8 misol

// function sum(son) {
//     if (son % 2 === 0) {
//         return 'Juft';
//     } else {
//         return 'Toq';
//     }
// }

// console.log(sum(4));
// console.log(sum(7));
// console.log(sum(10));

// 9 misol

// 10 misol

// function sum(a, b) {
//     return a * b;
// }

// const natija = sum(5, 3);
// console.log(natija);

// 11 misol
//  function name(arg) {
//     let res = arg.toLowerCase();
//     return res

//  }

// let sum = name ('SALOM');
// console.log(sum);

// 12 misol

//  function name(arg) {
//     let res = arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
//     return res

//  }

// let sum = name ('salom');
// console.log(sum);

// 13 misol

// function factorial(n) {
//     if (n < 0) {
//         return "Manfiy sonning faktoriali hisoblanmaydi.";
//     } else if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }

// console.log(factorial(5));
// console.log(factorial(0));
// console.log(factorial(-3));

// 14 misol

// 15 misol
// function sum(a, b) {
//     return a / b;
// }

// let son1 = 10;
// let son2 = 2;
// let res = sum(son1, son2);
// console.log(res);

// son2 = 0;
// res = sum(son1, son2);
