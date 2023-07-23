import ResultTable from "./ResultTable";

function Result(props) {
  return (
    <ResultTable
      resultList={props.resultList}
      initialInvestment={props.initialInvestment}
    />
  );
}

export default Result;
