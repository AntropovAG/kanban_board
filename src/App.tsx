import React from 'react';
import styles from './app.module.css';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import Layout from './components/Layout/Layout.tsx';
import { Data } from './utils/interfaces';

function App(): JSX.Element{

const data: Data = {
  backlog: [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
    }
  ],
  ready: [
    {
      id: 4,
      title: 'Task 1',
      description: 'Description 1',
    },
    {
      id: 5,
      title: 'Task 2',
      description: 'Description 2',
    },
    {
      id: 6,
      title: 'Task 3',
      description: 'Description 3',
    }
  ],
  inProgress: [],
  finished: []
}


  return (
    <div className={styles.container}>
      <Header/>
      <Layout data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
