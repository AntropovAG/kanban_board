import React from "react";
import { useState } from "react";
import styles from "./app.module.css";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Layout from "./components/Layout/Layout.tsx";
import { Data , Task} from "./utils/interfaces";

function App(): JSX.Element {

  const [backlog, setBacklog] = useState<Task[]>([]);
  const [ready, setReady] = useState<Task[]>([]);
  const [inProgress, setInProgress] = useState<Task[]>([]);
  const [finished, setFinished] = useState<Task[]>([]);

  const handleBacklogUpdate = (updatedBacklog: Task[]) => {
    setBacklog(updatedBacklog);
  };

  const handleReadyUpdate = (updatedReady: Task[]) => {
    setReady(updatedReady);
  };

  const handleInProgressUpdate = (updatedInProgress: Task[]) => {
    setInProgress(updatedInProgress);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Layout
        backlog={backlog}
        ready={ready}
        inProgress={inProgress}
        finished={finished}
        handleBacklogUpdate={handleBacklogUpdate}
        handleReadyUpdate={handleReadyUpdate}
        handleInProgressUpdate={handleInProgressUpdate}
      />
      <Footer data={{
        backlog: backlog,
        ready: ready,
        inProgress: inProgress,
        finished: finished
      }} />
    </div>
  );
}

export default App;
