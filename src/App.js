import React, { useState } from 'react';
import './Todo.css';
import alltodos from './todos.js';
import AddTodo from './todo/add';
import TodoList from './todo/list';
import CompleteTodo from './todo/complete';
import EditTodo from './todo/edit';

const App = () => {

  const [todos, setTodos] = useState(alltodos);
  const [editTodo, setEditTodo] = useState({});
  const [editing, setEditing] = useState(false);

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

  const AddNewTodo = (todoText) => {
    console.log(todoText);
    const data = {
      id: todos.length + 1,
      title: todoText,
      completed: false
    }
    const newTodos = [...todos, data];
    setTodos(newTodos);
  }

  const editTodoItem = (id) => {
    console.log(id);
    const editItem = todos.filter((todo) => todo.id === id);

    console.log(editItem, "editItem");
    setEditTodo(editItem)
    setEditing(true);
  }

  const updateTodoItem = (data) => {
    console.log(data);
    const newTodos = todos.map((todo) => {
      if(todo.id === data.id){
        todo.title = data.title;
      }
      return todo;
    }
    );
    setTodos(newTodos);
    setEditing(false);
  }


  return(
    <div className="container">
		<h2>TODO LIST</h2>
		{editing ? (
      <EditTodo todo={editTodo} getUpdateTodo={(data)=>updateTodoItem(data)}/>
    ) : (
      <AddTodo getNewTodo={(data)=>AddNewTodo(data)}/>
    )}
    

		<TodoList todos={todos} 
      getDeleteTodoId={(id)=>deleteTodo(id)} 
      getChangeStatus={(data)=>changeTodoStatus(data)}
      getEditTodoId={(id)=>editTodoItem(id)}
    />
    <CompleteTodo todos={todos} 
      getDeleteTodoId={(id)=>deleteTodo(id)} 
      getChangeStatus={(data)=>changeTodoStatus(data)}
    />

		
	</div>
  ) 
}

export default App;
