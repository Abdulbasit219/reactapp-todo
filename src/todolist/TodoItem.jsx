import DeleteIcon from "../assets/deleteicon.png"
import "./todo.css"

export const TodoItem = ({title}) => {
    return (
        <div className="todo-item" id="todo-1">
            <p className="todo-task-title">{title}</p>
            <img src={DeleteIcon} className="todo-icon" />
        </div>
    )
}