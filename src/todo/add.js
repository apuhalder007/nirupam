import { useState } from "react";

const AddTodo = ({getNewTodo}) => {
    const [todoText, setTodoText] = useState();
    const handleTodoFrm = (e) => {
        e.preventDefault();
        getNewTodo(todoText);
        setTodoText('')
    }
    return (
        <div>
            <h3>Add Item</h3>
            <form id="add-todo" onSubmit={handleTodoFrm}>
                <p>
                    <input id="new-task" type="text" value={todoText}
                     onChange={(e)=>setTodoText(e.target.value)}/>
                    <button type="submit">Add</button>
                </p>
            </form>
	    </div>
    )
}

export default AddTodo;