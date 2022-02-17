import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['ingles', 'exercicios React Trybe', 'pagamentos', 'ajudar filha'];
const jsxTasks = tasks.map((task) => Task(task));


function App() {
  return (
    <div className="App">
      {/* <ol>{Task('Primeira atividade')}</ol> */}
      <ol>
        {jsxTasks}
      </ol>
    
    </div>
  );
}

export default App;
