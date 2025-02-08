import Navigation from '../../components/Navigation';

import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <h1 className={styles.heading}>Welcome to My Portfolio</h1>
      
    </div>
  );
}