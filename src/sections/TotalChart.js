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

// const data = [
//   { yearterm: "2015-1", averageGPA: "3.16" },
//   {
//     yearterm: "2015-2",
//     averageGPA: "3.74"
//   },
//   {
//     yearterm: "2016-1",
//     averageGPA: "3.81"
//   },
//   {
//     yearterm: "2016-2",
//     averageGPA: "4.5"
//   }
// ];

function filter(data) {}

// 통합 학점 차트
function TotalChart({ data }) {
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

export default TotalChart;
