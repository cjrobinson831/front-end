import React from "react";
import { Tab, Menu, Icon, Card, List, Image } from "semantic-ui-react";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 

export default function ExpenseCard(props) {

  const splitBill = props.total/props.numfriends;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>
          {`Bill Total: ${props.total}`}
        </Card.Description>

        <Card.Description>
          {`Number of friends: ${props.numfriends}`}
        </Card.Description>

        <Card.Description>
          {`Name: ${props.name}`}
        </Card.Description>

        <Card.Description>
          {`Email: ${props.email}`}          
        </Card.Description>
        
      </Card.Content>
      <Card.Content extra>
        
          <Icon name="dollar sign" />
          {`Each of your friends owe you: ${splitBill}`}
        
      </Card.Content>
    </Card>

  );
}
