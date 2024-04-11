import React from 'react'
import { Data } from '../../utils/interfaces'
import { useParams } from 'react-router-dom';
import styles from './taskInfo.module.css';

interface Props {
    data: Data;
}

const TaskInfo: React.FC<Props> = ({data}) => {
    const { id } = useParams<{id: string}>();
    const task = data.backlog.find(task => task.id.toString() === id) || data.ready.find(task => task.id.toString() === id) || data.inProgress.find(task => task.id.toString() === id) || data.finished.find(task => task.id.toString() === id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{task?.title}</h1>
        <div className={styles.info}>{task?.description}</div>
      </div>
      <button className={styles.button}></button>
    </div>
  )
}

export default TaskInfo;