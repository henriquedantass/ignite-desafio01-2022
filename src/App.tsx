import { useEffect, useId, useState } from "react";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { TaskType } from "./components/Task";
import { TaskList } from "./components/TaskList";
import { api } from "./services/api";
import "./styles/global.css";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleDoneTask = (id: number) => {
    const selectedTask = tasks.find((task) => task.id === id);

    const formattedTask = {
      id: id,
      description: selectedTask?.description,
      isCompleted: !selectedTask?.isCompleted,
    };

    api
      .put(`/tasks/${id}`, formattedTask)
      .then(() => {
        const indexOfEditedTask = tasks.findIndex((item) => item.id === id);

        const statusOfTask = tasks[indexOfEditedTask].isCompleted;

        setTasks((oldState) => {
          if (indexOfEditedTask !== -1) {
            oldState[indexOfEditedTask].isCompleted = !statusOfTask;
          }

          return [...oldState];
        });
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteTask = (id: number) => {
    api
      .delete(`tasks/${id}`)
      .then(() => {
        const filteredArray = tasks.filter((item) => item.id !== id);

        setTasks(filteredArray);
      })
      .catch((error) => console.log(error));
  };

  const handleCreateTask = (description: string) => {
    const formattedTaks = {
      id: Math.random(),
      description: description,
      isCompleted: false,
    };

    api
      .post("/tasks", formattedTaks)
      .then(() => {
        setTasks((oldState) => [...oldState, formattedTaks]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    api
      .get("/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <section className="container">
        <Header />
        <CreateTask onSubmit={(description) => handleCreateTask(description)} />
        <TaskList
          onDone={(id) => handleDoneTask(id)}
          onDelete={(id) => handleDeleteTask(id)}
          tasks={tasks}
        />
      </section>
    </div>
  );
}

export default App;
