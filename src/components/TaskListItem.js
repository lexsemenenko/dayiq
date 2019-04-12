import React from 'react';
import { connect } from 'react-redux';
import { removeTask } from '../actions/tasks';

const ExpenseListItem = ({ dispatch, id, description, time, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>
      {time}, {createdAt}
    </p>
    <button
      type="button"
      onClick={() => {
        dispatch(removeTask({ id }));
      }}
    >
      Remove
    </button>
  </div>
);
export default connect()(ExpenseListItem);
