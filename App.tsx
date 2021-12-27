import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
// import Routes from './src/routes';
import DashBoard from './src/screens/DashBoard';
import Login from './src/screens/Login';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


export type RootStackParamList = {
  Login: undefined;
  DashBoard: undefined;
}

// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createSharedElementStackNavigator<RootStackParamList>();

const OptionsConfig = {
  headerShown: false,
  animationEnabled: false,
}

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen 
              name="Login" 
              component={Login} 
              options={ { ...OptionsConfig, title: "Login" } }
            />
            <Stack.Screen 
              name="DashBoard" 
              component={DashBoard} 
              options={ { ...OptionsConfig, title: "Login" } }
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
