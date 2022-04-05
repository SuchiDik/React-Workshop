import React, { Component } from 'react'
import {Card,ListGroup,ListGroupItem,Link} from 'react-bootstrap'
//import Card from 'react-bootstrap/Card'  // import all

export class Product extends Component {
  render() {

    
    return (
      <div>Product
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Desktop.jpg/930px-Desktop.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Desktop</ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
   
  </Card.Body>
</Card>

      </div>
    )
  }
}

export default Product
