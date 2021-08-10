import Realm from 'realm';

const Task = {
  schemaVersion: 1,
  name: 'Task',
  properties: {
    title: 'string',
    deadline: 'string',
    startTime: 'string',
    endTime: 'string',
    remind: 'string',
    repeat: 'string',
  },
};

const Cat = {
  name: 'Cat',
  properties: {
    _id: 'objectId',
    name: 'string',
    age: 'int',
    type: 'string',
  },
};

const initDB = () => {
  const connection = Realm.open({
    path: 'myrealm',
    schema: [Task],
  });
  return connection;
};

export const createTask = async data => {
  const realm = await initDB();
  realm.write(() => realm.create('Task', data));
};

export const getTasks = async data => {
  const realm = await initDB();
  const tasks = realm.objects('Task');
  return tasks;
};
