/* eslint-disable react/jsx-key */
import { useState } from 'react'
import Todo from './components/todo';
import "./App.css"
import TodoForm from './components/todoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade",
      category: "Trabalho",
      isComplete: false
    },
    {
      id: 2,
      text: "Ir para academia",
      category: "Pessoal",
      isComplete: false
    },
    {
      id: 3,
      text: "Estudar Ingles",
      category: "Estudos",
      isComplete: false
    }
  ]);
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => ( 
          <Todo todo={todo}/>
        ))}
      </div>
      <TodoForm/>
    </div>
  )
}

export default App
