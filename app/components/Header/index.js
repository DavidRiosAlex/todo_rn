import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import {Horizontal, CustomView} from '../shared/View';
import Label from '../shared/Label';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';

const Header = ({type}) => {
  const navigation = useNavigation();
  const {width} = Dimensions.get('window');

  const onPressBackButton = () => {
    navigation.goBack();
  };
  return (
    <CustomView
      justifyContent={type === 'home' ? 'space-between' : 'flex-start'}
      flex={1}
      alignItems="center"
      width="95%"
      flexDirection="row">
      <Horizontal
        justifyContent="flex-start"
        width={type === 'home' ? '25%' : '100%'}>
        {type === 'addTask' && (
          <TouchableOpacity onPress={onPressBackButton}>
            <IconIonicons name="chevron-back" size={15} />
          </TouchableOpacity>
        )}
        <Label marginLeft={type !== 'home' && '20px'} fontWeigth={'bold'}>
          {type === 'home' ? 'To-Do App' : 'Add Task'}
        </Label>
      </Horizontal>
      {type === 'home' && (
        <Horizontal
          justifyContent="space-around"
          width={width * 0.35 + 'px'}
          marginRight={width * 0.1}>
          <IconEvilIcons name="search" size={20} />
          <IconIonicons name="md-notifications-outline" size={20} />
          <IconEntypo name="menu" size={20} />
        </Horizontal>
      )}
    </CustomView>
  );
};
export default Header;
