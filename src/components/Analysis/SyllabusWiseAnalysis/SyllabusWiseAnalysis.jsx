// SyllabusWiseAnalysis.js
import Bar from "./Bar";
import styles from "./SyllabusWiseAnalysis.module.css";

const SyllabusWiseAnalysis = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Syllabus Wise Analysis</h2>
      <div className={styles.bars}>
        <Bar
          desiredPercentage={80}
          speed={20}
          color={"#438AF6"}
          title={"HTML tools, Form, History"}
          bgColor="#edf3fe"
        />
        <Bar
          desiredPercentage={60}
          speed={17}
          color={"#FF9142"}
          title={"Tags & References in HTML"}
          bgColor="#fff4ec"
        />
        <Bar
          desiredPercentage={24}
          speed={10}
          color={"#FB5E5E"}
          title={"Tables & CSS basics"}
          bgColor="#ffefe0"
        />
        <Bar
          desiredPercentage={96}
          speed={22}
          color={"#2EC971"}
          title={"Tables & CSS basics"}
          bgColor="#eafaf1"
        />
      </div>
    </div>
  );
};

export default SyllabusWiseAnalysis;
