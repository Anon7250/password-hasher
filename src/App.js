import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

import './App.css';

class Item extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={5} lg={5}>Name</Col>
          <Col xs={5} lg={5}>Try Password</Col>
          <Col xs={2} lg={2}>Save</Col>
        </Row>
      </Container>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <ListGroup className="main-group">
        <ListGroup.Item><Item /></ListGroup.Item>
        <ListGroup.Item><Item /></ListGroup.Item>
        <ListGroup.Item><Item /></ListGroup.Item>
      </ListGroup>
    );
  }
}

export default App;
