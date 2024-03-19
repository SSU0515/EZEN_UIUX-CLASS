//네비게이션
const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentFrame");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "color:hotpink; background:#fff";
  menuGame.style = "color:#fff; background:#f962cc";
  menuJukebox.style = "color:#fff; background:#f962cc";
};

const gameChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "color:#fff; background:#f962cc";
  menuGame.style = "color:hotpink; background:#fff";
  menuJukebox.style = "color:#fff; background:#f962cc";
};

const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "color:#fff; background:#f962cc";
  menuGame.style = "color:#fff; background:#f962cc";
  menuJukebox.style = "color:hotpink; background:#fff";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gameChange);
menuJukebox.addEventListener("click", jukeboxChange);
