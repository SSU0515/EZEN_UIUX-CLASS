const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//face
ctx.fillStyle = "brown";
ctx.beginPath();
ctx.scale(1, 0.85);
ctx.arc(150, 150, 80, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// ear
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.arc(120, 80, 20, 0, (Math.PI / 180) * 360, false);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 20, 0, (Math.PI / 180) * 360, false);

ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.arc(120, 80, 7, 0, (Math.PI / 180) * 170, true);
ctx.moveTo(200, 80);
ctx.arc(180, 80, 7, 0, (Math.PI / 180) * 170, true);
ctx.stroke();

//eye
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(130, 150, 5, 0, (Math.PI / 180) * 360, false);
ctx.moveTo(165, 150);
ctx.arc(160, 150, 5, 0, (Math.PI / 180) * 360, false);
ctx.fill();

// //nose
ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(145, 160, 3, 0, (Math.PI / 180) * 360, false);
ctx.fill();

//mouse
ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
ctx.arc(145, 165, 10, 0, (Math.PI / 180) * 180, false);
ctx.stroke();
