import React from 'react';
import styles from './app.module.css';
import Header from './components/Header/Header.tsx';
import Footer from './components/Footer/Footer.tsx';
import Layout from './components/Layout/Layout.tsx';

function App(): JSX.Element{
  return (
    <div className={styles.container}>
      <Header/>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
