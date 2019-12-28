import React, { useState } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";

// 학점 차트
function GpaChart({ data }) {
  const [selected, setSelected] = useState("major"); // 교양은 general

  return (
    <section>
      <h1>학점</h1>
      <div className="control">
        <label className="radio">
          <input
            type="radio"
            name="major"
            defaultChecked
            onClick={() => {
              document.getElementsByName("general")[0].checked = false;
              setSelected("major");
            }}
          />
          전공
        </label>
        <label className="radio">
          <input
            type="radio"
            name="general"
            onClick={() => {
              document.getElementsByName("major")[0].checked = false;
              setSelected("general");
            }}
          />
          교양
        </label>
      </div>
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

export default GpaChart;
