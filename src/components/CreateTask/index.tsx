import { useState } from "react";
import styles from "./CreateTask.module.css";

interface CreateTaskProps {
  onSubmit: (description: string) => void;
}

export const CreateTask = ({ onSubmit }: CreateTaskProps) => {
  const [description, setDescription] = useState<string>("");

  return (
    <div className={styles.container}>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
      />
      <button
        disabled={description.length < 5}
        onClick={() => {
          onSubmit(description);
          setDescription("");
        }}
        type="submit"
        className={styles.button}
      >
        Criar
        <img src="assets/add.svg" alt="adicionar task" />
      </button>
    </div>
  );
};
