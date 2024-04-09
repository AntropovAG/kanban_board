import React, { useState } from 'react';
import styles from './list.module.css';
import Form from '../Form/Form.tsx';
import { Task } from '../../utils/interfaces.ts';

interface Props {
    title: string;
    data: Task[];
}

const List: React.FC<Props> = ({title, data}) => {
    const [addTask, setAddTask] = useState(false);

    const handleClick = () => {
        setAddTask(!addTask)
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.list}>
                {data.map((task, index) => (
                    <li key={index} className={styles.listItem}>
                        {task.title}
                    </li>
                
                ))}
            </ul>
            {addTask && <Form title={title} data={data}  handleClick={handleClick} />}
            {!addTask && <button className={styles.button} onClick={handleClick}>
                <img src="/add_icon.png" alt="icon" />
                Add task
            </button>}
        </div>
    );
};

export default List;