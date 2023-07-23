function ResultTable(props) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.resultList.map((resultItem) => {
          return (
            <tr key={resultItem.year}>
              <td>{resultItem.year}</td>
              <td>{formatter.format(resultItem.savingsEndOfYear)}</td>
              <td>{formatter.format(resultItem.yearlyInterest)}</td>
              <td>
                {formatter.format(
                  resultItem.savingsEndOfYear -
                    props.initialInvestment -
                    resultItem.yearlyContribution * resultItem.year
                )}
              </td>
              <td>
                {formatter.format(
                  props.initialInvestment +
                    resultItem.yearlyContribution * resultItem.year
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ResultTable;
