import { useContext } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import Card from "../card/Card";
import TestContext from "../../../store/test-ctx";

import cardClasses from "../card/Card.module.css";

const Chart = () => {
  const ctx = useContext(TestContext);
  const data = [
    { name: "능력발휘" },
    { name: "자율성" },
    { name: "보수" },
    { name: "안정성" },
    { name: "사회적 인정" },
    { name: "사회봉사" },
    { name: "자기계발" },
    { name: "창의성" },
  ];

  const SCORE = Object.entries(ctx.result)
    .map((item) => item.splice(1, 1))
    .flat()
    .sort((a, b) => {
      let x = a.num;
      let y = b.num;
      if (x < y) {
        return -1;
      }
      return 0;
    });

  for (let i = 0; i < SCORE.length; i++) {
    Object.assign(SCORE[i], data[i]);
  }

  return (
    <Card className={cardClasses.cardChart}>
      <BarChart
        width={680}
        height={380}
        data={SCORE}
        margin={{
          top: 50,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" barSize={40} fill="#8884d8" />
      </BarChart>
    </Card>
  );
};

export default Chart;
