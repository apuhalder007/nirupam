import {useEffect, useState} from 'react'
const EditTodo = ({todo, getUpdateTodo}) => {
    const [editTodoText, setEditTodoText] = useState(todo[0].title);
    useEffect(() => {
        setEditTodoText(todo[0].title);
    }, [todo])
    
    const handleTodoFrm = (e) => {
        e.preventDefault();
        const data = {
            id: todo[0].id,
            title: editTodoText,
            completed: todo[0].completed
        }
        getUpdateTodo(data);
    }
    return (
        <div>
            <h3>Edit Item</h3>
            <form id="add-todo" onSubmit={handleTodoFrm}>
                <p>
                    <input id="new-task" type="text" value={editTodoText}
                     onChange={(e)=>setEditTodoText(e.target.value)}/>
                    <button type="submit">Update</button>
                </p>
            </form>
	    </div>
    )
}

export default EditTodo