import "./App.css";
import useCrownFundedData from "./hooks/useCrowdFundedData";
import { TableNavigator, Table } from "./Component/index";
import { useEffect } from "react";
import useTableNavigatorData from "./hooks/useTableNavigatorDetails";

function App() {
  const { crowdFundData, loadingStatus, fetchCrowdFundData } =
    useCrownFundedData();
  const { currentNavigatorPage } =
    useTableNavigatorData();

  useEffect(() => {
    fetchCrowdFundData();
  }, []);

  return (
    <>
      <h1>CROWD FUNDED DETAIL DATA</h1>
      {!loadingStatus && (
        <>
          <Table
            data={crowdFundData}
            column={3}
            row={5}
            heading={["S.No", "Percentage funded", "Amount pledged"]}
            page={currentNavigatorPage}
          />
          <TableNavigator
            row={5}
            data={crowdFundData}
          />
        </>
      )}
    </>
  );
}

export default App;
