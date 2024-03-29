import React, { useState, useEffect } from 'react';
import { Tab, Menu, Icon, Card, List, Image, Button, Modal } from "semantic-ui-react";
import { Link, NavLink } from "react-router-dom";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { axiosWithAuth } from "../utils/axiosWithAuth";

import AddExpenseForm from "./AddExpenseForm";

export default function ExpenseCard(props) {

   //keeps track of expenses
   const [expenses, setExpenses] = useState([]);

   
   const editExpense = (editedExpense) => {
       
       const expensesCopy = [...expenses];
       
       const expenseIndex = expensesCopy.findIndex(expense => expense.id === editedExpense.id);
       expensesCopy[0] = editedExpense;
       
       setExpenses (expensesCopy);
   }  
   
  //const initialExpense = expenses.find(expense => expense.id.toString() === props.match.params.id);

  {/* calculate what each person owes */}
  const splitBill = (props.total/props.numpeople).toFixed(2);

  const deleteExpense = (e, expense) => {
    e.preventDefault();
    axiosWithAuth().delete(`https://split-the-bill-postgres.herokuapp.com/api/bills/${expense.id}`)
      .then(res => {
        console.log(res);
        // filter out the expense we just deleted using its "id"
        props.setExpenses(props.expenses.filter(expense => expense.id !== props.expense.id))
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (

    /* semantic ui card component that displays each expense details */
    <Card>
      <Card.Content>
        <Card.Header> {`Bill # ${props.expenseId}`}  <Icon onClick={(e) => deleteExpense(e, props.expense)} className = "delete-icon" name='delete' /> </Card.Header>

        <Card.Description>
          {`Date: ${props.date}`}
        </Card.Description>

        <Card.Description>
          {`Bill Total: $${props.total}`}
        </Card.Description>

        <Card.Description>
          {`Number of people: ${props.numpeople}`}
        </Card.Description>   

         <Card.Description>
         <Icon name="money bill alternate" />
          {`Each of your friends owe you: $${splitBill}`}
        </Card.Description>       

      </Card.Content>

      <Card.Content extra>

        {/*MODAL THAT TRIGGERS THE ADD EXPENSE FORM */}
        <Modal trigger = {

        <Icon name="edit outline" />              
        } closeIcon>

        <Modal.Header>Edit Expense</Modal.Header>

        <AddExpenseForm {...props}  addExpense = {editExpense}  />                               

        </Modal>   
                 
        {/*<Icon name="edit outline" /> */}

        <Icon name="mail" />         
        
      </Card.Content>

    </Card>

  );
}
