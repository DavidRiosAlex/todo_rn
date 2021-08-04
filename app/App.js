import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Home from './components/Home/Home';
import ToDoForm from './components/ToDoForm';
import BackgroundView from './components/shared/BackgroundView';
import Header from './components/Header';
import Reducers from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  const store = createStore(Reducers);
  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <BackgroundView>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{
                // headerShown: false,
                headerTitle: props => <Header {...props} />,
                headerTintColor: '#fff',
                headerStyle: {
                  backgroundColor: 'white',
                },
              }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              //   headerTitle: 'FormToDo',
              //   headerTintColor: '#fff',
              //   headerStyle: {
              //     backgroundColor: 'white',
              //   },
              // }}
              name="FormToDo"
              component={ToDoForm}
            />
            {/* <Stack.Screen name="Form" component={View />} /> */}
          </Stack.Navigator>
        </BackgroundView>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
