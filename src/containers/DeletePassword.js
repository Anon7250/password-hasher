import React from 'react';
import {connect} from 'react-redux';

import Button from 'react-bootstrap/Button';

import {rmPassword} from '../actions';

const DeletePassword = props => {
  const btnAction = () => {
    return props.dispatch(rmPassword(props.name));
  }
  return (
    <Button variant="danger" onClick={btnAction}>Delete</Button>
  );
}

export const DeletePasswordTestable = DeletePassword;
export default connect()(DeletePassword);
