import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from './actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = props => {
  return (
    <div>
      <CounterOutput value={props.ctr} />
      <CounterControl label="Increment" clicked={props.onIncrementCounter} />
      <CounterControl label="Decrement" clicked={props.onDecrementCounter} />
      <CounterControl label="Add 5" clicked={props.onAddCounter} />
      <CounterControl label="Subtract 5" clicked={props.onSubstractCounter} />
      <hr />
      <button onClick={props.onStoreResult}>Store Result</button>
      <ul>
        {props.storedResults.map(strResult => {
          return (<li key={strResult.id} onClick={() => props.onDeleteResult(strResult.id)}>{strResult.value}</li>)
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.IN }),
    onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
    onAddCounter: () => dispatch({ type: 'ADD', value: 5 }),
    onSubstractCounter: () => dispatch({ type: 'SUBSTRACT', value: 5 }),
    onStoreResult: () => dispatch({ type: 'STORE_RESULT' }),
    onDeleteResult: (id) => dispatch({ type: 'DELETE_RESULT', value: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
