import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ButtonAdd} from '../shared/Button';

const ErrorBoundaryComponent = ({error, resetError}) => {
  console.log(error);
  return (
    <View>
      <Text>Ha ocurrido un error, por favor re abra la aplicación</Text>
      <ButtonAdd onPress={resetError}>
        <Text>Home</Text>
      </ButtonAdd>
    </View>
  );
};

export default ErrorBoundaryComponent;
