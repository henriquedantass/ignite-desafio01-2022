import { CreateTask } from "./components/CreateTask";
import { Header } from "./components/Header";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <section className="container">
        <Header />
        <CreateTask />
      </section>
    </div>
  );
}

export default App;
