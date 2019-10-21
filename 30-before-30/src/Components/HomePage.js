import React from "react";
import { AddTodo } from "./AddTodo";

const HomePage = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="profile-contain">
                    <ProfileBar/>
                </div>
                <div className="todo-contain">
                    <AddTodo/>
                    <TodoList/>
                </div>
            </div>
        </div>
    )
};

export default HomePage;