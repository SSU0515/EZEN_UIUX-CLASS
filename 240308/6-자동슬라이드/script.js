//이미지정의 배열로 세팅
const imgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

const container = document.querySelector("#container");
//버튼정의 (유사배열)
const arrows = document.querySelectorAll(".arrow");
const slidePagers = document.querySelector(".slide_pagers");
const pagers = document.querySelectorAll(".slide_pagers li");

const img = document.createElement("img");
const src = document.createAttribute("src");

const imgSrc = `./imgs/${imgs[0]}`;
src.value = imgSrc;
img.setAttributeNode(src);
container.appendChild(img);

//3초에 한번씩 이미지가 바뀌기 위해 증감연산자의 값을 담을 공간 생성
//초기 인덱스값설정
let i = 0;

const changeImg = (direction) => {
  if (direction === "next") {
    i++;
    if (i >= imgs.length) {
      i = 0;
    }
    reset();
    pagers[i].classList.add("active");
  } else if (direction === "prev") {
    i--;
    if (i < 0) {
      i = imgs.length - 1;
    }
    reset();
    pagers[i].classList.add("active");
  }
  src.value = `./imgs/${imgs[i]}`;
};

//콜백함수 비동기처리,삼항조건
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const direction = e.target.id === "left" ? "prev" : "next";
    //자동으로 돌려주기위해서 함수선언
    changeImg(direction);
  });
});

const autoSlide = () => {
  timer = setInterval(() => {
    changeImg("next");
  }, 5000);
};

autoSlide();

const stopSlide = () => {
  clearInterval(timer);
};

const reset = () => {
  pagers.forEach((pager, idx) => {
    pagers[idx].classList.remove("active");
  });
};

container.addEventListener("mouseenter", () => {
  stopSlide();
});

slidePagers.addEventListener("mouseenter", () => {
  autoSlide();
});

container.addEventListener("mouseleave", () => {
  autoSlide();
});

slidePagers.addEventListener("mouseleave", () => {
  autoSlide();
});

const pagerChange = (e) => {
  const target = e.target.dataset.index;
  reset();
  for (let i = 0; i < pagers.length; i++) {
    if (target == i) {
      pagers[i].classList.add("active");
      src.value = `./imgs/${imgs[i]}`;
    }
  }
};

pagers.forEach((pager) => {
  pager.addEventListener("click", pagerChange);
});
