import {Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Container, Segment, Header, Card, Button, Icon, Modal, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import "../styling/App.css";

export default function Dashboard (props) {

    return (

        <div className = "dashboard-container">
    
            <div className = "navbar">

                    <h1>SplitProof</h1>  

                     <button> Log Out </button>                       
    
            </div>

            <div className = "dashboard-div">

                <div className = "dashboard-header-div">
                        <h1>Welcome "User" </h1>
        
                        <button> Add An Expense </button>        
        
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
        
                    
        
                    
                </div>

            </div> {/*end dashboard div */}
        
        </div> /*end container div */
    
        );
    
    






}

