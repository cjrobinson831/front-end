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
        props.addExpense(status); //cals the addExpense form in Dashboard.js
    }
  }, [status]);

  return (

    <div className = "expense-form">      

        <Form>

          <div className = "form-input-div">        
            <Field className = "form-input" type="text" name="expensetitle" placeholder="What is this expense for?" />
            {touched.expensetitle && errors.expensetitle && <p>{errors.expensetitle}</p>}
          </div>

          <div className = "form-input-div">       
            <Field className = "form-input" type="number" name="total" placeholder="How much was the bill?" />
            {touched.total && errors.total && <p>{errors.total}</p>}
          </div>


          <div className = "form-input-div">       
            <Field className = "form-input" type="number" name="numfriends" placeholder="How many people (including you)?" />
            {touched.numfriends && errors.numfriends && <p>{errors.numfriends}</p>}
          </div>

          <div className = "form-input-div">        
            <Field className = "form-input" type="text" name="name" placeholder="Names of your friends" />
            {touched.name && errors.name && <p>{errors.name}</p>}
          </div>
         
          <div className = "form-input-div">        
            <Field className = "form-input" type="email" name="email" placeholder="Their Email Addresses" />
            {touched.email && errors.email && <p>{errors.email}</p>}
          </div>
                             
          <button disabled={isSubmitting}>Calculate</button>

          
        </Form>
       

    </div>
   
  );
}

//higher order function that takes LoginForm as an argument and returns a new Form:FormikLoginForm
const FormikAddExpenseForm = withFormik({

  /*mapPropsToValues is used to initialise the values of the form state. Formik transfers the results of 
    mapPropsToValues into updatable form state and makes these values available to the new component as props.values.*/
  mapPropsToValues({ expensetitle, total, numfriends, name, email }) {
    return { 
      expensetitle: expensetitle || "",
      total: total || "",
      numfriends: numfriends || "",
      name: name || "",    
      email: email || "",         
     
    };
  },

  //YUP VALIDATION: validationSchema- helps with validation inside the form
  //shape refers to the shape of the data type that we are looking for, for eg. string is required for text fields
  validationSchema: Yup.object().shape({  
    expensetitle: Yup.string()      
      .required("Expene title is required"), 
    numfriends: Yup.number()      
      .required("Total is required"), 
    numfriends: Yup.number()      
      .required("Number of friends is required"), 
    name: Yup.string()      
      .required("Name is required"), 
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required")   
    
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