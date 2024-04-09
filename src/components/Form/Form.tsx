import React, { useState } from 'react';
import styles from './form.module.css';
import { Task } from '../../utils/interfaces';

interface Props {
    title: string;
    data: Task[];
    handleClick: () => void;
}

const Form: React.FC<Props> = ({ title, data, handleClick }) => {
    const [task, setTask] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTask(e.target.value);
    }

    const addTask = (e) => {
        e.preventDefault();
        let newTask = {
            id: 7,
            title: task,
            description: task,
        }
        data.push(newTask);
        handleClick();
    };

    return (
        <form className={styles.form} onSubmit={addTask}>
            {
                title === 'Backlog' ? (
                    <>
                        <input className={styles.input} type="text" onChange={handleChange} />
                        <button className={styles.button}>Submit</button>
                    </>) : (
                    <>
                        <select name="tasks" id="tasks" onChange={handleSelectChange} defaultValue="">
                        <option value="" disabled hidden>Select a task</option>
                            {data.map((task, index) => (
                                <option key={index} value={task.title}>{task.title}</option>
                            ))}
                        </select>
                    </>)
            }


        </form>
    );
};

export default Form;