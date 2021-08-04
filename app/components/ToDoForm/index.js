import React from 'react';
import {Dimensions} from 'react-native';
import {Vertical, CustomView} from '../shared/View';
import {ButtonAdd} from '../shared/Button';
import Label from '../shared/Label';

const ToDoForm = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  return <Vertical flex={1} />;
};

export default ToDoForm;
