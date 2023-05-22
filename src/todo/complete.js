const CompleteTodo = ({ todos,  getDeleteTodoId, getChangeStatus}) => {
    const deleteItem = (id) => {
        console.log(id);
        getDeleteTodoId(id);
    }

    const changeStatus = (status, id) => {
        const statusData = {
            status: status,
            id: id
        }
        getChangeStatus(statusData);
    }
    return (
        <div>
            <h3>Completed</h3>
            <ul id="completed-tasks">
                {
                    todos.map((todo) => (
                        todo.completed &&
                        <li key={todo.id}>
                            <input type="checkbox" defaultChecked={todo.completed} onChange={()=>changeStatus(!todo.completed, todo.id)} />
                            <label>{todo.title}</label>
                            <input type="text" />
                            <button className="edit">Edit</button>
                            <button className="delete" onClick={()=>deleteItem(todo.id)}>Delete</button>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    )
}

export default CompleteTodo;