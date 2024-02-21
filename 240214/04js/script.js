//사용자가 입력한 키의 정보를 받는다
//사용자가 입력한 몸무게의 정보를 받는다
//적정체중을 구하는 공식을 이용해서 결과를 확인한다
//적정체중에서 +-5kg을 계산한 값을 확인한다
//적정체중이라면 "적정체중이시네요.축하드립니다"라는 메세지를 출력시킨다
//적정체중이 아니라면 "조금만 더 노력해주세요!"라는 메세지를 출력시킨다

// const userName = prompt("당신의 이름을 입력해주세요.", "ex)김민호");
// const userHeight = Number(prompt("당신의 키를 입력해주세요.", "ex)180"));
// const userWeight = Number(prompt("당신의 몸무게를 입력해주세요.", "ex)75"));
// const normalWeight = (userHeight - 100) * 0.9;

// let result = userWeight >= normalWeight - 5 && userWeight <= normalWeight + 5;
// result = result
//   ? "적정체중이시네요. 축하드립니다!"
//   : "적정체중이 아닙니다. 노력해주세요!";

// document.write(`${userName}님 ${result}`);

//사용자로부터 오늘 하루동안 지출한 교통비를 받는다
//사용자로부터 오늘 하루동안 지출한 식비를 받는다
//사용자로부터 오늘 하루동안 지출한 음료비를 받는다
//교통비와 식비와 음료비를 더한 가격을 계산한다
//총 지출 가격이 1만원이 초과했는지 아닌지 확인한다
//결과값에 따라서 메세지를 화면에 출력한다

const bus = Number(prompt("오늘 하루동안 지출한 교통비를 입력해주세요."));
const food = Number(prompt("오늘 하루동안 지출한 식비를 입력해주세요."));
const drink = Number(prompt("오늘 하루동안 지출한 음료비를 입력해주세요."));
const money = bus + food + drink;

let result = money < 10000;
const overMoney = money - 10000;
const enoughMoney = 10000 - money;

result = result
  ? `${enoughMoney}원 남았습니다`
  : `${overMoney}원 초과하였습니다.`;

document.write(`${result}`);
