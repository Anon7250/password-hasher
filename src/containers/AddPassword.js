import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddPassword = () => {
  return (
    <Row>
      <Col xs={3} lg={4}><Form.Control/></Col>
      <Col xs={3} lg={4}><Form.Control type="password"/></Col>
      <Col xs={3} lg={2} className="action-col"><Button variant="primary">Add</Button></Col>
      <Col xs={3} lg={2} className="action-col"></Col>
    </Row>
  );
}

export default AddPassword;
