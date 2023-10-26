import { useContext } from "react";
import CountUp from "react-countup";

import styles from "./QuickStats.module.css";
import trophy from "../../../assets/trophy.png";
import notebooks from "../../../assets/notebook.png";
import rightImage from "../../../assets/right.png";
import EvaluationContext from "../../../context/EvaluationContext";

const QuickStats = () => {
  const { percentile, score, rank } = useContext(EvaluationContext);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Quick Statistics</p>
      <div className={styles.stats_container}>
        <div className={styles.stats_item_container}>
          <img src={trophy} alt="" className={styles.stats_image} />
          <div className={styles.stats_info}>
            <CountUp
              start={0}
              end={rank}
              duration={2.75}
              style={{ fontWeight: "bold", fontSize: 22 }}
            ></CountUp>
            <span className={styles.stats_name}>YOUR RANK</span>
          </div>
        </div>
        <div className={styles.stats_item_container}>
          <img src={notebooks} alt="" className={styles.stats_image} />
          <div className={styles.stats_info}>
            <CountUp
              start={0}
              end={percentile}
              duration={2.75}
              suffix="%"
              style={{ fontWeight: "bold", fontSize: 22 }}
            ></CountUp>
            <span className={styles.stats_name}>PERCENTILE</span>
          </div>
        </div>{" "}
        <div className={styles.stats_item_container}>
          <img src={rightImage} alt="" className={styles.stats_image} />
          <div className={styles.stats_info}>
            <CountUp
              start={score < 10 ? 0 : ""}
              end={score}
              duration={2.75}
              separator=" "
              prefix="0"
              suffix="/15"
              style={{ fontWeight: "bold", fontSize: 22 }}
            ></CountUp>
            <span className={styles.stats_name}>CORRECT ANSWERS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
