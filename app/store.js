import {combineReducers} from 'redux';
import ToDo from './reducers';

console.log(ToDo);
const reducers = combineReducers({
  ToDo,
});

export default reducers;
