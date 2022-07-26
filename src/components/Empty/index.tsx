import styles from "./Empty.module.css";

export const Empty = () => {
  return (
    <div className={styles.container}>
      <img className={styles.documentIcon} src="assets/document.svg" />
      <strong className={styles.description}>
        Você ainda não tem tarefas cadastradas
      </strong>
      <p className={styles.description}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
};
