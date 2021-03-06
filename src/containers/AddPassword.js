import React from 'react';
import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import uuid from 'uuid';

import {addPassword, showError} from '../actions';
import {toHash} from '../lib/hasher.js';
import {updatePassword} from '../store';

const AddPassword = props => {
  let name;
  let password;
  const btnAction = () => {
    let hashMethod = "sha512;last4"
    let salt = uuid.v4().toString();
    let hash = toHash(hashMethod, salt, password.value);
    let allPasswords = props.allPasswords || [];
    if (allPasswords.some(x => x.name === name.value)) {
      return props.dispatch(showError(
        `There is already a password named "${name.value}". Please use a different name.`
      ));
    }
    updatePassword({name: name.value, salt: salt, hash: hash, hashMethod: hashMethod})
    props.dispatch(addPassword(name.value, salt, hash));
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

const mapStateToProps = (state, props) => ({
  allPasswords: state.passwordList.list,
});

export const AddPasswordTestable = AddPassword;
export default connect(mapStateToProps)(AddPassword);
