import React from 'react';
import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import uuid from 'uuid';

import {addPassword} from '../actions';
import {toHash} from '../lib/hasher.js';

const AddPassword = props => {
  let name;
  let password;
  const btnAction = () => {
    let salt = uuid.v4().toString();
    let hash = toHash("sha512;last4", salt, password.value);
    return props.dispatch(addPassword(name.value, salt, hash));
  }
  return (
    <Row>
      <Col xs={3} lg={4}><Form.Control ref={x => name=x}/></Col>
      <Col xs={3} lg={4}><Form.Control type="password" ref={x => password=x}/></Col>
      <Col xs={3} lg={2} className="action-col">
        <Button variant="primary" onClick={btnAction}>Add</Button>
      </Col>
      <Col xs={3} lg={2} className="action-col"></Col>
    </Row>
  );
}

export const AddPasswordTestable = AddPassword;
export default connect()(AddPassword);
