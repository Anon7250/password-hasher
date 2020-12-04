import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { dismissError } from '../actions';
import './ErrorDialog.css';

const ErrorDialog = props => {
  const sendClose = () => props.dispatch(dismissError());
  return (
    <Modal show={props.showError} onHide={sendClose} className="error-modal">
      <Modal.Header closeButton>Error Message</Modal.Header>
      <Modal.Body>
        <pre>{props.errorMsg}</pre>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={sendClose}>Dismiss</Button>
      </Modal.Footer>
    </Modal>
  )
};

ErrorDialog.propTypes = {
  showError: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string.isRequired,
}

const mapStateToProps = (state, props) => ({
  showError: state.errors.showDialog,
  errorMsg: state.errors.msg,
});

export const ErrorDialogTestable = ErrorDialog;
export default connect(mapStateToProps)(ErrorDialog);
