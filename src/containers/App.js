import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PasswordList from '../components/PasswordList.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><PasswordList/></Col>
        </Row>
      </Container>
    );
  }
}

export default App;
