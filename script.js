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
  fractionalWeeks = Math.abs(Math.floor(fractionalWeeks));

  return [wholeWeeks, fractionalWeeks];
}

const updateContent = () => {
  let birthdate = document.userDetails.birthdate.value;
  let expectedLifetimeInYears = document.userDetails.lifeExpectancyInYears.value;
  let [wholeWeeks, fractionalWeeks] = weeksLeft(birthdate, expectedLifetimeInYears);

  let html = `<h1>`;
  html += `You Have `;
  html += `${wholeWeeks}.`;
  html += `<span class='small-text'>${fractionalWeeks}</span>`
  html += ` Weeks Left`;
  html += `</h1>`;

  let content = document.getElementById("content");
  content.innerHTML = html;
}

const initializeUserDetailsForm = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log({ urlParams });
  document.userDetails.birthdate.value = urlParams.get("birthdate") || "1980/03/30"
  document.userDetails.lifeExpectancyInYears.value = urlParams.get("lifeExpectancyInYears")  || 78.0
}

const main = () => {
  initializeUserDetailsForm();
  setInterval(updateContent, 100);
}

document.addEventListener("DOMContentLoaded", main);