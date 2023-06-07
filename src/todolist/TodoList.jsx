import { useState } from "react";
import "./todo.css"
import { TodoItem } from "./TodoItem";

export const TodoList = () => {

    const [items, setItems] = useState([])

    const addtask = () => {
        const title = prompt("Enter title")
        if(title!==""){
        const task = { id: items.length + 1, title }
        const newitem = [...items, task]
        setItems(newitem)
        }
    }

    return (
        <div>
            <div className="bar">
                <h2 className="heading">Website Todo</h2>
            </div>
            <div className="todo-list">
                {items.map((item) => (
                    <TodoItem key={item.id} title={item.title}/>
                ))}
            </div>
            <button className="todo-add-btn" onClick={addtask}>
                + New Task
            </button>
        </div>
    )
}