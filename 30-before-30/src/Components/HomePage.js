import React from "react";
import FormikAddTodo from "./AddTodo";

const HomePage = () => {
    return (
        <div>
            {/* <NavBar/> */}
            <div className="container">
                <div className="profile-contain">
                    {/* <ProfileBar/> */}
                </div>
                <div className="todo-contain">
                    <FormikAddTodo/>
                    {/* <TodoList/> */}
                </div>
            </div>
        </div>
    )
};

export default HomePage;