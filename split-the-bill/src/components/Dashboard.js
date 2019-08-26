import {Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { Container, Segment, Header, Card, Button, Icon, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import "../styling/App.css";

export default function Dashboard (props) {

    return (

        <div className = "dashboard-container">
    
            <div className = "navbar">

                    <h1>SplitProof</h1>                      
    
            </div>

            <header>
                    <h1>Dashboard</h1>
    
                    <button> Add An Expense </button>        
    
            </header>
    
            <div className = "bills-list-div">
    
                <Modal
                trigger={
                    <Button id='add' icon >
                    <Icon name='add circle' />
                    </Button>
                } closeIcon>
    
                <Modal.Header>Add a Bill</Modal.Header>
    
                
               
                </Modal>
    
              
    
    
                
            </div>
    
        </div>
    
        );
    
    






}

