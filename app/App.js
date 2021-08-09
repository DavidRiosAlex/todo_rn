import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ErrorBoundary from 'react-native-error-boundary';
import Home from './components/Home/Home';
import ToDoForm from './components/ToDoForm';
import BackgroundView from './components/shared/BackgroundView';
import Header from './components/Header';
import Reducers from './store';
import ErrorBoundaryComponent from './components/ErrorBoundary';

const Stack = createNativeStackNavigator();

const App = () => {
  const schema = useColorScheme();
  const MyTheme = {
    // ...(schema === 'dark' ? DarkTheme : DefaultTheme),
    dark: true,
    colors: {
      primary: 'white',
      background: 'white',
      card: 'white',
      text: 'white',
      border: 'white',
      notification: 'white',
    },
  };
  const store = createStore(Reducers);
  return (
    <Provider store={store}>
      <StatusBar
        animated={true}
        backgroundColor="white"
        barStyle="dark-content"
      />
      <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
        <NavigationContainer theme={MyTheme}>
          <BackgroundView>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen
                options={{
                  headerTitle: props => <Header type="home" {...props} />,
                  headerBackVisible: false,
                }}
                name="Home"
                component={Home}
              />
              <Stack.Screen
                options={{
                  headerTitle: props => <Header type="addTask" {...props} />,
                  headerBackVisible: false,
                }}
                name="addTask"
                component={ToDoForm}
              />
            </Stack.Navigator>
          </BackgroundView>
        </NavigationContainer>
      </ErrorBoundary>
    </Provider>
  );
};

export default App;
