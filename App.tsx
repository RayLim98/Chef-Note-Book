import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import Login from './src/screens/Login';
import TabNav from './src/components/navigations/tabNav';
import Recipe from './src/screens/Recipe';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';


type RootStackParamList = {
  Login: undefined;
  DashBoard: undefined;
  Recipe: object
  CreateRecipe: undefined
}

// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createSharedElementStackNavigator<RootStackParamList>();

const OptionsConfig = {
  headerShown: false,
  // animationEnabled: false,
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
              component={TabNav} 
              sharedElements={(route, otherRoute, showing) => {
                return [
                  {
                    id: 'logo',
                    animation: 'fade'
                  }
                ];
              }}
              options={ { ...OptionsConfig, title: "DashBoard" } }
            />
            <Stack.Screen 
              name="Recipe" 
              component={Recipe} 
              options={ { ...OptionsConfig, title: "Recipe" } }
            />
            <Stack.Screen 
              name="CreateRecipe" 
              component={Recipe} 
              options={ { ...OptionsConfig, title: "CreateRecipe" } }
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: 6,
    marginHorizontal: 50,
    marginBottom: 6,
    alignSelf: 'center'
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  tabBarContainer: {
    height: 70,
    borderRadius:1,
    backgroundColor: 'white',
    shadowColor: "white",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0,
    // shadowRadius: 0,

    // elevation: 0,
  }
});

export default App;
