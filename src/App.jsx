import { useContext } from "react";
import styles from "./App.module.css";

import Comparison from "./components/Analysis/Comparison/Comparison";
import QuestionAnalysis from "./components/Analysis/QuestionAnalysis/QuestionAnalysis";
import SyllabusWiseAnalysis from "./components/Analysis/SyllabusWiseAnalysis/SyllabusWiseAnalysis";
import QuickStats from "./components/Analysis/QuickStats/QuickStats";
import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/Menubar";
import TestContainer from "./components/Analysis/TestContainer/TestContainer";
import UpdateScoreModel from "./components/Modals/UpdateScoreModel";

import EvaluationContext from "./context/EvaluationContext";

const App = () => {
  const { isShowUpdateModelOpen } = useContext(EvaluationContext);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <MenuBar />
        <div className={styles.child_container}>
          <div className={styles.child_container1}>
            <TestContainer />
            <QuickStats />
            <Comparison />
          </div>
          <div className={styles.child_container2}>
            <SyllabusWiseAnalysis />
            <QuestionAnalysis />
          </div>
        </div>
      </div>
      {isShowUpdateModelOpen && <UpdateScoreModel />}
    </>
  );
};

export default App;
