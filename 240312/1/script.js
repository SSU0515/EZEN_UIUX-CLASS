// const xhr = new XMLHttpRequest();
// xhr.open("GET", "student-2.json", true);
// xhr.send();

fetch("student-2.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
    <h2>${student.name}</h2>
    <ul>
    <li>전공 : ${student.major}</li>
    <li>학년 : ${student.grade}</li>
    </ul>
    `;
    });
    document.querySelector("#result").innerHTML = output;
  });
