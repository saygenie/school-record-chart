import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";
import { processing2 } from "../parsing";

// 전공 학점 차트
function MajorChart({ data }) {
  console.log(processing2(data),'전공평균')
  return (
    <section>
      <h1>전공 학점</h1>
      <LineChart
        width={500}
        height={250}
        data={processing2(data)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="yearterm" />
        <YAxis domain={[0, 4.5]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="averageGPA" stroke="#8884d8" />
      </LineChart>
    </section>
  );
}

export default MajorChart;
