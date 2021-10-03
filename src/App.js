import React, { useState } from "react";
import { Aside } from "./Aside";
import { WeeksLeft } from "./WeeksLeft";
import "./App.css";

export function App() {
  const urlParams = new URLSearchParams(window.location.search);
  let showAside = urlParams.get("showAside") == "false" ? false : true;

  const initialBirthdate = urlParams.get("birthdate") || "1980/03/30";
  const [birthdate, setBirthdate] = useState(initialBirthdate);
  const initialLifeExpectancy = urlParams.get("lifeExpectancy") || 72.6;
  const [lifeExpectancy, setLifeExpectancy] = useState(initialLifeExpectancy);

  let props = {
    birthdate,
    setBirthdate,
    lifeExpectancy,
    setLifeExpectancy,
  };

  return (
    <React.Fragment>
      {showAside && <Aside {...props} />}
      <WeeksLeft {...props} />
    </React.Fragment>
  );
}