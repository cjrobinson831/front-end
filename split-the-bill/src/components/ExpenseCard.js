import React from "react";
import { Tab, Menu, Icon, Card, List, Image, Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

export default function ExpenseCard(props) {

  {/* calculate what each person owes */}
  const splitBill = (props.total/props.numpeople).toFixed(2);

  return (

    /* semantic ui card component that displays each expense details */
    <Card>
      <Card.Content>
        <Card.Header> {`Bill # ${props.total}`}  <Icon className = "delete-icon" name='delete' /> </Card.Header>

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
          {`Each of your friends owe you: ${splitBill}`}
        </Card.Description>       

      </Card.Content>

      <Card.Content extra>
        
          <Icon name="edit outline" /> 
          <Icon name="mail" />         
         
          
          
        
      </Card.Content>

    </Card>

  );
}
