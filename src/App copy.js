import React, { useState } from 'react';
import './Todo.css';
import alltodos from './todos.js';
import AddTodo from './todo/add';
import TodoList from './todo/list';
import CompleteTodo from './todo/complete';
import Child from "./Child";

const App = () => {

  const [todos, setTodos] = useState(alltodos);
  const [completeTodos, setCompleteTodos] = useState([]);

  console.log(todos);
  const handleClick = () => {
    console.log('Button Clicked');
  }

  const deleteTodo = (id) => {
    console.log(id);
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }
  const changeTodoStatus = (data) => {
    console.log(data);
    const newTodos = todos.map((todo) => {
      if(todo.id === data.id){
        todo.completed = data.status;
      }
      return todo;
    }
    );
    setTodos(newTodos);
  }

  const AddTodo = (todoText) => {
    console.log(todoText);
    const data = {
      id: todos.length + 1,
      title: todoText,
      completed: false
    }
    const newTodos = [...todos, data];
    setTodos(newTodos);
  }

  return(
    <div className="container">
		<h2>TODO LIST</h2>
		
    {/* <AddTodo getNewTodo={(data)=>AddTodo(data)}/> */}

		<TodoList todos={todos} 
      getDeleteTodoId={(id)=>deleteTodo(id)} 
      getChangeStatus={(data)=>changeTodoStatus(data)}
    />
    <CompleteTodo todos={todos} 
      getDeleteTodoId={(id)=>deleteTodo(id)} 
      getChangeStatus={(data)=>changeTodoStatus(data)}
    />

		
	</div>
  ) 
}

export default App;
