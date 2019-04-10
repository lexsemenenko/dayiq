import uuid from 'uuid';

// =============================================================================
// Actions: Tasks
// =============================================================================

export const addTask = ({
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

export const removeTask = ({ id } = {}) => ({
  type: 'REMOVE_TASK',
  id
});

export const editTask = (id, updates) => ({
  type: 'EDIT_TASK',
  id,
  updates
});
