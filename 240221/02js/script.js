//상세설명 보기 / 닫기를 누름에 따라 아래의 설명글이 나타나고 사라진다
//버튼을 불러온다
//버튼 클릭시 텍스트를 사라지게 한다
//다시 버튼을 누르면 보인다

const viewBtn = document.querySelector("#view");
const detail = document.querySelector("#detail");

viewBtn.onclick = function () {
  detail.classList.toggle("hidden");
};
