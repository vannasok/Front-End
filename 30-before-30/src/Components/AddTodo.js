import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const AddTodo = (touched, errors, status) => {
    const [task, setTask] = useState([]);

    useEffect(()=> {
        status && setTask(task => [...task, status]);
    },[status])
    
    return (
        <div className="add-todo">
            <Form>
                <Field
                    type="text"
                    name="todo"
                    placeholder="Add a Todo"
                    />
                {touched.todo && errors.todo && (
                    <p className="todoReq">{errors.todo}</p>}
                )}
                <Field
                    type="text"
                    name="time"
                    placeholder="Add a Deadline"
                    />
                {touched.time && errors.time && (
                    <p className="todoReq">{errors.time}</p>}
                )}
                <button type="submit">Add Task</button>
            </Form>
        </div>
    )
}
const FormikAddTodo = withFormik ({
    mapPropsToValues({todo, time}){
        return {
            todo = todo || "",
            time = time || ""
        };
    },

    validationSchema: Yup.object().shape({
        todo: Yup.string().required("Please add a Task"),
        time: Yup.string().required("Please add a Deadline")
    }),

    handleSubmit(values, {resetForm, setStatus}) {
        axios
            .post("CHANGE ME I GUESS", values)
            .then(res => { setStatus(res.data); })
            .catch(error => console.log("Add Todo Error", error));
        
        resetForm();
    }
})(AddTodo);
export default FormikAddTodo;