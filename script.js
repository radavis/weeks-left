function main() {
  // https://www.lifeexpectancy.org/asp/Calculator/default.asp
  let age = 40.5;
  let maxAge = 78.7;
  let weeksLeft = (maxAge - age) * 52;

  let html = `<div>`;
  html += weeksLeft;
  html += ` weeks`;
  html += `</div>`;

  let content = document.getElementById("content");
  content.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", main);