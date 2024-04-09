import React from 'react';
import styles from './layout.module.css';
import List from '../Backlog/List.tsx';
import { Data } from '../../utils/interfaces';

interface LayoutProps {
  data: Data;
}

const Layout: React.FC<LayoutProps> = ({data}) => {
  const backlog = data.backlog;
  const ready = data.ready;
  const inProgress = data.inProgress;
  const finished = data.finished;

  return (
    <main className={styles.container}>
      <List title="Backlog" data={backlog} />
      <List title="Ready" data={ready}/>
      <List title="In Progress" data={inProgress}/>
      <List title="Finished" data={finished}/>
    </main>
  )
}

export default Layout;