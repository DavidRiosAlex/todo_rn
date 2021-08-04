import React from 'react';
import {Dimensions} from 'react-native';
import {Vertical, CustomView} from '../shared/View';
import {ButtonAdd} from '../shared/Button';
import Label from '../shared/Label';

const Home = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const handleFormClick = () => {
    console.log('to form to do')
    navigation.navigate('FormToDo');
  };
  return (
    <Vertical flex={1}>
      <CustomView flex={1}>
        <Label>hola</Label>
        <Label>hola</Label>
        <Label>hola</Label>
        <Label>hola</Label>
        <Label>hola</Label>
        <Label>hola</Label>
      </CustomView>
      <CustomView marginBottom={height * 0.05}>
        <ButtonAdd
          width={width * 0.9}
          justifyContent="center"
          alignItems="flex-end"
          flexDirection="column"
          height={height - height * 0.1}
          labelColor="white"
          flex={1}
          onPress={handleFormClick}>
          <Label fontSize={14} fontColor="white">
            Add a task
          </Label>
        </ButtonAdd>
      </CustomView>
    </Vertical>
  );
};

export default Home;
