// const display = (result) => {
//   console.log(`${result}준비완료`);
// };

// const order = (coffee, callback) => {
//   console.log(`${coffee}주문접수`);
//   setTimeout(() => {
//     callback(coffee);
//   }, 3000);
// };

// order("아메리카노", display);

//콜백지옥
// const displayLetter = () => {
//   console.log("A");
//   setTimeout(() => {
//     console.log("B");
//     setTimeout(() => {
//       console.log("C");
//       setTimeout(() => {
//         console.log("D");
//         setTimeout(() => {
//           console.log("stop!");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// displayLetter();
