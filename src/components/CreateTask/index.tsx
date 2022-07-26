import styles from "./CreateTask.module.css";

export const CreateTask = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      ></input>
      <button className={styles.button}>
        Criar
        <img src="assets/add.svg" alt="adicionar task" />
      </button>
    </div>
  );
};
