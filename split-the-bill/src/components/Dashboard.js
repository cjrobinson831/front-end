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

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    }


    return (

        <div className = "dashboard-container">
    
            <div className = "navbar">

                    <h1>SplitProof</h1>  

                    <button> Log Out </button>                       
    
            </div>

            <div className = "dashboard-div">

                <div className = "dashboard-header-div">
                        <h1>Welcome "User" </h1>
        
                    {/*MODAL THAT TRIGGERS THE ADD EXPENSE FORM */}
                    <Modal trigger = {

                        <Button>Add Expense</Button>               
                        } closeIcon>

                        <Modal.Header>Add an Expense</Modal.Header>

                        <AddExpenseForm  addExpense = {addExpense}/>     

                                
           
                    </Modal>
     
        
                </div>

                <ul className="totals-header">
                    <li>                    
                        You Need to Pay Your Friends
                    </li>

                    <li>                    
                        Your Friends Owe You
                    </li>
                </ul>
                
                <div className = "bills-list-div">  

                    <ExpenseDetails expenses = {expenses} />                      
        
                    
                </div>  {/*end bills-list-div */}

            </div> {/*end dashboard div */}
        
        </div> /*end container div */
    
    );//end return

}//end function

