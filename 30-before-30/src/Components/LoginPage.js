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
        <label> Name: 
        <Field type="text" name="name" placeholder="Name" />
        </label>
    
        <label> Password: 
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && ( 
          <p className="error">{errors.password}</p>
        )}
        </label>

        <button>Login</button>  {/* login button to send data to the server */}
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, password }) { // make the props for the form
    return {
      name: name || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    password: Yup.string().required()
  }),

  handleSubmit(values, {setStatus}) {  // setStatus is coming from formik
    axios.post('https://reqres.in/api/users/', values)  // here is my axios call and my post so that the users can login after they press the "Login" button :)
          .then(res => { setStatus(res.data); }) 
          .catch(err => console.log(err.response));
    }
})(LoginForm);
console.log("This is the HOC", FormikLoginForm);

export default FormikLoginForm;