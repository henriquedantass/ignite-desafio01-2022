import { Empty } from "../Empty";
import { Task, TaskType } from "../Task";
import styles from "./TaskList.module.css";

interface TaskListProps {
  tasks: TaskType[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
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
      {tasks?.length > 0 ? (
        <>
          {tasks.map((item) => (
            <Task
              task={item}
              key={item.id}
              onDelete={(id: number) => console.log(id)}
              onDone={(id: number) => console.log(id)}
            />
          ))}
        </>
      ) : (
        <Empty />
      )}
    </section>
  );
};
