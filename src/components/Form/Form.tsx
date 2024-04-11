import React, { useState } from 'react';
import styles from './form.module.css';
import { Task } from '../../utils/interfaces';

interface Props {
    title: string;
    data: Task[];
    selectData?: Task[];
    handleClick: (updatedDisplayData?: Task[]) => void;
}

const Form: React.FC<Props> = ({ title, data, selectData, handleClick }) => {
    const [task, setTask] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const selectTask = (id: number) => {
        const selectedTask = selectData?.find(task => task.id === id);
        if (selectedTask) {
            data.push(selectedTask);
        }
        const updatedSelectData = selectData?.filter(task => task.id !== id);
        handleClick(updatedSelectData);
    }

    const addTask = (e) => {
        e.preventDefault();
        const updatedtaskList = [...data];
        if (task.trim() !== '') {
            updatedtaskList.push({
                id: Date.now(),
                title: task,
                description: 'This task has no description',
            });
        };
        handleClick(updatedtaskList);
        setTask('');
    };

    const onButtonClick = () => {
        setOpen(prevOpen => !prevOpen);
    }

    return (
        <form className={styles.form} onSubmit={addTask}>
            {
                title === 'Backlog' ? (
                    <>
                        <input className={styles.input} type="text" onChange={handleChange} />
                        <button className={styles.button}>Submit</button>
                    </>) : (
                    <div className={styles.selectContainer}>
                        <div className={styles.selectButton} onClick={onButtonClick}></div>
                        {open && <div className={styles.selectContent}>
                            {selectData?.map((task, index) => (
                                <div key={index} onClick={() => selectTask(task.id)}>{task.title}</div>
                            ))}
                        </div>}
                    </div>
                )
            }
        </form>
    );
};

export default Form;