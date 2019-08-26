import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

import ExpenseDetails from "./ExpenseDetails.js";

function AddExpenseForm(props) {  

   const { values, errors, touched, isSubmitting, status } = props;

  //used to display the form data on the screen  
  useEffect(() => {
    if (status) {//status is a default prop on Formik
        props.addExpense(status);
    }
  }, [status]);

  return (

    <div className = "user-form">

      <h1> SIGN UP </h1>

        <Form>

          <div className = "form-input-div">        
            <Field className = "form-input" type="text" name="expensetitle" placeholder="What is this expense for?" />
            {touched.expensetitle && errors.expensetitle && <p>{errors.expensetitle}</p>}
          </div>
         
          <div className = "form-input-div">        
            <Field className = "form-input" type="email" name="email" placeholder="Email" />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>

          <div className = "form-input-div">       
            <Field className = "form-input" type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>

                    
          <button disabled={isSubmitting}>Sign Up</button>

          <div >
            <label>
              Already have an account? <Link to = "/"> Log In Here </Link> 
                           
            </label>
          </div>

        </Form>

       

    </div>

   
  );
}

//higher order function that takes LoginForm as an argument and returns a new Form:FormikLoginForm
const FormikAddExpenseForm = withFormik({

  /*mapPropsToValues is used to initialise the values of the form state. Formik transfers the results of 
    mapPropsToValues into updatable form state and makes these values available to the new component as props.values.*/
  mapPropsToValues({ expensetitlename, email, password }) {
    return { 
      expensetitlename: expensetitlename || "",    
      email: email || "",
      password: password || ""     
     
    };
  },

  //YUP VALIDATION: validationSchema- helps with validation inside the form
  //shape refers to the shape of the data type that we are looking for, for eg. string is required for text fields
  validationSchema: Yup.object().shape({  
    name: Yup.string()
      .min(2, "Your name must be 2 characters or longer")
      .required("Name is required"), 
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be 5 characters or longer")
      .required("Password is required")
    
  }),

  //formik handles all side effects so we dont need to use useEffect
  handleSubmit(values, { resetForm, setErrors, setStatus, setSubmitting }) {
    axios
        /*we're using reqres.in for this assignment's API. It's a free API that allows us to simulate a POST request 
        for any data that we send it */
    .post("https://reqres.in/api/users", values)
    .then(res => {
        console.log("add expense", res); // Data was created successfully and logs to console

        //setStatus handles data coming back from the server- setting status gives you a way to communicate with your component
        //used to manage our local state inside our component
        setStatus(res.data);
        resetForm();
        setSubmitting(false);
    })
    .catch(err => {
        console.log(err.response); // There was an error creating the data and logs to console
        setSubmitting(false);
    });     

  }

})(AddExpenseForm); //end FormikAddExpenseForm

export default FormikAddExpenseForm;