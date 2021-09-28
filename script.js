const DAYS_PER_YEAR = 365.25;
const MILLISECONDS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;

const weeksLeft = (birthdate, expectedLifetimeInYears) => {
  let endDate = new Date(birthdate);
  let expectedLifetimeInDays = Math.round(expectedLifetimeInYears * DAYS_PER_YEAR)
  endDate.setDate(endDate.getDate() + expectedLifetimeInDays);

  let lifeLeftInMilliSeconds = endDate - new Date();
  return lifeLeftInMilliSeconds / MILLISECONDS_PER_WEEK;
}

const updateContent = () => {
  // https://www.lifeexpectancy.org/asp/Calculator/default.asp
  let result = weeksLeft("1981-03-31", 78.7);

  let html = `<h1>`;
  html += result.toFixed(6);
  html += ` weeks left`;
  html += `</h1>`;

  let content = document.getElementById("content");
  content.innerHTML = html;
}

const main = () => {
  setInterval(updateContent);
}

document.addEventListener("DOMContentLoaded", main);