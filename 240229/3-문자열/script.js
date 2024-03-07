// const str = "hello";
// const greeting = "안녕하세요!";
// const str01 = "good morning";
// console.log(str.length);
// console.log(greeting.length);
// console.log(str01.charAt(0));

// const string = prompt("문자열을 입력하세요!");
// const letter = prompt("어떤 문자를 체크하겠습니까?");

// const counting = (str, ch) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다.`);

const str1 = "good morning everyone.beautiful morning";
console.log(str1.indexOf("morning"));
console.log(str1.indexOf("evening"));

const str2 = "Hello, everyone";
console.log("============startsWith=========");
console.log(str2.startsWith("hello"));
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("el", 1));

console.log("============endsWith=========");
console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("Everyone."));
console.log(str2.endsWith("one"));

console.log("============include=========");
console.log(str2.includes("every"));
console.log(str2.includes("one"));
console.log(str2.includes("e", "one"));

console.log("============trim methods=========");
const str3 = "ab cd ef";
const str3_1 = " ab cd ef ";
console.log(str3);
console.log(str3_1);
console.log(str3_1.trim());
console.log(str3_1.trimStart());
console.log(str3_1.trimEnd());

console.log("============uppercase/lowercase=========");
let str4 = "Good Morning";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

console.log("============substring=========");
//두번째 매개변수로 입력해준 숫자자리 앞까지 보여준다
console.log(str4.substring(5, 8));
console.log(str4.substring(5));
console.log(str4.substring(-5, 11));
//음수값을 전혀 인지하지 못한다 음수값이 들어오면 0으로 치환

console.log("============slice=========");
console.log(str4.slice(0, 4));
console.log(str4.slice(0));

console.log("============split=========");
const str5 = "Hello everyone";
const array1 = str5.split(" ");
const array2 = str5.split("");
console.log(array1);
console.log(array2);
