import React from "react";
import moment from "moment";
import "./ComponentCSS/TodoCard.css";

const TodoCard = props => {
let today = moment().format();
let dayDue = moment(props.time).format();
let time = moment(dayDue).to(today);
//Should work when we get date from axios

    return (
        <div>
            {props.task.map(task => (
                <div>
                    <p>{task.todo}</p>
                    <p>Duedate: {task.time}</p>
                    
                    <p>{time}</p>
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