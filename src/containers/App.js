import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PasswordList from '../components/PasswordList.js';
import './App.css';

const content = [
  {name: 'test123', salt: '8826aa59-4133-4074-a904-c9be256be784', hash: '3c1c', hashMethod: 'sha512;last4'},
  {name: 'abc000' , salt: '2644047a-eca9-4858-8282-048480983051', hash: 'a02d', hashMethod: 'sha512;last4'},
];

const App = props => {
  return (
    <Container>
      <Row>
        <Col>
          <PasswordList content={content}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
