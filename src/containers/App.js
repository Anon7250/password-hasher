import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PasswordList from '../components/PasswordList.js';
import './App.css';

const staticContent = [
  {name: 'test123', salt: '8826aa59-4133-4074-a904-c9be256be784', hash: '3c1c', hashMethod: 'sha512;last4'},
  {name: 'abc000' , salt: '2644047a-eca9-4858-8282-048480983051', hash: 'a02d', hashMethod: 'sha512;last4'},
];

const App = props => {
  return (
    <Container>
      <Row>
        <Col>
          <PasswordList content={props.content}/>
        </Col>
      </Row>
    </Container>
  );
}

App.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    salt: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    hashMethod: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

const mapStateToProps = (state, props) => ({
  content: [...state.passwordList, ...staticContent],
})

export default connect(mapStateToProps)(App);
