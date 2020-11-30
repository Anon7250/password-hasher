import React from 'react';
import PropTypes from 'prop-types';

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

import './PasswordList.css';
import VerifyPassword from './VerifyPassword.js';
import AddPassword from '../containers/AddPassword.js';

const PasswordList = props => {
  const verifyPasswords = props.content.map(item => (
    <ListGroup.Item key={item.name}>
      <VerifyPassword name={item.name} salt={item.salt} hash={item.hash} hashMethod={item.hashMethod}/>
    </ListGroup.Item>
  ));
  return (
    <ListGroup data-testid="password-list">
      <ListGroup.Item>
        <Row>
          <Col xs={3} lg={4}>Name</Col>
          <Col xs={3} lg={4}>Password</Col>
          <Col xs={6} lg={4} className="action-col">Actions</Col>
        </Row>
      </ListGroup.Item>
      <ListGroup.Item><AddPassword /></ListGroup.Item>
      {verifyPasswords}
    </ListGroup>
  );
}

PasswordList.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    hash: PropTypes.string.isRequired,
    hashMethod: PropTypes.string.isRequired,
    salt: PropTypes.string.isRequired,
  })).isRequired,
  onAddPassword: PropTypes.func,
};

export default PasswordList;
