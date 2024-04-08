import React from 'react'
import styles from './header.module.css'
import LoginButton from '../LoginButton/LoginButton.tsx'

export default function Header(): JSX.Element {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>Awesome Kanban Board</h1>
            <LoginButton />
        </header>
    )
}
