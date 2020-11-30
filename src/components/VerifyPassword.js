import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const VerifyPassword = props => {
  const [hasChecked, setHasChecked] = React.useState(false);
  const btnTxt = hasChecked ? "More.." : "Check";
  const btnAction = () => setHasChecked(true);
  const editAction = txt => setHasChecked(false);
  const keyAction = event => event.key === "Enter" && btnAction();
  return (
    <Row>
      <Col xs={3} lg={4}>{props.name}</Col>
      <Col xs={3} lg={4}><InputGroup>
        <Form.Control 
          data-testid="verify-password:input"
          type="password" 
          isInvalid={true} 
          onChange={editAction} 
          onKeyPress={keyAction}/>
        <Form.Control.Feedback type="invalid">
          Testing
        </Form.Control.Feedback>
      </InputGroup></Col>
      <Col xs={3} lg={2} className="action-col">
        <Button variant="primary" onClick={btnAction}>{btnTxt}</Button>
      </Col>
      <Col xs={3} lg={2} className="action-col">
        <Button variant="danger">Delete</Button>
      </Col>
    </Row>
  );
}

VerifyPassword.propTypes = {
  name: PropTypes.string.isRequired,
  salt: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
  hashMethod: PropTypes.string.isRequired,
}

export default VerifyPassword;
