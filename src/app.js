import './css/main.less';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
