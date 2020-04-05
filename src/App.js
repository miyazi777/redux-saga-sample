import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { connect } from 'react-redux';

function App({ counter, dispatch }) {
  const action = (type, value) => () => dispatch({ type, value });

  return (
    <div className="App">
      Clicked: {counter} times <button onClick={action('INCREMENT', 1)}>add + 1</button>
      <button onClick={action('INCREMENT', 3)}>add + 3</button>
      <button onClick={action('INCREMENT_ASYNC', 1)}>add + 1(async)</button>
      <button onClick={action('INCREMENT_ASYNC', 3)}>add + 3(async)</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(App);
