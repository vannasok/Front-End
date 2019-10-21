import React from "react";
import "./Component CSS/TodoCard.css";

const TodoCard = props => {

    return (
        <div>
            {props.task.map(task => (
                <div>
                    <p>{task.todo}</p>
                    <p>{task.time}</p>
                    <div>
                        <p>{task.detail}</p>
                    </div>
                    <button>Complete</button>
                </div>
            ))}
            
        </div>
    )
}

export default TodoCard; 