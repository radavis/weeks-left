import React from "react";
import "./UserDetailsForm.css";

export function UserDetailsForm({
  birthdate,
  setBirthdate,
  lifeExpectancy,
  setLifeExpectancy,
}) {
  return (
    <form name="userDetails">
      <label>
        Birthdate
        <input
          type="text"
          name="birthdate"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </label>
      <label>
        Life Expectancy in Years
        <input
          type="number"
          name="lifeExpectancy"
          min="0"
          max="125"
          step="0.1"
          value={lifeExpectancy}
          onChange={(e) => setLifeExpectancy(e.target.value)}
        />
      </label>
      <input type="hidden" name="showAside" value="false" />
      <input type="submit" value="Update" />
    </form>
  );
}
