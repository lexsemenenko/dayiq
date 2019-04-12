import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import './css/main.less';

import configureStore from './store/configureStore';
import { addTask } from './actions/tasks';
import { setTextFilter } from './actions/filters';
import getVisibleTasks from './selectors/tasks';

const store = configureStore();

store.dispatch(addTask({ description: 'Do Projects', time: 2555 }));
store.dispatch(addTask({ description: 'Do Study', time: 6000 }));
store.dispatch(setTextFilter('do'));

const state = store.getState();
const visibleTasks = getVisibleTasks(state.tasks, state.filters);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
