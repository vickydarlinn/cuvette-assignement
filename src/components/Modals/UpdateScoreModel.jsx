import { useContext, useState } from "react";
import styles from "./UpdateScoreModel.module.css";
import htmlLogo from "../../assets/html_logo.jpg";
import EvaluationContext from "../../context/EvaluationContext";

const UpdateScoreModel = () => {
  const {
    rank,
    percentile,
    score,
    handleRank,
    handlePercentile,
    handleScore,
    handleShowUpdateModel,
  } = useContext(EvaluationContext);

  const [localRank, setLocalRank] = useState(rank);
  const [localPercentile, setLocalPercentile] = useState(percentile);
  const [localScore, setLocalScore] = useState(score);

  const handleRankChange = (event) => {
    const newRank = parseInt(event.target.value);
    setLocalRank(newRank);
  };

  const handlePercentileChange = (event) => {
    const newPercentile = parseInt(event.target.value);
    setLocalPercentile(newPercentile);
  };

  const handleScoreChange = (event) => {
    const newScore = parseInt(event.target.value);
    setLocalScore(newScore);
  };

  const handleSave = () => {
    handleRank(localRank);
    handlePercentile(localPercentile);
    handleScore(localScore);
    handleShowUpdateModel(false);
  };
  const handleCancel = () => {
    handleShowUpdateModel(false);
  };

  const handleOuterContainerClick = (e) => {
    if (e.target.className === "_outer_container_11n2i_1")
      handleShowUpdateModel(false);
  };
  return (
    <div className={styles.outer_container} onClick={handleOuterContainerClick}>
      <div className={styles.inner_container}>
        <div className={styles.info}>
          <h3>Update Score</h3>
          <img src={htmlLogo} alt="HTML Logo" />
        </div>
        <span className={styles.line}></span>
        <div className={styles.updates}>
          <div className={styles.update}>
            <div className={styles.question}>
              <span>1</span>
              <p>
                Update your <span className={styles.mark}>rank</span>
              </p>
            </div>
            <input
              type="number"
              min={1}
              className={styles.answer}
              value={localRank}
              onChange={handleRankChange}
            />
          </div>
          <div className={styles.update}>
            <div className={styles.question}>
              <span>2</span>
              <p>
                Update your <span className={styles.mark}>percentile</span>
              </p>
            </div>
            <input
              type="number"
              min={0}
              max={100}
              className={styles.answer}
              value={localPercentile}
              onChange={handlePercentileChange}
            />
          </div>
          <div className={styles.update}>
            <div className={styles.question}>
              <span>3</span>
              <p>
                Update your{" "}
                <span className={styles.mark}>current score (out of 15)</span>
              </p>
            </div>
            <input
              type="number"
              min={0}
              max={15}
              className={styles.answer}
              value={localScore}
              onChange={handleScoreChange}
            />
          </div>
        </div>
        <span className={styles.line}></span>
        <div className={styles.btns}>
          <button
            onClick={handleCancel}
            className={`${styles.btn} ${styles.cancel} `}
          >
            Cancel
          </button>
          <button
            className={`${styles.btn} ${styles.save} `}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateScoreModel;
