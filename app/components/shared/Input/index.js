import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {CustomView} from '../View';
import styled from 'styled-components';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Label from '../Label';

export const InputText = styled.TextInput`
  font-size: 14px;
  border-radius: 3px;
  flex: 1;
  color: black;
`;

// export const InputField = styled.Input`
//   font-size: 14px;
// `;

export const InputIcon = ({src, iconSource, label, ...props}) => {
  const {width} = Dimensions.get('window');

  return (
    <CustomView flex={1}>
      <Label fontWeigth="bold">{label}</Label>
      <CustomView
        flexDirection="row"
        backgroundColor="#EEEEEE"
        alignItems="center"
        justifyContent="space-between"
        // width={`${width * 0.35}px`}
        flex={1}
        marginBottom={`${width * 0.01}px`}
        marginLeft={`${width * 0.01}`}
        marginTop={`${width * 0.01}`}
        marginRight={`${width * 0.01}`}
        borderRadius={`${Math.floor(width * 0.02)}px`}
        flexWrap="wrap"
        paddingLeft="15px">
        <InputText {...props} />
        <IconAntDesign name={src} size={15} />
      </CustomView>
    </CustomView>
  );
};
