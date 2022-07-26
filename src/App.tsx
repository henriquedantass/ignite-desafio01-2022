import { useState } from "react";
import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { TaskType } from "./components/Task";
import { TaskList } from "./components/TaskList";
import "./styles/global.css";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  return (
    <div className="App">
      <section className="container">
        <Header />
        <CreateTask />
        <TaskList tasks={tasks} />
      </section>
    </div>
  );
}

export default App;
