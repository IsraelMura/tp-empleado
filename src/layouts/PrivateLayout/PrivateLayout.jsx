"use client";
import { Outlet } from 'react-router-dom';
import styles from './PrivateLayout.module.css';
import { Navbar } from '../../components';

const PrivateLayout = () => {
  return (
    <div className={ styles.privatelayout }>
      <header className={styles.header}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className={ styles.footer }>
        Israel @ 2024
      </footer>
    </div>
  );
};

export default PrivateLayout;
