const TodoList = ({todos, getDeleteTodoId, getChangeStatus, getEditTodoId}) => {
    const deleteItem = (id) => {
        getDeleteTodoId(id);
    }
    const changeStatus = (status, id) => {
        const statusData = {
            status: status,
            id: id
        }
        getChangeStatus(statusData);
    }

    const editItem = (id) => {
        getEditTodoId(id);
    }
    
    return (
        <div>
            <h3>Todo</h3>
            <ul id="incomplete-tasks">
                {
                todos.map((todo) => (
                    !todo.completed &&
                    <li key={todo.id}>
                        <input type="checkbox" defaultChecked={todo.completed} onChange={()=>changeStatus(!todo.completed, todo.id)}/>
                        <label>{todo.title}</label>
                        <input type="text"/>
                        <button className="edit" onClick={()=>editItem(todo.id)}>Edit</button>
                        <button className="delete" onClick={()=>deleteItem(todo.id)}>Delete</button>
                        </li>
                    ))
                }
               
            </ul>
        </div>
    )
    }
    export default TodoList;