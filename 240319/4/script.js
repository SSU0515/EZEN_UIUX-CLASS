const h1 = document.querySelector("h1");
const progressBar = document.querySelector(".bar");

const percent = (scrollNem, documentHeight) => {
  return ((scrollNem / documentHeight) * 100).toFixed(0);
};

window.addEventListener("scroll", (e) => {
  const scrollNem = window.scrollY;
  const documentHeight = document.body.scrollHeight - window.innerHeight;

  const per = percent(scrollNem, documentHeight) + "%";

  h1.innerText = per;
  progressBar.style.width = per;
});
