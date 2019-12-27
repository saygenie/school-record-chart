import React, { useState } from "react";
import CreditChart from "./sections/CreditChart";
import MajorChart from "./sections/MajorChart";
import TotalChart from "./sections/TotalChart";
import styled from "styled-components";
import { default as dummy } from "./dummy.json";

const RecordInput = styled.div`
  padding: 3rem;
  div {
    margin: 0 auto;
    text-align: center;
    font-size: 2rem;
    background-color: whitesmoke;
    table {
      width: 100%;
    }
  }
  button {
    margin-top: 3rem;
  }
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-flow: wrap;
  section {
    width: 50%;
  }
`;

const pasteHandler = () => {
  setTimeout(() => {
    try {
      const table = document.getElementsByTagName("table")[0];

      table.style.width = "100%";
    } catch {
      alert("잘못된 데이터 형식입니다.");
      document.getElementById("editableDiv").innerHTML = "";
    }
  });
};

function App() {
  const [data, setData] = useState(dummy);

  return (
    <div className="App">
      <RecordInput>
        <div id="editableDiv" contentEditable="true" onPaste={pasteHandler} />
        <button
          className="button is-primary is-fullwidth is-rounded"
          onClick={() => {}}
        >
          차트 만들기
        </button>
      </RecordInput>
      {data.length !== 0 && (
        <ChartWrapper>
          <CreditChart data={data} />
          <MajorChart data={data} />
          <TotalChart data={data} />
        </ChartWrapper>
      )}
    </div>
  );
}

export default App;
