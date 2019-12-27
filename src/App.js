import React, { useState } from "react";
import CreditChart from "./sections/CreditChart";
import GpaChart from "./sections/GpaChart";
import styled from "styled-components";
import { parsing } from "./parsing";

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
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <RecordInput>
        <div id="editableDiv" contentEditable="true" onPaste={pasteHandler} />
        <button
          className="button is-primary is-fullwidth is-rounded"
          onClick={() => {
            const parsedData = parsing();

            setData(parsedData);
          }}
        >
          차트 만들기
        </button>
      </RecordInput>
      {data.length !== 0 && (
        <ChartWrapper>
          <GpaChart data={data} />
          <CreditChart data={data} />
        </ChartWrapper>
      )}
    </div>
  );
}

export default App;
