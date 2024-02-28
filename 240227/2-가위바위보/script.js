//내가 선택한 가위 바위 보 와 컴퓨터의 선택이 일치했는지 불일치 했는지
//컴퓨터는 랜덤으로 1,2,3으로 가위바위보를 설정한다

document.write("<h1>컴퓨터 & 나의 가위,바위,보 맞추기 게임!</h1>");

const game = prompt("가위,바위,보 중 선택하세요!", "ex.가위 바위 보");
let gameNum = 0;

switch (game) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못 작성되었습니다.");
    location.reload();
}

const com = Math.ceil(Math.random() * 3);
document.write(`<img src="./images/math_img_${com}.jpg">`);

if (gameNum === com) {
  document.write("컴퓨터와 동일합니다.");
} else {
  document.write("컴퓨터와 동일하지 않습니다.");
}

console.log(gameNum, com);
