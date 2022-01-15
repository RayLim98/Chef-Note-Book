import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import Login from './src/screens/Login';
import TabNav from './src/components/navigations/tabNav';
import Recipe from './src/screens/Recipe';
import Introduction from './src/screens/Introduction';
import CreateRecipe from './src/screens/CreateRecipe';
import { SafeAreaView } from 'react-native-safe-area-context';

import forFade from './src/screens/utils/forFade';
import forSlide from './src/screens/utils/forSlide'
import topSlide from './src/screens/utils/topSlide';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
import customStyle from './src/screens/utils/customCardStyle';

type RootStackParamList = {
  Login: undefined;
  DashBoard: object;
  Recipe: object
  CreateRecipe: undefined
  Introduction: undefined
}

// const Stack = createStackNavigator<RootStackParamList>();
const Stack = createSharedElementStackNavigator<RootStackParamList>();

const OptionsConfig = {
  headerShown: false,
  // animationEnabled: false,
}
const transitionConfig: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 100,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true}/>
      <SafeAreaView style = {{flex: 1}}>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            transitionSpec: {
              open: transitionConfig,
              close: transitionConfig,
            },
            // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            cardStyleInterpolator: customStyle,
          }}
        >
            <Stack.Screen 
              name="Login" 
              component={Login} 
              options={ { ...OptionsConfig, title: "Login" } }
            />
            <Stack.Screen 
              name="DashBoard" 
              component={TabNav} 
              // sharedElements={(route, otherRoute, showing) => {
              //   return [
              //     {
              //       id: 'logo',
              //       animation: 'fade'
              //     }
              //   ];
              // }}
              options={ { ...OptionsConfig, title: "DashBoard" } }
            />
            <Stack.Screen 
              name="Recipe" 
              component={Recipe} 
              options={{ 
                ...OptionsConfig, 
                title: "Recipe" ,
                // cardStyleInterpolator: topSlide,
                // gestureEnabled: true,
                // gestureDirection: 'vertical-inverted'
              }}
            />
            <Stack.Screen 
              name="CreateRecipe" 
              component={CreateRecipe} 
              options={ { ...OptionsConfig, title: "CreateRecipe" } }
            />
            <Stack.Screen 
              name="Introduction" 
              component={Introduction} 
              options={ { ...OptionsConfig, title: "CreateRecipe" } }
            />
        </Stack.Navigator>
      </SafeAreaView>
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
