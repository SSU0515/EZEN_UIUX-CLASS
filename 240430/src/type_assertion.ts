import INameable from "./iNameable";

let obj = {
  name: "jack",
};

//타입단언
let name1 = (obj as INameable).name;

//타입단언 => 제네릭형태
let name2 = (<INameable>obj).name;

console.log(name1, name2);