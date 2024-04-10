import React, { useState } from 'react';
import styles from './list.module.css';
import Form from '../Form/Form.tsx';
import { Task } from '../../utils/interfaces.ts';

interface Props {
    title: string;
    displayData: Task[];
    selectData?: Task[];
    updateData?: (updatedDisplayData: Task[]) => void;
}

const List: React.FC<Props> = ({title, displayData, selectData, updateData}) => {
    const [formOpen, setFormOpen] = useState(false);

    const toggleForm = () => {
        setFormOpen(!formOpen);
    }

    const handleClick = (updatedDisplayData?: Task[]) => {
        if (updatedDisplayData && updateData) {
            updateData(updatedDisplayData);
        }
        toggleForm();
    }

    const isValid = () => {
        if (title === 'Backlog' || (selectData?.length ?? 0) > 0)
            return true;
    }

    const handleItemClick = (task) => {
        console.log('Item clicked');
        console.log(task.id);
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.list}>
                {displayData.map((task, index) => (
                    <li key={index} className={styles.listItem} onClick={()=>handleItemClick(task)}>
                        {task.title}
                    </li>
                ))}
            </ul>
            {formOpen && <Form title={title} data={displayData} selectData={selectData} handleClick={handleClick} />}
            {!formOpen && <button className={styles.button} onClick={toggleForm} disabled={!isValid()}>
                <img src="/add_icon.png" alt="icon" />
                Add task
            </button>}
        </div>
    );
};

export default List;