export const NEW_TASK = 'NEW_TASK';
export const GET_TASKS = 'GET_TASKS';
export const GET_TASKS_SUCCESS = 'GET_TASKS_SUCCESS';

export const newTask = task => ({
  type: NEW_TASK,
  payload: task,
});

export const getTasks = () => ({
  type: GET_TASKS,
  payload: {},
});

export const getTasksSuccess = data => ({
  type: GET_TASKS_SUCCESS,
  payload: data,
});
