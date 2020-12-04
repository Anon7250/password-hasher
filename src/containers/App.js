import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ErrorDialog from './ErrorDialog.js';
import PasswordList from '../components/PasswordList.js';
import './App.css';

const App = props => {
  return (
    <Container>
      <Row>
        <Col>
          <PasswordList content={props.content}/>
        </Col>
      </Row>
      <ErrorDialog />
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
  content: state.passwordList,
})

export default connect(mapStateToProps)(App);
