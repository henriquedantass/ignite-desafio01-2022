import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src="assets/logo.svg" alt="logo rocket" />
      <div className={styles.titleContainer}>
        <p className={styles.title}>to</p>
        <p className={styles.subtitle}>do</p>
      </div>
    </header>
  );
};
