import React from "react";
import styled from "styled-components";
import { summarizingAll } from "../parsing";

const arr = [
  "http://jjalbang.today/jj22u.gif",
  "http://jjalbang.today/jj22v.jpg",
  "http://jjalbang.today/jj21g.jpg",
  "http://jjalbang.today/jjvC.jpg",
  "http://jjalbang.today/jj1k5.jpg",
  "http://jjalbang.today/jj1s7.jpg",
  "http://jjalbang.today/jj1Tp.jpeg"
];

const ResultContainer = styled.div`
  h3 {
    text-align: center;
  }
  text-align: center;
`;

function Result({ data }) {
  const average = summarizingAll(data);

  return (
    <ResultContainer>
      <h3 className="title is-3">평가</h3>
      {average.avgTotalGpa < 1 ? (
        <img src={arr[0]} alt="비웃음" />
      ) : average.avgTotalGpa < 2 ? (
        <img src={arr[1]} alt="푸흡" />
      ) : average.avgTotalGpa < 2.5 ? (
        <img src={arr[2]} alt="놉니다" />
      ) : average.avgTotalGpa < 3 ? (
        <img src={arr[3]} alt="윙크" />
      ) : average.avgTotalGpa < 3.5 ? (
        <img src={arr[4]} alt="너 잘났다" />
      ) : average.avgTotalGpa < 4 ? (
        <img src={arr[5]} alt="잘난척" />
      ) : (
        <img src={arr[6]} alt="아인슈타인" />
      )}
    </ResultContainer>
  );
}

export default Result;
