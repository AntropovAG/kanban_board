import React from 'react';
import styles from './backlog.module.css';

interface Props {
    
}

const Backlog: React.FC<Props> = () => {


    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Title</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>Something to do</li>
                <li className={styles.listItem}>Something very very very long to do</li>
            </ul>
            <button className={styles.button}>
                <img src="/add_icon.png" alt="" />
                Add task
            </button>
            <form>
                
            </form>
        </div>
    );
};

export default Backlog;