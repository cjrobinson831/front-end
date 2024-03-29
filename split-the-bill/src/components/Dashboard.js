import {Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Container, Segment, Header, Card, Button, Icon, Modal, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
//import "../styling/App.css";
import { axiosWithAuth } from '../utils/axiosWithAuth';

import AddExpenseForm from "./AddExpenseForm";
import ExpenseDetails from "./ExpenseDetails.js";

export default function Dashboard (props) {
    const [user, setUser] = useState({});
    //keeps track of expenses
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        // get user details and set them to state "user"
        axiosWithAuth().get(`https://split-the-bill-postgres.herokuapp.com/api/users/${localStorage.getItem('userId')}`)
            .then(res => {
                console.log(res);
                setUser(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        // then get all bills for the user and set them to state "expenses"
        axiosWithAuth().get(`https://split-the-bill-postgres.herokuapp.com/api/users/${localStorage.getItem('userId')}/bills`)
            .then(res => {
                console.log(res);
                setExpenses(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    // console.log(user);

    
    

    //adds an expense to the expenses array when the calculate button on the add expense form is clicked
    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);
    }

    
    const editExpense = (editedExpense) => {
        
        const expensesCopy = [...expenses];
        
        const expenseIndex = expensesCopy.findIndex(expense => expense.id === editedExpense.id);
        expensesCopy[0] = editedExpense;
        
        setExpenses (expensesCopy);
    }  
    
    //const initialExpense = expenses.find(expense => expense.id.toString() === props.match.params.id);


    // fire on logout button, clears token and pushes user back to login page
    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        props.history.push('/');
    }


    return (

        /*main container for the dashboard elements */
        <div className = "dashboard-container">

            {/* logo and log out button */}
            <div className = "navbar">

                    <h1>SplitProof</h1>  

                    <button onClick={logout}> Log Out </button>                       
    
            </div>

            {/* dashboard*/}
            <div className = "dashboard-div">

                {/* dashboard*/}
                <div className = "dashboard-header-div">
                        <h1>Welcome {user.firstname} </h1>
        
                    {  
                    expenses.length > 0 ?
                    <Modal trigger = {

                        <Button>Add Expense</Button>               
                        } closeIcon>

                        <Modal.Header>Add Expense</Modal.Header>

                        <AddExpenseForm addExpense = {addExpense}/>                                     
           
                    </Modal>
                    :
                    null 
                    }
        
                </div>
                
                {/* DISPLAYS THE OWED AND OWES RUNNING TOTALS */}
                <ul className="totals-summary-div">
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
                   
                    {
                        expenses.length > 0 ? 
                        <ExpenseDetails setExpenses={setExpenses} expenses = {expenses} /> 
                        : 
                        <Modal trigger = {

                            <Button>Add Expense To Start Splitting</Button>               
                            } closeIcon>
    
                            <Modal.Header>Add an Expense</Modal.Header>
    
                            <AddExpenseForm addExpense = {addExpense}/>                                     
               
                        </Modal>
                    }                    
                    
                </div>  {/*end bills-list-div */}

            </div> {/*end dashboard div */}
        
        </div> /*end container div */
    
    );//end return

}//end function

