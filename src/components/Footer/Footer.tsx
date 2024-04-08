import React from 'react'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.tasksInfo}>
        <p>Active tasks: {0}</p>
        <p>Finished tasks: {0}</p>
      </div>
      <p className={styles.authorInfo}>
        Kanban board by Antropov Anton, 2024
      </p>
    </footer>
  )
}
