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

function filter(data) {}

// 이수 학점 차트
function CreditChart({ data }) {
  const filteredData = filter(data);

  return (
    <section>
      <BarChart
        width={500}
        height={300}
        data={filteredData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="yearterm" />
        <YAxis type="number" domain={[0, "dataMax"]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="averageGPA" stackId="a" fill="#8884d8" />
        <Bar dataKey="averageGPA" stackId="a" fill="#8884d8" />
      </BarChart>
    </section>
  );
}

export default CreditChart;
