import React from 'react'
import styles from './footer.module.css'
import { Data } from '../../utils/interfaces'

interface FooterProps {
  data: Data;
}

const Footer: React.FC<FooterProps> = ({data}) => {
  const activeTasks = data.backlog.length + data.ready.length + data.inProgress.length;
  const finishedTasks = data.finished.length;

  return (
    <footer className={styles.container}>
      <div className={styles.tasksInfo}>
        <p>Active tasks: {activeTasks ? activeTasks : 0}</p>
        <p>Finished tasks: {finishedTasks ? finishedTasks : 0}</p>
      </div>
      <p className={styles.authorInfo}>
        Kanban board by Antropov Anton, 2024
      </p>
    </footer>
  )
}

export default Footer;