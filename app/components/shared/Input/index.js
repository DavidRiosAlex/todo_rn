import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {CustomView} from '../View';
import styled from 'styled-components';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

export const InputText = styled.TextInput`
  font-size: 14px;
  border-radius: 3px;
`;

// export const InputField = styled.Input`
//   font-size: 14px;
// `;

export const InputIcon = ({src, iconSource, ...props}) => {
  const {width} = Dimensions.get('window');

  return (
    <CustomView
      flexDirection="row"
      backgroundColor="grey"
      alignItems="center"
      justifyContent="space-between"
      width={`${width * 0.35}px`}
      marginBottom={`${width * 0.01}`}
      marginLeft={`${width * 0.01}`}
      marginTop={`${width * 0.01}`}
      marginRight={`${width * 0.01}`}
      borderRadius={`${Math.floor(width * 0.02)}px`}
      flexWrap="wrap"
      paddingLeft="100px">
      <InputText {...props} />
      <IconAntDesign name={src} size={15} />
    </CustomView>
  );
};
