import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { connect } from 'react-redux';

function App({ counter, dispatch }) {
  const action = (type) => () => dispatch({ type });

  return (
    <div className="App">
      Clicked: {counter} times <button onClick={action('INCREMENT')}>add + 1</button>
      <button onClick={action('INCREMENT_ASYNC')}>add + 1(async)</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(App);
