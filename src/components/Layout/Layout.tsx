import React from 'react';
import { useState } from 'react';
import styles from './layout.module.css';
import List from '../List/List.tsx';
import { Task } from '../../utils/interfaces';

interface LayoutProps {
  backlog: Task[];
  ready: Task[];
  inProgress: Task[];
  finished: Task[];
  handleBacklogUpdate: (updatedBacklog: Task[]) => void;
  handleReadyUpdate: (updatedReady: Task[]) => void;
  handleInProgressUpdate: (updatedInProgress: Task[]) => void;
}

const Layout: React.FC<LayoutProps> = ({backlog, ready, inProgress, finished, handleBacklogUpdate, handleReadyUpdate, handleInProgressUpdate}) => {


  return (
    <main className={styles.container}>
      <List title="Backlog" displayData={backlog} updateData={handleBacklogUpdate}/>
      <List title="Ready" displayData={ready} selectData={backlog} updateData={handleBacklogUpdate}/>
      <List title="In Progress" displayData={inProgress} selectData={ready} updateData={handleReadyUpdate}/>
      <List title="Finished" displayData={finished} selectData={inProgress} updateData={handleInProgressUpdate}/>
    </main>
  )
}

export default Layout;