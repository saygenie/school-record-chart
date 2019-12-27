import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { processing4 } from "../parsing";

// 이수 학점 차트
function CreditChart({ data }) {
  console.log(processing4(data),'processing4(data)')
  return (
    <section>
      <BarChart
        width={700}
        height={300}
        data={processing4(data)}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <h1>이수 학점</h1>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="yearterm" />
        <YAxis type="number" domain={[0, "4.5"]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="generalCredits" stackId="a" fill="#8884d8" />
        <Bar dataKey="majorCredits" stackId="a" fill="#82ca9d" />
      </BarChart>
    </section>
  );
}

export default CreditChart;
