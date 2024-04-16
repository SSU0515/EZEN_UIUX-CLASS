const xhr = new XMLHttpRequest();

xhr.open("GET", "student.json", true);
xhr.send();

console.log(xhr);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student = JSON.parse(xhr.responseText);
    document.write(`${student.name}학생은 ${student.grade}학년 입니다.`);
  }
};
