import { getWeeksLeft } from "./getWeeksLeft"

describe("getWeeksLeft()", () => {
  let now = () => new Date().toISOString();

  test("expectedLifetime: 75.0", () => {
    expect(getWeeksLeft(now(), 75.0)).toStrictEqual(["3913", "285714"]);
  })

  test("expectedLifetime: 76.7", () => {
    expect(getWeeksLeft(now(), 76.7)).toStrictEqual(["4002", "000000"]);
  })

  test("expectedLifetime: 80.0", () => {
    expect(getWeeksLeft(now(), 80.0)).toStrictEqual(["4174", "285714"]);
  })
})
