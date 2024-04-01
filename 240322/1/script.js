const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let triangle = new Path2D();

triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();
ctx.stroke(triangle);

let circle = new Path2D();
circle.arc(180, 50, 10, 0, (Math.PI / 180) * 360, true);
circle.arc(220, 50, 10, 0, (Math.PI / 180) * 360, true);

ctx.fillStyle = "gray";
ctx.fill(circle);

//스타일을 주려면 함수를 통해서 줘야함 함수가 없다면 나오지않는다

//사각형
// ctx.fillStyle = "rgb(200,0,0)";
// ctx.fillRect(10, 10, 200, 100);
// ctx.strokeStyle = "black";
// ctx.strokeRect(10, 10, 200, 100);

// ctx.fillStyle = "pink";
// ctx.fillRect(50, 50, 120, 120);

// ctx.clearRect(70, 80, 80, 45);

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

//삼각형

//ctx.beginPath();
//ctx.moveTo(50, 50);
//ctx.lineTo(150, 100);
//ctx.lineTo(50, 150);
//ctx.closePath();
////ctx.lineTo(50, 50);
//ctx.stroke();

//ctx.beginPath();
//ctx.moveTo(150, 100);
//ctx.lineTo(250, 50);
//ctx.lineTo(250, 150);
//ctx.closePath();
//ctx.fillStyle = "pink";
//ctx.fill();
// ctx.stroke();

//원
//
// ctx.fillStyle = "pink";
// ctx.strokeStyle = "black";
// ctx.beginPath();
//트루는 반시꼐방향
// ctx.arc(200, 150, 100, 0, Math.PI * 2, true);
//x축좌표,y축좌표,반지름,0도에서 시작,360도 돌기 ,반시계방향
// ctx.closePath();
// ctx.fill();

//반원
// ctx.fillStyle = "pink";
// ctx.beginPath();
// ctx.arc(120, 100, 50, 0, (Math.PI / 180) * 180, true);
// ctx.arc(200, 100, 50, 0, (Math.PI / 180) * 180, false);
// ctx.fill();
// ctx.beginPath();
// ctx.arc(120, 200, 50, (Math.PI / 180) * 90, (Math.PI / 180) * 270, false);
// ctx.fill();

// ctx.strokeStyle = "green";
// ctx.beginPath();
// ctx.arc(200, 200, 500, (Math.PI / 180) * 60, false);
// ctx.stroke();

//타원형
// //선생님 깃허브 참고
// ctx.strokeStyle = "green";
// ctx.fillStyle = "green";
// ctx.scale(1, 0.7);
// ctx.beginPath();
// ctx.arc(200, 250, 80, 0, (Math.PI / 180) * 360, true);
// //
// ctx.stroke();
// //
// ctx.beginPath();
// ctx.arc(100, 200, 20, 0, (Math.PI / 180) * 360, true);
// ctx.stroke();
// //
// ctx.beginPath();
// //
// ctx.arc(100, 200, 15, 0, (Math.PI / 180) * 360, true);
// ctx.stroke();
// ctx.fill();
// //
// ctx.beginPath();
// ctx.arc(300, 200, 15, 0, (Math.PI / 180) * 360, true);
// ctx.stroke();
// ctx.fill();
// //
// ctx.beginPath();
// ctx.arc(300, 200, 20, 0, (Math.PI / 180) * 360, true);
// ctx.stroke();
// //
// ctx.beginPath();
// ctx.arc(200, 250, 30, 0, (Math.PI / 180) * 360, true);
// ctx.stroke();

//곡선
//시작점과 종료지점은 직선과 동일하게 존재!!!
//시작점 &종료지점은 사이 어딘가에 조절점이 존재
//조절점의 위피에 따라서 곡선이 그려짐

//2차배지에
// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// ctx.stroke();
//
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();

//3차배지에
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.stroke();
//
//
//
//
//
//캔버스 태그를 활용해서 웹브라우저 문서상에 실제 캔버스를 만들었다면 그안에 그림을 그릴 수 있다
//캔버스 태그 안에 그림을 그리려면 반드시 getContext("2d")함수를 활용해서 객체를 생성해줘야함
//생성된 객체에 사용할 수 있는 다양한 속성 & 함수가 존재
//fillStyle 속성 : 채우기 컬러를 정의
//fillRect 함수 : 사각형의 도형을 생성
//Radian 각도 사용
//1래디언 => 파이 나누기 180
//180도를 표현하고자 하면 1래디언 *180 => 즉 파이 *1 => Math.PI*1
//Math.PI*0.5 =>90도
//Math.PI*1.5 =>270도
//360도를 표현하고자 하면  (PI/180)*360 = PI*2 => Math.PI*2

// const radians = (Math.PI / 180 )*180
