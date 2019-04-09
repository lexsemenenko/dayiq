import './css/main.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import AppRouter from './routers/AppRouter';

// =============================================================================
// Actions
// =============================================================================

// ADD_TASK
const addTask = ({
  description = '',
  note = '',
  time = '',
  createdAt = 0
} = {}) => ({
  type: 'ADD_TASK',
  task: {
    id: uuid(),
    description,
    note,
    time,
    createdAt
  }
});

// REMOVE_TASK
const removeTask = ({ id } = {}) => ({
  type: 'REMOVE_TASK',
  id
});

// EDIT_TASK
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_TIME
// SET_START_DATE
// SET_END_DATE

// =============================================================================
// Break application to multiple Reducers
// =============================================================================

// Reducer: Tasks
// =============================================================================

const tasksReducerDefaultState = [];
const tasksReducer = (state = tasksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'REMOVE_TASK':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
};
// Reducer: Filter
// =============================================================================

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store Creation
// =============================================================================
// tasks: tasksReducer task reducer seting up to be managed by tasksReducer
//
const store = createStore(
  combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState().tasks);
});

const taskOne = store.dispatch(
  addTask({ description: 'Task one description', time: '1000' })
);
const taskTwo = store.dispatch(
  addTask({ description: 'Task two description', time: '2000' })
);

console.log(taskOne.task.id);

store.dispatch(removeTask({ id: taskOne.task.id }));

const demoState = {
  tasks: [
    {
      id: 'jfgsglkkjhakgh',
      description: 'This task has high priority for home',
      note: 'This is a longer note for this task',
      time: 3600000,
      createdAt: 0,
      priority: 'rocket'
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'time',
    startDate: undefined,
    endDate: undefined
  }
};

ReactDOM.render(<AppRouter />, document.getElementById('app'));
