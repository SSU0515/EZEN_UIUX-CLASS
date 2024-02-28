//친구들과 점심을 먹기로 했다
//짜장면,돈가스,부대찌개,회덮밥,마라탕
//상기메뉴 후보 랜덤으로 하나 선택
//웹 브라우저에 출력될 수 있도록 코드를 작성하라

//배열으로 메뉴를 나열한다 랜덤값을 받는다

const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
const menuNum = Math.floor(Math.random() * menu.length);
const result = menu[menuNum];
document.write(result);
