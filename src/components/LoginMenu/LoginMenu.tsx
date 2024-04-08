import React from 'react';
import styles from './loginMenu.module.css';

export default function LoginMenu() {
    return (
        <div className={styles.container}>
            <div className={styles.ractangle}></div>
            <a className={styles.link} href="#">Profile</a>
            <a className={styles.link} href="#">Log Out</a>
        </div>
    )
}
