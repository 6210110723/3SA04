import React from 'react';
import { Dimensions, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IonicIcon from 'react-native-vector-icons/Ionicons';

import Eastern from './screen/Eastern'
import Western from './screen/Western'
import Southern from './screen/Southern'
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

function EasternStackScreen( ) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Eastern" component={Eastern} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator>
  );
}

function WesternStackScreen( ) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Western" component={Western} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator>
  );
}

function SouthernStackScreen( ) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Southern" component={Southern} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator>
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
          if( route.name === 'Eastern' || route.name === 'Western' || route.name === 'Southern' ) {
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
        <Tab.Screen name="Eastern" component={EasternStackScreen} />
        <Tab.Screen name="Western" component={WesternStackScreen} />
        <Tab.Screen name="Southern" component={SouthernStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

