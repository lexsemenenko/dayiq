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
// =============================================================================

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
// =============================================================================
const removeTask = ({ id } = {}) => ({
  type: 'REMOVE_TASK',
  id
});

// EDIT_TASK
// =============================================================================
const editTask = (id, updates) => ({
  type: 'EDIT_TASK',
  id,
  updates
});

// SET_TEXT_FILTER
// =============================================================================
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
// =============================================================================
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_TIME
// =============================================================================
const sortByTime = () => ({
  type: 'SORT_BY_TIME'
});

// SET_START_DATE
// =============================================================================
const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
// =============================================================================
const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});

// Reducer: Tasks
// =============================================================================

const tasksReducerDefaultState = [];
const tasksReducer = (state = tasksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, action.task];
    case 'REMOVE_TASK':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TASK':
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            ...action.updates
          };
        }
        return task;
      });
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
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_TIME':
      return {
        ...state,
        sortBy: 'time'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get Visible Tasks
// =============================================================================

const getVisibleTasks = (tasks, { text, sortBy, startDate, endDate }) => {
  return tasks.filter(task => {
    const startDateMatch =
      typeof startDate !== 'number' || task.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== 'number' || task.createdAt <= endDate;
    const textMatch = task.description
      .toLowerCase()
      .includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
};

// Store Creation
// =============================================================================

const store = createStore(
  combineReducers({
    tasks: tasksReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleTasks = getVisibleTasks(state.tasks, state.filters);
  console.log(visibleTasks);
  // console.log(store.getState().filters, 'filters');
  // console.log(store.getState().tasks, 'tasks');
});

// =============================================================================
// Dispatching
// =============================================================================

// Dispatch: Tasks
// =============================================================================

const taskOne = store.dispatch(
  addTask({
    description: 'Task one description high priority',
    time: 1000,
    createdAt: 1000
  })
);
const taskTwo = store.dispatch(
  addTask({ description: 'Task two description', time: 2000, createdAt: -1000 })
);
// store.dispatch(removeTask({ id: taskOne.task.id }));
// store.dispatch(editTask(taskTwo.task.id, { time: 5000 }));

// Dispatch: Filters
// =============================================================================

store.dispatch(setTextFilter('high'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByTime());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

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
