const DAYS_PER_YEAR = 365.25;
const MILLISECONDS_PER_WEEK = 604_800_000; // 1000 * 60 * 60 * 24 * 7
const SIGNIFICANT_DIGITS = 6;

/**
 * @description Calculates the number of weeks a person has left on Earth.
 *
 * @param {string} birthdate A date string that Date.parse understands
 * @param {number} expectedLifetimeInYears e.g. - 72.6
 * @returns {Array} [whole, fractional] weeks between now and
 *   the calculated death date
 *
 * @example
 *   weeksLeft((new Date()).toISOString(), 76.7) => [4002, 096429]
*/
const weeksLeft = (birthdate, expectedLifetimeInYears) => {
  // add days to date
  // https://github.com/you-dont-need/You-Dont-Need-Momentjs#add
  let endDate = new Date(birthdate);
  let expectedLifetimeInDays = expectedLifetimeInYears * DAYS_PER_YEAR;
  endDate.setDate(endDate.getDate() + expectedLifetimeInDays);

  // compute difference between dates
  // https://github.com/you-dont-need/You-Dont-Need-Momentjs#difference
  let now = new Date();
  let lifeLeftInMilliSeconds = endDate - now;

  let wholeWeeks = Math.floor(lifeLeftInMilliSeconds / MILLISECONDS_PER_WEEK);
  let remainderMilliSeconds = lifeLeftInMilliSeconds % MILLISECONDS_PER_WEEK;
  let fractionalWeeks = Math.pow(10, SIGNIFICANT_DIGITS) *
    remainderMilliSeconds / MILLISECONDS_PER_WEEK;
  fractionalWeeks = Math.abs(Math.floor(fractionalWeeks));

  return [
    `${wholeWeeks}`,
    `${fractionalWeeks}`.padStart(SIGNIFICANT_DIGITS, "0")
  ];
}

const updateContent = () => {
  // read from input
  let birthdate = document.userDetails.birthdate.value;
  let expectedLifetimeInYears = document.userDetails.lifeExpectancyInYears.value;
  let [wholeWeeks, fractionalWeeks] = weeksLeft(birthdate, expectedLifetimeInYears);

  // write to page
  let html = `<h1>`;
  html += `You Have `;
  html += `${wholeWeeks}.`;
  html += `<span class='small-text'>${fractionalWeeks}</span>`
  html += ` Weeks Left`;
  html += `</h1>`;

  let content = document.getElementById("content");
  content.innerHTML = html;
}

const initializeFromURL = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // update userDetails form fields
  document.userDetails.birthdate.value = urlParams.get("birthdate") || "1980/03/30";
  document.userDetails.lifeExpectancyInYears.value = urlParams.get("lifeExpectancyInYears") || 72.6;

  // aside + userDetails visible?
  const showAside = urlParams.get("showAside");
  if (showAside == "false") {
    let el = document.querySelector("aside");
    el.style.display = "none";
  }
}

const main = () => {
  initializeFromURL();
  setInterval(updateContent, 100); // run loop
}

document.addEventListener("DOMContentLoaded", main);