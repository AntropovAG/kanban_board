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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedTitle = e.target.value;
        const selectedTask = selectData?.find(task => task.title === selectedTitle);
        if (selectedTask) {
            data.push(selectedTask);
        }
        const updatedSelectData = selectData?.filter(task => task.title !== selectedTitle);
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

    return (
        <form className={styles.form} onSubmit={addTask}>
            {
                title === 'Backlog' ? (
                    <>
                        <input className={styles.input} type="text" onChange={handleChange} />
                        <button className={styles.button}>Submit</button>
                    </>) : (
                    <div className={styles.selectContainer}>
                        <select className={styles.select} name="tasks" id="tasks" onChange={handleSelect} defaultValue="">
                            <option className={styles.option} value="" disabled hidden>Select a task</option>
                            {selectData?.map((task, index) => (
                                <option className={styles.option} key={index} value={task.title}>{task.title}</option>
                            ))}
                        </select>
                    </div>)
            }
        </form>
    );
};

export default Form;