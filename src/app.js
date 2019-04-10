import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './css/main.less';

import configureStore from './store/configureStore';
import { addTask } from './actions/tasks';
import { setTextFilter } from './actions/filters';
import getVisibleTasks from './selectors/tasks';

const store = configureStore();

store.dispatch(addTask({ description: 'Do Projects' }));
store.dispatch(addTask({ description: 'Do Study' }));
store.dispatch(setTextFilter('study'));

const state = store.getState();
const visibleTasks = getVisibleTasks(state.tasks, state.filters);
console.log(visibleTasks);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
