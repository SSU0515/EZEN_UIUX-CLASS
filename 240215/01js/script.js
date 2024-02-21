// if(조건식이 참이여야){
//   실행문 실행
// }

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다");
// }

// const userInput = prompt("당신의 이름을 입력하세요");

// if (userInput === null) {
//   alert("취소하셨습니다!");
// } else {
//   alert(`${userInput}님 환영합니다!`);
// }

// const score = Number(prompt("프로그램 점수 :"));

// //예외조항처리
// //중첩 사용가능 = 반복해서 사용가능
// if (score != null) {
//   if (score >= 90) {
//     alert("A학점");
//   } else if (score >= 80) {
//     alert("B학점");
//   } else {
//     alert("C학점");
//   }
// }

//조건문을 활용해서 사용자에게 어떤 숫자를 하나 받아서 그 숫자가 짝수인지, 홀수인지 확인한 이후 알림창을 활용해서
//사용자에게 짝수 혹은 홀수입니다.라는 메세지를 출력해주세요

//사용자에게 숫자 입력받기
//if문 활용해서 조건문으로 짝수인지 홀수인지 연산자를 이용해서 확인하기
//알림띄우기

// const userNum = prompt("숫자를 입력해주세요.");

// if (userNum != null) {
//   const resetNum = Number(userNum);
//   if (resetNum % 2 === 0) {
//     alert("당신이 선택한 숫자는 짝수입니다.");
//   } else {
//     alert("당신이 선택한 숫자는 홀수입니다.");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// if (userNum != null) {
//   const resetNum = Number(userNum);
//   resetNum % 2 === 0 ? alert("짝수") : alert("홀수");
// } else {
//   alert("취소");
// }

//1~12까지의 숫자 중 하나를 받는다
//전달받은 숫자에 따라 메세지출력
//9~11 독서의 계절 가을이네요!
//6~8 여행하기 좋은 여름이네요!
//3~5 햇살 가득한 봄이네요!
//12~2 스키의 계절 겨울이네요!

// const userNum = prompt("1부터 12까지 숫자 중 하나를 입력해주세요.");

// if (userNum != null1) {
//   const resetNum = Number(userNum);
//   if (9 <= resetNum <= 11) {
//     alert("독서의 계절 가을이네요!");
//   } else if (6 <= resetNum <= 8) {
//     alert("여행하기 좋은 여름이네요!");
//   } else if (3 <= resetNum <= 5) {
//     alert("햇살 가득한 봄이네요!");
//   } else {
//     alert("스키의 계절 겨울이네요!");
//   }
// }

// let month = prompt("현재는 몇 월 인가요?", "ex . 2");

// if (month != null) {
//   month = Number(month);
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요!");
//   } else if (month >= 6 && month <= 8) {
//     alert("여행하기 좋은 여름이네요!");
//   } else if (month >= 3 && month <= 5) {
//     alert("햇살 가득한 봄이네요!");
//   } else if (month >= 13) {
//     alert("존재하지않습니다.");
//   } else {
//     alert("스키의 계절 겨울이네요!");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

//사용자에게 id와 pw 값을 받음
//id = ezenit pw = 1234 일치하면 반갑습니다!어서오세요!

//const id = "ezenit";
//const pw = 1234;

//const userId = prompt("아이디를 입력해주세요.");

//if (userId === id) {
//  const userPW = Number(prompt("아이디를 입력해주세요."));
//  if (userPW === pw) {
//    alert(`${userId}님 반갑습니다!`);
// } else {
//   alert("비밀번호가 일치하지 않습니다!");
//   location.reload();
// }
// else {
// alert("아이디가 일치하지 않습니다!");
// location.reload();}

//switch (조건식 =>침)값{
//  case 1 : 실행문
//  break

//const subject = prompt("신청할 과목을 선택하세요", "1-HTML ,2-CSS ,3-JS");
//
//if (subject !== null) {
//  switch (subject) {
//    case "1":
//      alert("HTML을 신청하셨습니다.");
//      break;
//    case "2":
//      alert("CSS을 신청하셨습니다.");
//      break;
//    case "3":
//      alert("JS을 신청하셨습니다.");
//      break;
//    default:
//      alert("잘못입력하셨습니다!");
//      location.reload();
//  }
//} else {
//  alert("취소하셨습니다.");
//}

const shop = prompt(
  "즐겨찾는 쇼핑몰을 입력해주세요",
  "쿠팡/G마켓/11ST/마켓컬리"
);

if (shop !== null) {
  switch (shop) {
    case "쿠팡":
      window.location.href = "https://www.coupang.com";
      break;
    case "G마켓":
      window.location.href = "https://www.coupang.com";
      break;
    case "11ST":
      window.location.href = "https://www.coupang.com";
      break;
    case "마켓컬리":
      window.location.href = "https://www.coupang.com";
      break;
  }
} else {
  alert("취소하셨습니다.");
}
