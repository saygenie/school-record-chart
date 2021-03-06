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
import { processingAll } from "../parsing";

// 이수 학점 차트
function CreditChart({ data }) {
  return (
    <section>
      <h5 class="subtitle is-5">학기별 이수 학점</h5>
      <BarChart
        width={600}
        height={300}
        data={processingAll(data)}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="yearterm" padding={{ left: 30, right: 30 }} />
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
