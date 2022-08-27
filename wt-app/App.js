import React from 'react';
import { Dimensions, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import IonicIcon from 'react-native-vector-icons/Ionicons';

import Northern from './screen/Northern';
import Northeastern from './screen/Northeastern';
import Central from './screen/Central';
import Eastern from './screen/Eastern'
import Western from './screen/Western'
import Southern from './screen/Southern'
import WeatherScreen from './screen/WeatherScreen'
import everything from 'my_module'
import * as everything from 'my_module';

const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator()

function NorthernStackScreen( ) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Northern" component={Northern} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator>
  );
}

function NortheasternStackScreen( ) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Northeastern" component={Northeastern} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator>
  );
}

function CentralStackScreen( ) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Central" component={Central} />
      <Stack.Screen name="Weather" component={WeatherScreen} />
    </Stack.Navigator>
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
           if(route.name === 'Northern' || route.name === 'Northeastern' || route.name === 'Central' || route.name === 'Eastern' || route.name === 'Western' || route.name === 'Southern') {
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
        <Tab.Screen name="Northern" component={NorthernStackScreen} />
        <Tab.Screen name="Northeastern" component={NortheasternStackScreen} />
        <Tab.Screen name="Central" component={CentralStackScreen} />
        <Tab.Screen name="Eastern" component={EasternStackScreen} />
        <Tab.Screen name="Western" component={WesternStackScreen} />
        <Tab.Screen name="Southern" component={SouthernStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

