import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import TodoCard from "./TodoCard";

const AddTodo = ({touched, errors, status}) => {
    const [task, setTask] = useState([]);

    useEffect(()=> {
        status && setTask(task => [...task, status]);
        console.log(task);
    },[status])
    
    return (
        <div className="add-todo">
            <Form>
                <Field
                    type="text"
                    name="todo"
                    placeholder="Add a BucketList Item"
                    />
                {touched.todo && errors.todo && (
                    <p className="todoReq">{errors.todo}</p>
                )}
                <Field
                    type="date"
                    name="time"
                    placeholder="Add a Deadline"
                    />
                {touched.time && errors.time && (
                    <p className="todoReq">{errors.time}</p>
                )}
                <Field
                    component="textarea"
                    type="text"
                    name="detail"
                    placeholder="Add a Link"
                    />
                <button type="submit">Add Task</button>
            </Form>
            <TodoCard task={task}/>
        </div>
    )
}
const FormikAddTodo = withFormik ({
    mapPropsToValues({todo, time, detail}){
        return {
            todo: todo || "",
            time: time || "",
            detail: detail || ""
        };
    },

    validationSchema: Yup.object().shape({
        todo: Yup.string().required("Please add a Task"),
        time: Yup.string().required("Please add a Deadline")
    }),

    handleSubmit(values, {resetForm, setStatus}) {
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => { setStatus(res.data); })
            .catch(error => console.log("Add Todo Error", error));
        
        resetForm();
    }
})(AddTodo);

export default FormikAddTodo;