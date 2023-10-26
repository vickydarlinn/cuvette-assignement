import { useContext } from "react";

import { PieChart, Pie, Cell } from "recharts";
import styles from "./QuestionAnalysis.module.css";
import goal from "../../../assets/goal.png";
import EvaluationContext from "../../../context/EvaluationContext";

const QuestionAnalysis = () => {
  const { score } = useContext(EvaluationContext);
  const data = [
    { name: "Correct", value: score },

    { name: "Incorrect", value: 15 - score },
  ];

  const COLORS = ["#edf3fe", "#438AF6"];

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Question Analysis</h2>
        <span>{score < 10 ? `0${score}` : `${score}`} / 15 </span>
      </div>
      <p className={styles.para}>
        <span>You scored {score} questions correct out of 15. </span>However it
        still needs some improvements.
      </p>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          startAngle={90}
          endAngle={450}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <image x={185} y={180} width={40} height={40} href={goal} />
      </PieChart>
    </div>
  );
};

export default QuestionAnalysis;
