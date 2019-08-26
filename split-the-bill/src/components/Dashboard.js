import {Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Container, Segment, Header, Card, Button, Icon, Modal, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import "../styling/App.css";

import AddExpenseForm from "./AddExpenseForm";
import ExpenseDetails from "./ExpenseDetails.js";

export default function Dashboard (props) {

    //keeps track of expenses
    const [expenses, setExpenses] = useState([]);

    //adds an expense to the expenses array when the calculate button on the add expense form is clicked
    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    }

   

    return (

        /*main container for the dashboard elements */
        <div className = "dashboard-container">

            {/* logo and log out button */}
            <div className = "navbar">

                    <h1>SplitProof</h1>  

                    <button> Log Out </button>                       
    
            </div>

            {/* dashboard*/}
            <div className = "dashboard-div">

                {/* dashboard*/}
                <div className = "dashboard-header-div">
                        <h1>Hi "User's First Name" </h1>
        
                    {/*MODAL THAT TRIGGERS THE ADD EXPENSE FORM */}
                    <Modal trigger = {

                        <Button>Add Expense</Button>               
                        } closeIcon>

                        <Modal.Header>Add an Expense</Modal.Header>

                        <AddExpenseForm  addExpense = {addExpense}/>                                     
           
                    </Modal>
     
        
                </div>
                
                {/* DISPLAYS THE OWED AND OWES RUNNING TOTALS */}
                <ul className="totals-header">
                    <li>                    
                        You Need to Pay Your Friends <br/>
                        <p className = "owesTotal">$0.00</p> {/* update the totals here */}
                        
                    </li>

                    <li>                    
                        Your Friends Owe You
                        <p className = "owedTotal">$0.00</p> {/* update the totals here */}

                    </li>
                </ul>
                
                {/* LIST OF BILLS HISTORY */}
                <div className = "bills-list-div">  
                   
                     
                    <div> Add an Expense to start Splitting!!</div>                       
                    
                    <ExpenseDetails expenses = {expenses} />   
                       
        
                    
                </div>  {/*end bills-list-div */}

            </div> {/*end dashboard div */}
        
        </div> /*end container div */
    
    );//end return

}//end function

