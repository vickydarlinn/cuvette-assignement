import { useState, useEffect } from "react";
import styles from "./SyllabusWiseAnalysis.module.css";

const Bar = ({ desiredPercentage, speed, color, title, bgColor }) => {
  const [completionPercentage, setCompletionPercentage] = useState(0);
  useEffect(() => {
    // Use a timeout to gradually update the completion percentage
    const updatePercentage = () => {
      let currentPercentage = 0;
      const interval = setInterval(() => {
        currentPercentage += 1;
        setCompletionPercentage(currentPercentage);
        if (currentPercentage >= desiredPercentage) {
          clearInterval(interval);
        }
      }, speed); // You can adjust the interval speed as needed
    };
    updatePercentage();
  }, []);

  return (
    <div>
      <span className={styles.progress_heading}>{title}</span>
      <div className={styles.progress_container}>
        <div
          className={styles.progress_bar}
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div
            className={styles.progress}
            style={{
              width: `${completionPercentage}%`,
              backgroundColor: `${color}`,
            }}
          ></div>
        </div>
        <span
          style={{
            color: `${color}`,
          }}
        >
          {" "}
          {completionPercentage}%
        </span>
      </div>
    </div>
  );
};

export default Bar;
