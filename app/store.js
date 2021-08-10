import {combineReducers, applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import tasks from './reducers';
import SagasWorkers from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  tasks,
});

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(SagasWorkers);

export default store;
