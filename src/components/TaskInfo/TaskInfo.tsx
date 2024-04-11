import React, { useState } from 'react'
import { Data } from '../../utils/interfaces'
import { useParams } from 'react-router-dom';
import styles from './taskInfo.module.css';
import { Link } from 'react-router-dom';

interface Props {
  data: Data;
  updateTaskDescription: (id: number, description: string) => void;
}

const TaskInfo: React.FC<Props> = ({ data, updateTaskDescription }) => {
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string | undefined>('');
  const { id } = useParams<{ id: string }>();
  const task = data.backlog.find(task => task.id.toString() === id) || data.ready.find(task => task.id.toString() === id) || data.inProgress.find(task => task.id.toString() === id) || data.finished.find(task => task.id.toString() === id);

  const onTextClick = () => {
    setEditOpen(prevEditOpen => !prevEditOpen);
  }

  const handleOnchange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  }

  const handleSave = () => {
    if(task && task.id) {
      updateTaskDescription(task?.id, description || task?.description);
      setEditOpen(prevEditOpen => !prevEditOpen);
    } else {
      console.log('Task not found')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{task?.title}</h1>
        <div className={styles.info} onClick={onTextClick}>{task?.description}</div>
        {editOpen &&
          <>
            <textarea className={styles.textarea} value={description || task?.description} onChange={handleOnchange}/>
            <button className={styles.saveButton} onClick={handleSave}>Save</button>
          </>}
      </div>
      <Link to={'/'} className={styles.link}></Link>
    </div>
  )
}

export default TaskInfo;