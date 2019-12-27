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

// 전공 학점 차트
function MajorChart({ data }) {
  return (
    <section>
      <h1>전공 학점</h1>
      <LineChart
        width={500}
        height={250}
        data={data}
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
