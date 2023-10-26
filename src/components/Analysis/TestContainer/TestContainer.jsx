import { useContext } from "react";
import styles from "./TestContainer.module.css";
import htmlLogo from "../../../assets/html_logo.jpg";
import EvaluationContext from "../../../context/EvaluationContext";

const TestContainer = () => {
  const { handleShowUpdateModel } = useContext(EvaluationContext);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={htmlLogo} alt="" />
        <div>
          <h2 className={styles.heading}>HyperText Markup Language</h2>
          <span>
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </span>
        </div>
      </div>
      <button
        onClick={() => handleShowUpdateModel(true)}
        className={styles.btn}
      >
        Update
      </button>
    </div>
  );
};

export default TestContainer;
