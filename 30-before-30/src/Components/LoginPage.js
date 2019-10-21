import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";



const LoginForm = ({ touched, errors, status }) => {
  const [login, setLogin] = useState([])
  useEffect(() => {
    if (status) {
        setLogin([...login, status]); 
    }
}, [status]);


  return (
    <div className="login-form">
      <Form>
        <Field type="text" name="name" placeholder="Name" />
    
        <Field type="password" name="password" placeholder="Password" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <button>Login</button>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, password }) {
    return {
      name: name || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    password: Yup.string().required(),
  }),

  handleSubmit(values, {setStatus}) { 
    axios.post('https://reqres.in/api/users/', values) 
          .then(res => { setStatus(res.data); }) 
          .catch(err => console.log(err.response));
    }
})(LoginForm);
export default FormikLoginForm;
console.log("This is the HOC", FormikLoginForm);