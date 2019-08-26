import React, { useEffect, useState } from "react";
import axios from "axios";

import ExpenseCard from "./ExpenseCard.js";

export default function ExpenseDetails({expenses}) {

    
      return (
       /*RENDER USERS TO SCREEN */

       <div className= "expense-list">

            {expenses.map(expense => (

            <ExpenseCard key={expense.id} title = {expense.expensetitle} total = {expense.total} 
                         numfriends = {expense.numfriends} name = {expense.name} email = {expense.email}
            />       
   

       ))}

   </div>
      );

     


}
