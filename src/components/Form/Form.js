import React, { useState } from "react";
import styles from "./Form.module.css";

function Form(props) {
  const [currentSavings, setCurrentSavings] = useState(0);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [expectedInterest, setExpectedInterest] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);

  function submitHandler(e) {
    e.preventDefault();
    let formResult = {
      "current-savings": currentSavings,
      "yearly-contribution": yearlySavings,
      "expected-return": expectedInterest,
      duration: investmentDuration
    };
    debugger;
    props.onFormSubmitted(formResult);
  }

  function resetHandler() {
    setCurrentSavings(0);
    setYearlySavings(0);
    setExpectedInterest(0);
    setInvestmentDuration(0);
    props.onReset();
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value={currentSavings}
            onChange={(e) => {
              setCurrentSavings(e.target.value);
            }}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value={yearlySavings}
            onChange={(e) => {
              setYearlySavings(e.target.value);
            }}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value={expectedInterest}
            onChange={(e) => {
              setExpectedInterest(e.target.value);
            }}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value={investmentDuration}
            onChange={(e) => {
              setInvestmentDuration(e.target.value);
            }}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button
          type="reset"
          onClick={resetHandler}
          className={styles["buttonAlt"]}
        >
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
