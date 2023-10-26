import { useContext } from "react";
import styles from "./Comparison.module.css";
import graph from "../../../assets/graph.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Legend,
  ReferenceLine,
  ReferenceArea,
  ReferenceDot,
  ResponsiveContainer,
} from "recharts";
import EvaluationContext from "../../../context/EvaluationContext";

const Comparison = () => {
  const { percentile } = useContext(EvaluationContext);
  const averageScore = 73;
  const formatXAxisTick = (tickItem) => `${tickItem}%`;
  const data = [
    { percent: 0, score: 85 },
    { percent: 20, score: 20 },
    { percent: 40, score: 92 },
    { percent: 60, score: 50 },
    { percent: 80, score: 89 },
    { percent: 100, score: 10 },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div>
          <h3 className={styles.heading}>Comparison Graph</h3>
          <p className={styles.para}>
            <span>You scored {percentile}% percentile</span> which is lower than
            the <br />
            average percentile 72% of all the engineers who took this
            assessment.
          </p>
        </div>
        <div className={styles.photo_container}>
          <img className={styles.photo} src={graph} alt="" />
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={400}>
        <LineChart data={data}>
          <XAxis
            type="number"
            dataKey="percent"
            tickFormatter={formatXAxisTick}
            ticks={[0, 20, 40, 60, 80, 100]}
          />
          <YAxis domain={[0, 100]} tick={null} tickFormatter={null} />
          <Legend />
          <Line
            type="natural"
            dataKey="score"
            stroke="#8884d8"
            dot={false}
            activeDot={false}
          />
          <ReferenceLine
            x={percentile}
            position="middle"
            stroke="#438AF6"
            strokeWidth={1}
            strokeDasharray="3 3"
            isFront={true}
          />

          <ReferenceArea
            x1={percentile - 10}
            x2={percentile + 10}
            y1={0}
            y2={100}
            fill="#edf3fe"
            strokeWidth={3}
          />
          <ReferenceLine
            x={averageScore}
            stroke="#FF9142"
            strokeDasharray="3 3"
            isOverFlow="extendDomain"
          />
          <ReferenceDot
            x={averageScore}
            y={65}
            r={5}
            fill="#FF9142"
            stroke="none"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Comparison;
