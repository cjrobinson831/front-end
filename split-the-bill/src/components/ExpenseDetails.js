import React, { useEffect, useState } from "react";
import axios from "axios";

import ExpenseCard from "./ExpenseCard.js";

export default function ExpenseDetails({expenses, setExpenses}) {

    
      return (
       /*RENDER USERS TO SCREEN */

       <div className= "expense-list">

            {expenses.map((expense, index) => (

            /*<ExpenseCard key={expense.id} title = {expense.expensetitle} total = {expense.total} 
                         numfriends = {expense.numfriends} name = {expense.name} email = {expense.email}
            />  */
            
            <ExpenseCard expenses={expenses} setExpenses={setExpenses} expense={expense} key={index} expenseId={expense.id} date = {expense.created_at} total = {expense.split_sum} numpeople = {expense.split_people_count}  />    
   

       ))}

   </div>
      );

     


}
