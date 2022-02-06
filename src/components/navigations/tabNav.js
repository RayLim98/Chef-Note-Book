import React from 'react'
import {
    Image,
    StyleSheet,
} from 'react-native'
import Home from '../../views/Home';
import ShopList from '../../views/ShopList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import r_b from '../../assets/recipe-book.png'
import food from '../../assets/food.png'

// interface Props {
    
// }

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return ( 
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Recipes') {
              iconName = focused
                ? food
                : food
            } else if (route.name === 'ShopList') {
              iconName = focused 
                ? r_b
                : r_b
            }

            // You can return any component that you like here!
            return <Image source = {iconName} style = {{resizeMode: 'contain', flex: 1}} />;
          },
        })}
        tabBarOptions={{
          activeBackgroundColor: '#E8E8E8',
          inactiveBackgroundColor: 'white',
          tabStyle: styles.tabContainer,
          style: styles.tabBarContainer
        }}
      >
        <Tab.Screen name = "Recipes" component = {Home}/>
        <Tab.Screen name = "ShopList" component = {ShopList}/>
      </Tab.Navigator>
    )
}

export default TabNav

const styles = StyleSheet.create({
  tabContainer: {
    borderRadius: 6,
    paddingVertical: 4,
    marginBottom: 10,
    marginHorizontal: '15%',
  },
  tabBarContainer: {
    paddingTop: 10,
    height: 80,
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