// const displayA = () => {
//   console.log("A");
// };
// const displayB = () => {
//   console.log("B");
// };
// const displayC = () => {
//   console.log("C");
// };

// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   setTimeout(() => {
//     console.log("B");
//   }, 2000);
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

const displayA = () => {
  console.log("A");
};

const displayB = (callback) => {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 2000);
};

const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);
