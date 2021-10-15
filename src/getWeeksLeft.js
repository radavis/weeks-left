const DAYS_PER_YEAR = 365.25;
const MILLISECONDS_PER_WEEK = 604_800_000; // 1000 * 60 * 60 * 24 * 7
const SIGNIFICANT_DIGITS = 6;

const now = () => new Date();

/**
 * @description Calculates the number of weeks a person has left on Earth.
 *
 * @param {string} birthdate A date string that Date.parse understands
 * @param {number} expectedLifetimeInYears e.g. - 72.6
 * @returns {Array} [whole, fractional] weeks between now and
 *   the calculated death date
 *
 * @example
 *   getWeeksLeft((new Date()).toISOString(), 76.7) => ["4002", "000000"]
 */
export function getWeeksLeft(birthdate, expectedLifetimeInYears) {
  let endDate = new Date(birthdate);
  let expectedLifetimeInDays = expectedLifetimeInYears * DAYS_PER_YEAR;
  endDate.setDate(endDate.getDate() + expectedLifetimeInDays);

  let lifeLeftInMilliSeconds = endDate - now();
  let wholeWeeks = Math.floor(lifeLeftInMilliSeconds / MILLISECONDS_PER_WEEK);
  let remainderMilliSeconds = lifeLeftInMilliSeconds % MILLISECONDS_PER_WEEK;
  let fractionalWeeks =
    (Math.pow(10, SIGNIFICANT_DIGITS) * remainderMilliSeconds) /
    MILLISECONDS_PER_WEEK;
  fractionalWeeks = Math.abs(Math.floor(fractionalWeeks));

  return [
    `${wholeWeeks}`,
    `${fractionalWeeks}`.padStart(SIGNIFICANT_DIGITS, "0"),
  ];
}
