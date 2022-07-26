import styles from "./TaskList.module.css";

export const TaskList = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.taskStatusContainer}>
          <p className={styles.tasksCreated}>Tarefas criadas</p>
          <p className={styles.count}>0</p>
        </div>
        <div className={styles.taskStatusContainer}>
          <p className={styles.tasksFinished}>Concluidas</p>
          <p className={styles.count}>0</p>
        </div>
      </div>
    </section>
  );
};
