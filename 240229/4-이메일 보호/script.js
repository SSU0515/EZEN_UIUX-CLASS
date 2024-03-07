//사용자가 이메일 주소를 입력하면
//result공간에 사용자의 이메일 정보를 출력하게 해주세요
//이메일 주소중 @앞의 내용으 3자리까지만 출력하게 해주세요
//그리고 4번째 자리부터는 ...온점으로 표기해주세요
//ex)abcde@naver.com => abc..@naver.com

//사용자에게 이메일주소를 받는다
//@을 기점으로 문자열 앞쪽을 자른다(split)
//앞에서 4번째 자리부터는 .으로 표기한다(substring / slice())
//다시 합친다

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");
const button = document.querySelector("#btn");
const result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = "";
  let domain = "";

  if (userEmail.value !== "") {
    userName = userEmail.value.split("@")[0];
    userName = userName.substring(0, 3);
    domain = userEmail.value.split("@")[1];
    result.innerText = `${userName}***@${domain}`;
    console.log(userName);
  }
});
