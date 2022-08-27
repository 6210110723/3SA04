import React from 'react';
import { Dimensions, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcon from 'react-native-vector-icons/Ionicons';

import Western from './screen/Western'
import WeatherScreen from './screen/WeatherScreen'

const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        headerTitle: () => <Text>Header</Text>,
        tabBarIcon: ({focused, color, size, padding}) => {
          let iconName;
          if( route.name === 'Western' ) {
            iconName = focused ? 'earth' : 'earth-outline'
          } 

          return (
            <IonicIcon 
              name={iconName} 
              size={size} 
              color={color} 
              style={{paddingBottom: padding}} 
            />
          );
        },
      })}
      >
        <Tab.Screen name="Western" component={WesternStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

