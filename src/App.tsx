import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <section className="container">
        <Header />
        <CreateTask />
        <TaskList />
      </section>
    </div>
  );
}

export default App;
