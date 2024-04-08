import React from 'react';
import styles from './layout.module.css';
import Backlog from '../Backlog/Backlog.tsx';

export default function Layout() {
  return (
    <main className={styles.container}>
      <Backlog />
      <Backlog />
      <Backlog />
      <Backlog />
    </main>
  )
}
