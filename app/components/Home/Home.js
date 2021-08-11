import React, {useEffect} from 'react';
import {Dimensions, FlatList} from 'react-native';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import ObjectId from 'bson-objectid';
import {Vertical, CustomView} from '../shared/View';
import {ButtonAdd} from '../shared/Button';
import Label from '../shared/Label';
import {getTasks} from '../../actions';

const Item = ({index, item, ...props}) => {
  const {width, height} = Dimensions.get('window');
  console.log(item.title);
  return (
    <CustomView
      key={index}
      flexDirection="row"
      justifyContent="space-between"
      width={width * 0.8 + 'px'}
      height={height * 0.08 + 'px'}
      flex={1}>
      <Label key={item.title}>{item.title}</Label>
      <Label key={item.startTime}>
        {moment(item.startTime).format('YYYY/MM/DD HH:mm ')}
      </Label>
      {/* <Label>{moment(item.endTime).format('YYYY MM dd HH:mm ')}</Label> */}
    </CustomView>
  );
};

const Home = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const dispatch = useDispatch();
  const tasks = useSelector(storage => storage.tasks.items);
  const handleFormClick = () => {
    navigation.navigate('addTask');
  };
  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  return (
    <Vertical flex={1}>
      <CustomView flex={1}>
        <FlatList
          data={tasks}
          renderItem={Item}
          flex={1}
          keyExtractor={() => ObjectId()}
          paddingTop={20}
        />
      </CustomView>
      <CustomView marginBottom={`${height * 0.05}px`}>
        <ButtonAdd
          width={width * 0.9}
          justifyContent="center"
          alignItems="flex-end"
          flexDirection="column"
          height={`${height - height * 0.1}px`}
          labelColor="white"
          flex={1}
          onPress={handleFormClick}>
          <Label fontSize={14} fontColor="white" fontWeigth="bold">
            Add a task
          </Label>
        </ButtonAdd>
      </CustomView>
    </Vertical>
  );
};

export default Home;
