import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createMachine } from 'redux-machine'

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


const startReducer = (state = {readout:'0'}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '3.OPERAND1.ZERO'
      })
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'MINUS':
      return Object.assign({},state,{
        status: '2.NEGATIVE.NUMBER'
      })
    default:
      return state;
  }
}

const resultReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return Object.assign({},state,{
        error: null,
        status: 'IN_PROGRESS'
      })
    default:
      return state;
  }
}

const negativeNumberReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '3.OPERAND1.ZERO'
      })
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    default:
      return state;
  }
}

const negativeNumberReducer2 = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '6.OPERAND2.ZERO'
      })
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    default:
      return state;
  }
}

const zeroEnteredReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    default:
      return state;
  }
}

const beforeDecimalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    default:
      return state;
  }
}

const afterDecimalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    default:
      return operand1Reducer(state, action);
  }
}

const operand1Reducer = (state = {}, action) => {
  switch (action.type) {
    case 'PLUS':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })
    case 'MINUS':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })
    case 'DIVIDE':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })
    case 'TIMES':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })   
    case 'CANCEL_ENTRY':
      return Object.assign({},state,{
        status: 'INIT'
      })      
    default:
      return state;
  }
}

const operatorEnteredReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PLUS':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })
    case 'DIVIDE':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })
    case 'TIMES':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })
    case 'MINUS':
      return Object.assign({},state,{
        status: '5.NEGATIVE_NUMBER'
      })   
      case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '6.OPERAND2'
      })
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '6.OPERAND2'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '6.OPERAND2'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '6.OPERAND2'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '6.OPERAND2'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '6.OPERAND2'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '6.OPERAND2'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '6.OPERAND2'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '6.OPERAND2'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '6.OPERAND2'
      })
    default:
      return state;
  }
}


const zeroEnteredReducer2 = (state = {}, action) => {
  switch (action.type) {
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    default:
      return state;
  }
}

const beforeDecimalReducer2 = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    default:
      return state;
  }
}

const afterDecimalReducer2 = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'ONE':
      return Object.assign({},state,{
        readout: '1',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'TWO':
      return Object.assign({},state,{
        readout: '2',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'THREE':
      return Object.assign({},state,{
        readout: '3',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'FOUR':
      return Object.assign({},state,{
        readout: '4',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'FIVE':
      return Object.assign({},state,{
        readout: '5',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'SIX':
      return Object.assign({},state,{
        readout: '6',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'SEVEN':
      return Object.assign({},state,{
        readout: '7',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'EIGHT':
      return Object.assign({},state,{
        readout: '8',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'NINE':
      return Object.assign({},state,{
        readout: '9',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    default:
      return operand2Reducer(state, action);
  }
}


const operand2Reducer = (state = {}, action) => {
  switch (action.type) {
    case 'PLUS':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })
    case 'MINUS':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })
    case 'DIVIDE':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })
    case 'TIMES':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })   
    case 'CANCEL_ENTRY':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })   
    case 'EQUALS':
      return Object.assign({},state,{
        status: '8.RESULT'
      })     
    default:
      return state;
  }
}

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return Object.assign({},state,{
        error: null,
        status: 'IN_PROGRESS'
      })
    default:
      return state;
  }
}

const calculatorReducer = createMachine({
  'INIT':startReducer,
  '8.RESULT':resultReducer,
  '2.NEGATIVE.NUMBER':negativeNumberReducer,
  '3.OPERAND1.ZERO':zeroEnteredReducer,
  '3.OPERAND1.BEFOREDECIMAL':beforeDecimalReducer,
  '3.OPERAND1.AFTERDECIMAL': afterDecimalReducer,
  '4.OPERATORENTERED':operatorEnteredReducer,
  '5.NEGATIVE_NUMBER':negativeNumberReducer2,
  '6.OPERAND2.ZERO':zeroEnteredReducer2,
  '6.OPERAND2.BEFOREDECIMAL':beforeDecimalReducer2,
  '6.OPERAND2.AFTERDECIMAL':afterDecimalReducer2,
  '7.ALERT':alertReducer
});

var store = createStore(calculatorReducer);


// digit button actions
const zero = () => {
  store.dispatch({
    type:'ZERO'
  })
};

const one = () => {
  store.dispatch({
    type: 'ONE'
  })
}

const two = () => {
  store.dispatch({
    type: 'TWO'
  })
}

const three = () => {
  store.dispatch({
    type: 'THREE'
  })
}

const four = () => {
  store.dispatch({
    type: 'FOUR'
  })
}

const five = () => {
  store.dispatch({
    type: 'FIVE'
  })
}

const six = () => {
  store.dispatch({
    type: 'SIX'
  })
}

const seven = () => {
  store.dispatch({
    type: 'SEVEN'
  })
}

const eight = () => {
  store.dispatch({
    type: 'EIGHT'
  })
}

const nine = () => {
  store.dispatch({
    type: 'NINE'
  })
}

// operation button actions
const plus = () => {
  store.dispatch({
    type: 'PLUS'
  })
}
const minus = () => {
  store.dispatch({
    type: 'MINUS'
  })
}
const times = () => {
  store.dispatch({
    type: 'TIMES'
  })
}
const divide = () => {
  store.dispatch({
    type: 'DIVIDE'
  })
}

const equals = () => {
  store.dispatch({
    type: 'EQUALS'
  })
}

const point = () => {
  store.dispatch({
    type: 'POINT'
  })
}

// special buttons
const percent = () => {
  store.dispatch({
    type: 'PERCENT'
  })
}
const cancel = () => {
  store.dispatch({
    type: 'CANCEL'
  })
}
const cancelEntry = () => {
  store.dispatch({
    type: 'CANCEL_ENTRY'
  })
}


store.subscribe(()=>{
  console.log('the store is', store.getState());
})

zero();
three();
point();
six();
plus();