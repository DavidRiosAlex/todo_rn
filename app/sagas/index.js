import {takeLatest, call, put} from 'redux-saga/effects';
import {createTask, getTasks} from '../realm';
import {NEW_TASK, GET_TASKS, getTasksSuccess} from '../actions';

const newTaskSaveWorker = function* ({payload}) {
  try {
    yield call(createTask, payload);
  } catch (err) {
    console.log(err);
  }
};

const tasksGetWorker = function* ({payload}) {
  try {
    const task = yield call(getTasks);
    console.log(task);
    yield put(getTasksSuccess(task));
  } catch (err) {
    console.log(err);
  }
};

export default function* () {
  yield takeLatest(NEW_TASK, newTaskSaveWorker);
  yield takeLatest(GET_TASKS, tasksGetWorker);
}
