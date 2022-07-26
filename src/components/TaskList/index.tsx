import { useEffect, useState } from "react";
import { Empty } from "../Empty";
import { Task, TaskType } from "../Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: TaskType[];
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
}

export const TaskList = ({ tasks, onDelete, onDone }: TaskListProps) => {
  const [doneTasks, setDoneTasks] = useState<string>("");

  const handleFormatedTasksDone = () => {
    const doneTasks = tasks.filter((item) => item.isCompleted === true);

    setDoneTasks(`${doneTasks.length} de ${tasks.length}`);
  };

  useEffect(() => {
    handleFormatedTasksDone();
  }, [tasks]);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <div className={styles.taskStatusContainer}>
          <p className={styles.tasksCreated}>Tarefas criadas</p>
          <p className={styles.count}>{tasks.length}</p>
        </div>
        <div className={styles.taskStatusContainer}>
          <p className={styles.tasksFinished}>Concluidas</p>
          <p className={styles.count}>{doneTasks}</p>
        </div>
      </div>
      <section className={styles.tasksList}>
        {tasks?.length > 0 ? (
          <>
            {tasks.map((item) => (
              <Task
                task={item}
                key={item.id}
                onDelete={(id: number) => onDelete(id)}
                onDone={(id: number) => onDone(id)}
              />
            ))}
          </>
        ) : (
          <Empty />
        )}
      </section>
    </section>
  );
};
