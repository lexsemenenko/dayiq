// =============================================================================
// Get Visible Tasks
// =============================================================================

export default (tasks, { text, sortBy, startDate, endDate }) => {
  return tasks
    .filter(task => {
      const startDateMatch =
        typeof startDate !== 'number' || task.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || task.createdAt <= endDate;
      const textMatch = task.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === 'time') {
        return a.time < b.time ? 1 : -1;
      }
    });
};
