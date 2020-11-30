import React from 'react';

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

import './PasswordList.css';
import VerifyPassword from './VerifyPassword.js';
import AddPassword from '../containers/AddPassword.js';

class PasswordList extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>
          <Row>
            <Col xs={3} lg={4}>Name</Col>
            <Col xs={3} lg={4}>Password</Col>
            <Col xs={6} lg={4} className="action-col">Actions</Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item><AddPassword /></ListGroup.Item>
        <ListGroup.Item>
          <VerifyPassword name="test123" salt="8826aa59-4133-4074-a904-c9be256be784" hash="3c1c" hashMethod="sha512;last4"/>
        </ListGroup.Item>
        <ListGroup.Item>
          <VerifyPassword name="abc000" salt="2644047a-eca9-4858-8282-048480983051" hash="a02d" hashMethod="sha512;last4"/>
        </ListGroup.Item>
        <ListGroup.Item><VerifyPassword /></ListGroup.Item>
        <ListGroup.Item><VerifyPassword /></ListGroup.Item>
      </ListGroup>
    );
  }
}

export default PasswordList;
