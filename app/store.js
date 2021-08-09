import {combineReducers} from 'redux';
import tasks from './reducers';

const reducers = combineReducers({
  tasks,
});

export default reducers;
