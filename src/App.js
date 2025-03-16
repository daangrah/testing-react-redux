import './App.css';
import {TodoApp} from "./components/TodoApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your ToDo List is here!</h1>
        <TodoApp />
      </header>
    </div>
  );
}

export default App;
