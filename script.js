const DAYS_PER_YEAR = 365.25;
const MILLISECONDS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;
const SIGNIFICANT_DIGITS = 6;

const weeksLeft = (birthdate, expectedLifetimeInYears) => {
  let endDate = new Date(birthdate);
  let expectedLifetimeInDays = expectedLifetimeInYears * DAYS_PER_YEAR;
  endDate.setDate(endDate.getDate() + expectedLifetimeInDays);

  let lifeLeftInMilliSeconds = endDate - new Date();
  let wholeWeeks = Math.floor(lifeLeftInMilliSeconds / MILLISECONDS_PER_WEEK);
  let milliseconds = lifeLeftInMilliSeconds % MILLISECONDS_PER_WEEK;
  let fractionalWeeks = Math.pow(10, SIGNIFICANT_DIGITS) * milliseconds / MILLISECONDS_PER_WEEK;
  fractionalWeeks = Math.floor(fractionalWeeks);

  return [wholeWeeks, fractionalWeeks];
}

const updateContent = () => {
  // https://www.lifeexpectancy.org/asp/Calculator/default.asp
  let [wholeWeeks, fractionalWeeks] = weeksLeft("1981-03-31", 78.7);

  let html = `<h1>`;
  html += `You Have `;
  html += `${wholeWeeks}.`;
  html += `<span class='small-text'>${fractionalWeeks}</span>`
  html += ` Weeks Left`;
  html += `</h1>`;

  let content = document.getElementById("content");
  content.innerHTML = html;
}

const main = () => {
  setInterval(updateContent, 100);
}

document.addEventListener("DOMContentLoaded", main);