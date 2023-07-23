import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import React, { useState } from "react";

function App() {
  let [resultList, setResultList] = useState([]);
  let currentSavings = 0;

  function resetHandler() {
    setResultList([]);
  }

  function formSubmittedHandler(userInput) {
    calculateHandler(userInput);
  }

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        id: i + 1,
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution
      });
    }
    setResultList(yearlyData);
  };

  return (
    <div>
      <Header />
      <Form onFormSubmitted={formSubmittedHandler} onReset={resetHandler} />
      {resultList.length === 0 && <div>No results</div>}
      {resultList.length > 0 && (
        <Result resultList={resultList} initialInvestment={currentSavings} />
      )}
    </div>
  );
}

export default App;
