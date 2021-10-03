import React, { useEffect, useState } from "react"
import { getWeeksLeft } from "./getWeeksLeft";
import "./WeeksLeft.css"

export function WeeksLeft({ birthdate, lifeExpectancy }) {

  const [wholeWeeks, setWholeWeeks] = useState("0");
  const [fractionalWeeks, setFractionalWeeks] = useState("0");

  // https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
  useEffect(() => {
    const interval = setInterval(() => {
      let [wWeeks, fWeeks] = getWeeksLeft(birthdate, lifeExpectancy);
      setWholeWeeks(wWeeks);
      setFractionalWeeks(fWeeks);
    }, 100);
    return () => clearInterval(interval);
  }, [])

  return (
    <article className="weeksLeft">
      <h1>
        You Have {wholeWeeks}.
        <span className="small-text">{fractionalWeeks}</span> Weeks Left
      </h1>
    </article>
  )
}
