import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";



const SignupForm = ({ touched, errors, status }) => {
  const [signup, setSignup] = useState([])
  useEffect(() => {
    if (status) {
        setSignup([...signup, status]); 
    }
}, [status]);


  return (
    <div className="signup-form">
      <Form>
        <label> Name: 
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && ( 
          <p className="error">{errors.name}</p>
        )}
        </label>
    
        <label> Password: 
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && ( 
          <p className="error">{errors.password}</p>
        )}
        </label>

        <button>Create Account</button>  {/* signup button to send data to the server */}
      </Form>
    </div>
  );
};

const FormikSignupForm = withFormik({
  mapPropsToValues({ name, password }) { // make the props for the form
    return {
      name: name || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    password: Yup.string().required()
  }),

  handleSubmit(values, {setStatus}) {  // setStatus is coming from formik
    axios.post('https://reqres.in/api/users/', values)  // here is my axios call and my post so that the users can signup after they press the "Create Account" button :)
          .then(res => { setStatus(res.data); }) 
          .catch(err => console.log(err.response));
    }
})(SignupForm);
console.log("This is the HOC", FormikSignupForm);

export default FormikSignupForm;