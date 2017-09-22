import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createMachine } from 'redux-machine'

/**
 * this is a super naive implementation
 * that has no real state heirarchy and
 * uses the default clause on reducers 
 * to handle shared 'outer' state actions
 */




const startReducer = (state = {readout:'0', operator:''}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        status: '3.OPERAND1.ZERO'
      })
    case 'NUMBER':
      return Object.assign({},state,{
        readout: action.value,
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'MINUS':
      return Object.assign({},state,{
        status: '2.NEGATIVE.NUMBER'
      })
    case 'POINT':
      return Object.assign({},state,{
        readout: state.readout+'.',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    default:
      return outerState(state, action);
  }
}

const resultReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PLUS':
      return Object.assign({},state,{
        operator: '+',
        operand1: parseFloat(state.readout),
        status: '4.OPERATORENTERED'
      })
    case 'MINUS':
      return Object.assign({},state,{
        operator: '-',
        operand1: parseFloat(state.readout),
        status: '4.OPERATORENTERED'
      })
    case 'DIVIDE':
      return Object.assign({},state,{
        operator: '/',
        operand1: parseFloat(state.readout),
        status: '4.OPERATORENTERED'
      })
    case 'TIMES':
      return Object.assign({},state,{
        operator: '*',
        operand1: parseFloat(state.readout),
        status: '4.OPERATORENTERED'
      })   
    default:
      return outerState(state, action);
  }
}

const negativeNumberReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '3.OPERAND1.ZERO'
      })
    case 'NUMBER':
      return Object.assign({},state,{
        readout: action.value,
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'CANCEL_ENTRY':
      return Object.assign({},state,{
        status: 'INIT'
      })   
    default:
      return outerState(state, action);
  }
}

const negativeNumberReducer2 = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: '0',
        status: '6.OPERAND2.ZERO'
      })
    case 'NUMBER':
      return Object.assign({},state,{
        readout: action.value,
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'CANCEL_ENTRY':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })  
    default:
      return outerState(state, action);
  }
}




const zeroEnteredReducer = (state = {}, action) => {
  switch (action.type) {
    case 'NUMBER':
      return Object.assign({},state,{
        readout: action.value,
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        readout: state.readout+'.',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    default:
      return operand1Reducer(state, action);
  }
}

const beforeDecimalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: state.readout+'0',
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'NUMBER':
      return Object.assign({},state,{
        readout: state.readout+action.value,
        status: '3.OPERAND1.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        readout: state.readout+'.',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    default:
      return operand1Reducer(state, action);
  }
}

const afterDecimalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: state.readout+'0',
        status: '3.OPERAND1.AFTERDECIMAL'
      })
    case 'NUMBER':
      return Object.assign({},state,{
        readout: state.readout+action.value,
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
        operator: '+',
        status: '4.OPERATORENTERED'
      })
    case 'MINUS':
      return Object.assign({},state,{
        operator: '-',
        status: '4.OPERATORENTERED'
      })
    case 'DIVIDE':
      return Object.assign({},state,{
        operator: '/',
        status: '4.OPERATORENTERED'
      })
    case 'TIMES':
      return Object.assign({},state,{
        operator: '*',
        status: '4.OPERATORENTERED'
      })   
    case 'CANCEL_ENTRY':
      return Object.assign({},state,{
        status: 'INIT'
      })      
    default:
      return outerState(state, action);
  }
}



