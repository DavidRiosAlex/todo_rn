import React from 'react';
import {Dimensions, ScrollView} from 'react-native';
import {CustomView} from '../shared/View';
import {ButtonAdd} from '../shared/Button';
import {InputIcon} from '../shared/Input';
import Label from '../shared/Label';

const ToDoForm = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <CustomView
      flex={1}
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      width={`${width}px`}>
      <ScrollView>
        <CustomView
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center">
          <InputIcon src="clockcircleo" iconSource="AntDesign" />
          <InputIcon src="clockcircleo" iconSource="AntDesign" />
        </CustomView>
        <CustomView
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center">
          <InputIcon src="clockcircleo" iconSource="AntDesign" />
          <InputIcon src="clockcircleo" iconSource="AntDesign" />
        </CustomView>
        <CustomView
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center">
          <InputIcon src="clockcircleo" iconSource="AntDesign" />
          <InputIcon src="clockcircleo" iconSource="AntDesign" />
        </CustomView>

        <ButtonAdd>
          <Label fontColor="white">Save</Label>
        </ButtonAdd>
      </ScrollView>
    </CustomView>
  );
};

export default ToDoForm;
