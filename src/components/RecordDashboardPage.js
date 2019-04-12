import React from 'react';
import TaskList from './TaskList';
import TaskListFilters from './TaskListFilters';

const RecordDashboardPage = () => {
  return (
    <div>
      <TaskListFilters />
      <TaskList />
    </div>
  );
};

export default RecordDashboardPage;