const operatorEnteredReducer = (state = {}, action) => {
  switch (action.type) {
    case 'PLUS':
      return Object.assign({},state,{
        operator: '+',
        status: '4.OPERATORENTERED'
      })
    case 'DIVIDE':
      return Object.assign({},state,{
        operator: '/',
        status: '4.OPERATORENTERED'
      })
    case 'TIMES':
      return Object.assign({},state,{
        operator: 'x',
        status: '4.OPERATORENTERED'
      })
    case 'MINUS':
      return Object.assign({},state,{
        operator: '-',
        status: '5.NEGATIVE_NUMBER'
      })   
    case 'ZERO':
      return Object.assign({},state,{
        operand1: parseFloat(state.readout),
        readout: '0',
        status: '6.OPERAND2.ZERO'
      })
    case 'NUMBER':
      return Object.assign({},state,{
        operand1: parseFloat(state.readout),
        readout: action.value,
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        operand1: parseFloat(state.readout),
        readout: '0.',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    default:
      return outerState(state, action);
  }
}



const zeroEnteredReducer2 = (state = {}, action) => {
  switch (action.type) {
    case 'NUMBER':
      return Object.assign({},state,{
        readout: state.readout+action.value,
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        readout: state.readout+'.',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    default:
      return operand2Reducer(state, action);
  }
}

const beforeDecimalReducer2 = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: state.readout+'0',
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'NUMBER':
      return Object.assign({},state,{
        readout: state.readout+action.value,
        status: '6.OPERAND2.BEFOREDECIMAL'
      })
    case 'POINT':
      return Object.assign({},state,{
        readout: state.readout+'.',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    default:
      return operand2Reducer(state, action);
  }
}

const afterDecimalReducer2 = (state = {}, action) => {
  switch (action.type) {
    case 'ZERO':
      return Object.assign({},state,{
        readout: state.readout+'0',
        status: '6.OPERAND2.AFTERDECIMAL'
      })
    case 'NUMBER':
      return Object.assign({},state,{
        readout: state.readout+action.value,
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
        operand2:parseFloat(state.readout),
        readout: operators[state.operator](state.operand1, parseFloat(state.readout)),
        operator: '+',
        status: '4.OPERATORENTERED'
      })
    case 'MINUS':
      return Object.assign({},state,{
        operand2:parseFloat(state.readout),
        readout: operators[state.operator](state.operand1, parseFloat(state.readout)),
        operator: '-',
        status: '4.OPERATORENTERED'
      })
    case 'DIVIDE':
      return Object.assign({},state,{
        operand2:parseFloat(state.readout),
        readout: operators[state.operator](state.operand1, parseFloat(state.readout)),
        operator: '/',
        status: '4.OPERATORENTERED'
      })
    case 'TIMES':
      return Object.assign({},state,{
        operand2:parseFloat(state.readout),
        readout: operators[state.operator](state.operand1, parseFloat(state.readout)),
        operator: '*',
        status: '4.OPERATORENTERED'
      })   
    case 'CANCEL_ENTRY':
      return Object.assign({},state,{
        status: '4.OPERATORENTERED'
      })   
    case 'EQUALS':
      return Object.assign({},state,{
        readout: operators[state.operator](state.operand1, parseFloat(state.readout)),
        status: '8.RESULT'
      })     
    default:
      return outerState(state, action);
  }
}

const outerState = (state={}, action) => {
  switch (action.type) {
    case 'CANCEL':
      return Object.assign({},state,{
        readout: '0',
        status: 'INIT'
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
    type:'ZERO',
    value: 0
  })
};

const number = (i) => {
  store.dispatch({
    type: 'NUMBER',
    value: i+'' // cast to string
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

// some maths
// eg
// var key = '+';
// var c = operators[key](3, 5);
var operators = {
  '+': function(a, b){ return a+b},
  '-': function(a, b){ return a-b},
  '*': function(a, b){ return a*b},
  '/': function(a, b){ return a/b}
}


const render = () => {
  ReactDOM.render(
    <div>
      <div style={{border: "1px solid black"}}>
        {store.getState().readout}
        <span style={{float:"right",background:"grey"}}>{"| "+store.getState().operator+" |"}</span>  
      </div><br />
      <button onClick={()=>number(1)}>1</button>
      <button onClick={()=>number(2)}>2</button>
      <button onClick={()=>number(3)}>3</button><br />
      <button onClick={()=>number(4)}>4</button>
      <button onClick={()=>number(5)}>5</button>
      <button onClick={()=>number(6)}>6</button><br />
      <button onClick={()=>number(7)}>7</button>
      <button onClick={()=>number(8)}>8</button>
      <button onClick={()=>number(9)}>9</button><br />
      <button onClick={zero}>0</button>
      <button onClick={point}>.</button>
      <button onClick={times}>*</button><br />
      <button onClick={divide}>/</button>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button><br />
      <button onClick={equals}>=</button>
      <button onClick={cancel}>C</button>
      <button onClick={cancelEntry}>CE</button>
      <button onClick={percent}>%</button>
    </div>, 
    document.getElementById('root')
  );
  console.log('the store is', store.getState());  
}



store.subscribe(render)

render();

