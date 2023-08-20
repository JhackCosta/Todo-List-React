/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import "./App.css"
 
import Todo from './components/todo';
import TodoForm from './components/todoForm';
import Search from './components/search';
import Filter from './components/Filter';


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

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodo = [...todos,{
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isComplete: false
    }]
    
    setTodos(newTodo)
  }
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isComplete = !todo.isComplete : todo);
    setTodos(newTodos);

  }
  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch}></Search>
      <Filter filter={filter} setFilter={setFilter} setSort = {setSort} />
      <div className='todo-list'>
        {todos
          .filter((todo) => 
            filter === "All"
              ? true 
              : filter === "Complete" 
              ? todo.isComplete 
              : !todo.isComplete
          )
          .filter((todo)=>
          todo.text.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sort === "Asc") {
              return a.text.localeCompare(b.text);
            } else {
              return b.text.localeCompare(a.text);
            }
          })
          .map((todo) => ( 
          <Todo key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo = {addTodo}/>
    </div>
  )
}


export default App
