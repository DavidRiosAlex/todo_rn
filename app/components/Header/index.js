import React from 'react';
import {Horizontal, SpaceBtwAlignCenter} from '../shared/View';
import Label from '../shared/Label';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

const Header = ({...name}) => {
  return (
    <SpaceBtwAlignCenter>
      <Horizontal justifyContent="flex-start" width="50%">
        <Label>To-Do App</Label>
      </Horizontal>
      <Horizontal justifyContent="space-around" width="50%">
        <IconEvilIcons name="search" size={20} />
        <IconIonicons name="md-notifications-outline" size={20} />
        <IconEntypo name="menu" size={20} />
      </Horizontal>
    </SpaceBtwAlignCenter>
  );
};
export default Header;
