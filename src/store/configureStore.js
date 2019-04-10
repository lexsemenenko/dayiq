import { createStore, combineReducers } from 'redux';
import tasksReducer from '../reducers/tasks';
import filtersReducer from '../reducers/filters';

// =============================================================================
// Store Creation
// =============================================================================

export default () => {
  const store = createStore(
    combineReducers({
      tasks: tasksReducer,
      filters: filtersReducer
    })
  );

  return store;
};
