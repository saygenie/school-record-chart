import React, { useState } from "react";
import CreditChart from "./sections/CreditChart";
import GpaChart from "./sections/GpaChart";
import Result from "./sections/Result";
import styled from "styled-components";
import { parsing } from "./parsing";
import logo from "./yourgpa.png";

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

const Logo = styled.div`
  padding: 3rem;
  div {
    margin: 0 auto;
    text-align: center;
  }
  img {
    width: 50%;
    text-align: center;
  }
`;

const ChartWrapper = styled.div`
  display: flexbox;
  section {
    .subtitle {
      text-align: center;
    }
    width: 50%;
    div {
      margin: 0 auto;
    }
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
      <Logo>
        <div id="logo">
          <img src={logo} alt="키미노쥐피에이와" />
        </div>
      </Logo>
      <RecordInput>
        <div id="editableDiv" contentEditable="true" onPaste={pasteHandler} />
        <button
          className="button is-primary is-fullwidth is-rounded"
          onClick={() => {
            const parsedData = parsing();

            setData(parsedData);
          }}
        >
          <span>📊 차트 만들기 📈</span>
        </button>
      </RecordInput>
      {data.length !== 0 && (
        <>
          <ChartWrapper>
            <GpaChart data={data} />
            <CreditChart data={data} />
          </ChartWrapper>
          <Result data={data} />
        </>
      )}
    </div>
  );
}

export default App;
