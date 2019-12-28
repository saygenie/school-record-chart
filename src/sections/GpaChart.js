import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ReferenceLine
} from "recharts";
import { processingAll } from "../parsing";

// 학점 차트
function GpaChart({ data }) {
  return (
    <section>
      <h5 class="subtitle is-5">학기별 평균 학점</h5>
      <LineChart
        width={600}
        height={300}
        data={processingAll(data)}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="yearterm" />
        <YAxis domain={[0, 4.5]} />
        <ReferenceLine y={3.24} stroke="red" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="totalGpa" stroke="#8884d8" />
        <Line type="monotone" dataKey="generalGpa" stroke="#82ca9d" />
        <Line type="monotone" dataKey="majorGpa" stroke="#38dd90" />
      </LineChart>
    </section>
  );
}

export default GpaChart;
