import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './TaskListItem';
import selectedTasks from '../selectors/tasks';

const TaskList = props => (
  <div>
    <h2>Task List</h2>
    {props.tasks.map(task => {
      return <ExpenseListItem key={task.id} {...task} />;
    })}
  </div>
);
const mapStateToProps = state => {
  // Instead of simply returning the task store, we return filtered one
  return {
    tasks: selectedTasks(state.tasks, state.filters)
  };
};
export default connect(mapStateToProps)(TaskList);
