import React from "react";
import { useState, useEffect } from "react";
import styles from "./app.module.css";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Layout from "./components/Layout/Layout.tsx";
import { Data , Task} from "./utils/interfaces";
import { Routes, Route } from "react-router-dom";
import TaskInfo from "./components/TaskInfo/TaskInfo.tsx";

function App(): JSX.Element {

  const [backlog, setBacklog] = useState<Task[]>([]);
  const [ready, setReady] = useState<Task[]>([]);
  const [inProgress, setInProgress] = useState<Task[]>([]);
  const [finished, setFinished] = useState<Task[]>([]);

  useEffect(() => {
    const defauldData = '{"backlog": [], "ready": [], "inProgress": [], "finished": []}';
    const data: Data = JSON.parse(localStorage.getItem("data") || defauldData);
    if (data) {
      setBacklog(data.backlog);
      setReady(data.ready);
      setInProgress(data.inProgress);
      setFinished(data.finished);
    }
  }, []);

  useEffect(() => {
    const dataToSave: Data = {backlog, ready, inProgress, finished}
    localStorage.setItem("data", JSON.stringify(dataToSave));
  }, [backlog, ready, inProgress, finished]);

  const handleBacklogUpdate = (updatedBacklog: Task[]) => {
    setBacklog(updatedBacklog);
  };

  const handleReadyUpdate = (updatedReady: Task[]) => {
    setReady(updatedReady);
  };

  const handleInProgressUpdate = (updatedInProgress: Task[]) => {
    setInProgress(updatedInProgress);
  };

  const updateTaskDescription = (id: number, description: string) => {
    const updatedBacklog = backlog.map(task => {
      if (task.id === id) {
        return { ...task, description: description };
      }
      return task;
    });
    const updatedReady = ready.map(task => {
      if (task.id === id) {
        return { ...task, description: description };
      }
      return task;
    });
    const updatedInProgress = inProgress.map(task => {
      if (task.id === id) {
        return { ...task, description: description };
      }
      return task;
    });
    const updatedFinished = finished.map(task => {
      if (task.id === id) {
        return { ...task, description: description };
      }
      return task;
    });
  
    setBacklog(updatedBacklog);
    setReady(updatedReady);
    setInProgress(updatedInProgress);
    setFinished(updatedFinished);
  };

  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Layout
          backlog={backlog}
          ready={ready}
          inProgress={inProgress}
          finished={finished}
          handleBacklogUpdate={handleBacklogUpdate}
          handleReadyUpdate={handleReadyUpdate}
          handleInProgressUpdate={handleInProgressUpdate}
        />} />
        <Route path="/task/:id" element={<TaskInfo data={{
        backlog: backlog,
        ready: ready,
        inProgress: inProgress,
        finished: finished,
      }}
      updateTaskDescription={updateTaskDescription} />} />
      </Routes>
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
