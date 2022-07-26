import styles from "./Task.module.css";

export interface TaskType {
  id: number;
  description: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}

export const Task = ({ task, onDelete, onDone }: TaskProps) => {
  return (
    <div className={styles.container}>
      <input
        onClick={() => onDone(task.id)}
        checked={task.isCompleted}
        className={styles.checkbox}
        type="checkbox"
      />
      <p className={task.isCompleted ? styles.done : styles.description}>
        {task.description}
      </p>
      <img
        onClick={() => onDelete(task.id)}
        src="assets/trash.svg"
        alt="icone de lixeira"
      />
    </div>
  );
};
