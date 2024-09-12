import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Basic = () => 
{ const navigate =useNavigate()
  return  (
  <div>
    <h1>IMARC LOGIN</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required!";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required!";
        } else if (values.password.length <= 6) {
          errors.password = "password must have 7 characters";
        }
        return errors;
      }}
      onSubmit={() => {
        setTimeout(()=>{
            alert('you have logged in successfully');
        },0)
          
        navigate('/graphform')

      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Email Address:</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            {errors.email && touched.email && errors.email}
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            {errors.password && touched.password && errors.password}
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  </div>
)};

export default Basic;
