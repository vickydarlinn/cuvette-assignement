import { useState } from "react";
import EvaluationContext from "./EvaluationContext";

const EvaluationProvider = ({ children }) => {
  const [isShowUpdateModelOpen, setIsShowUpdateModel] = useState(false);
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [score, setScore] = useState(7);
  return (
    <EvaluationContext.Provider
      value={{
        score,
        percentile,
        rank,
        isShowUpdateModelOpen,
        handleShowUpdateModel: setIsShowUpdateModel,
        handleScore: setScore,
        handleRank: setRank,
        handlePercentile: setPercentile,
      }}
    >
      {children}
    </EvaluationContext.Provider>
  );
};

export default EvaluationProvider;
