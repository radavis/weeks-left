function main() {
  // https://www.lifeexpectancy.org/asp/Calculator/default.asp
  let age = 40.5;
  let maxAge = 78.7;
  let weeksLeft = (maxAge - age) * 52;

  let html = `<h1>`;
  html += weeksLeft;
  html += ` weeks left`;
  html += `</h1>`;

  let content = document.getElementById("content");
  content.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", main);