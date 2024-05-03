export const init = (callback: () => void) => {
  console.log("default");
  callback();
  console.log("all");
};
