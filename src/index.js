import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { createMachine } from 'redux-machine'

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


const initReducer = (state = {error:null, users: []}, action) => {
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

const inProgressReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_USERS_RESPONSE':
      return Object.assign({},state,{
        error: null,
        users: action.payload.users,
        status: 'INIT'
      })
    case 'FETCH_USERS_FAIL':
      return Object.assign({},state,{
        error: action.payload.error,
        status: 'INIT'
      })
    default: 
      return state
  }
};

const fetchUsersReducer = createMachine({
  'INIT':initReducer,
  'IN_PROGRESS':inProgressReducer
});

var store = createStore(fetchUsersReducer);