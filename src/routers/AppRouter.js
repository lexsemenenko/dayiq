import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';

import RecordDashboardPage from '../components/RecordDashboardPage';
import AddRecord from '../components/AddRecord';
import PageHelp from '../components/PageHelp';
import PageNotFound from '../components/PageNotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={RecordDashboardPage} exact />
        <Route path="/create" component={AddRecord} />
        <Route path="/help" component={PageHelp} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
