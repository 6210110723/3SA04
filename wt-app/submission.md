Lab 3SA04 - ReactNative
1. สร้างไฟล์ออกมา 6 ไฟล์ เพื่อแยกจังหวัดตามภาคต่างๆ
โดยที่จะสร้างไฟล์ดังนี้

Northern.js
Northeastern.js
Central.js
Eastern.js
Western.js
Southern.js
สร้างเพื่อแบ่งจังหวัดทั้ง 77 จังหวัดออกเป็น 6 ภาคโดยแต่ละภาคนั้น ใช้ code เหมือนกับ ZipCodeScreen.js ตามที่อาจารย์สอนมา

2. App.js
จะ import ตัว file จาก ข้อ 1 เข้ามาใน App.js ดังนี้

import Northern from './screen/Northern';
import Northeastern from './screen/Northeastern';
import Central from './screen/Central';
import Eastern from './screen/Eastern'
import Western from './screen/Western'
import Southern from './screen/Southern'
Dimensions : เป็นการกำหนดความกว้างของหน้าจอตามที่เราต้องการ

โดย Dimensions นี้มีการ import เข้าด้วยดังนี้

import { Dimensions } from 'react-native';
และเพิ่ม ตัวแปร fullScreenWidth เข้าไปเพื่อกำหนดความกว้างของหน้าจอให้เป็นแบบ fullscreen

const fullScreenWidth = Dimensions.get('window').width;
Stack คือ Tab ด้านบนของจอ ซึ่งจะมีการกำหนดให้ใีการ import ตัวด้านล่างนี้ที่แสดง มาก่อน ก่อนที่จะไปสร้างได้

import { createStackNavigator } from '@react-navigation/stack'
สร้างตัวแปร Stack

const Stack = createStackNavigator()
สร้างฟังชันมา 6 ฟังชัน เพราะว่าเราจะสร้าง BottomTab 6 tabs ในขั้นตอนต่อไป

โดยสร้างชื่อฟังชันของ Stack ว่า (..ภาค..)StackScreen
ภายใน function จะมีการเขียน code ดังนี้(เพิ่ม 6 function)
function NorthernStackScreen( ) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Northern" component={Northern} />
      <!-- บรรทัดนี้จะเป็นการกำหนดว่าแต่ละหน้านั้นต้องการที่จะโยงไปใน componant ไหน -->
      <Stack.Screen name="Weather" component={WeatherScreen} />
      <!-- บรรทันนี้จะเป็นการที่เรากดเนื้อหาในบรรก่อนหน้านั้น แล้วโยงเข้ามาในหน้านี้ -->
    </Stack.Navigator>
  );
}
Tab คือเพิ่ม tab bar ด้านล่างที่เป็นไอคอนให้กด ซึ่ง เราจะต้องไปติดตั้งใน cmd(administrator) ว่า

yarn add @react-navigation/bottom-tabs
เมื่อติดตั้งเสร็จแล้ว ว่าสร้างตัวแปร Tab ว่า

const Tab = createBottomTabNavigator();
เราจะสร้าง bottom tab ไว่ใน function ของ App ดังนี้

สร้างชื่อไอคอน แล้วชื่อไอคอน ของbottom tab นั้นต้องการให้โยงไปที่ส่วนไหน ซึ่งที่นี้เราจะโยงไปที่ function ของ Stack

return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Northern" component={NorthernStackScreen} />
      <Tab.Screen name="Northeastern" component={NortheasternStackScreen} />
      <Tab.Screen name="Central" component={CentralStackScreen} />
      <Tab.Screen name="Eastern" component={EasternStackScreen} />
      <Tab.Screen name="Western" component={WesternStackScreen} />
      <Tab.Screen name="Southern" component={SouthernStackScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
ใน Tab.Navigative จะเพิ่มภาพของไอคอน หรือสัญลักษณ์ แต่ก่อนอื่นเราต้องไป ติดตั้ง IonicIcon ก่อน เพราะว่าถ้าโหลดตคัวนี้ เราสามารถเลื่อชื่อไอคอนได้เลย ไม่ต้องเพิ่มภาพให้ยุ่งยาก

yarn add react-native-ionicons@^4.x
เมื่อติดตั้งเสร็จแล้ว ไปเพิ่ม screenOption ใน Tab.Navigator ได้เลย

<Tab.Navigator
  screenOptions={({route}) => ({
    headerTitle: () => <Text>Header</Text>,          
    <!-- ส่วนนี้จะเป็นการกำหนดว่าหัวข้อของ Tab,Navigation นั้นจะเป็นหัวข้อ Header ของหน้านั้นๆ -->
    tabBarIcon: ({focused, color, size, padding}) => {
      let iconName;
      if(route.name === 'Northern' || route.name === 'Northeastern' || route.name === 'Central' || route.name === 'Eastern' || route.name === 'Western' || route.name === 'Southern') {
      iconName = focused ? 'earth' : 'earth-outline'
      }
      <!-- ส่วนนี้จะเป็น iconName ซึ่งจะเป็นการบอกว่าชื่อ Bottom Tab แต่ละ Tab นั้นให้มีรูป Icon เป็นยังไง ซึ่งในลูป จะบอกว่าให้ถ้าก icon นั้น(Focus) จะเลือก icon แบบ earth ส่วนที่ไม่ได้ focus นั้น ให้ icon เป็นรูป earth-outline -->

      return (
        <IonicIcon 
          name={iconName} 
          size={size} 
          color={color} 
          style={{paddingBottom: padding}} 
        />
      );
    },
  })}> 
  </NavigationContainer>
2. Forecast.js
ในส่วนนี้จะเพิ่ม ให้รายละเอียดต่างๆ ระเอียดขึ้นกว่าเดิมโดยกำกับว่าข้อความนี้ที่ได้มานั้น คืออะไร

import React  from "react";
import { Text, View } from "react-native";

export default function Forecast(props) {
  return (
    <View style={{alignItems: "center"}}>
      <Text style={{ fontSize: 20 }}>Province : {props.name}</Text>
      <Text style={{ fontSize: 20 }}>Weather : {props.main}</Text>
      <Text style={{ fontSize: 20 }}>Description : {props.description}</Text>
      <Text style={{ fontSize: 20 }}>temp : {props.temp} °C</Text>
    </View>
  );
}
ได้จัดข้อความให้อยู่ตรงกลางโดยใช้ => alignItems: "center"

ปรับขนาดข้อความ => fontSize: 20

ชื่อ - สกุล
นางสาวฟาเดีย หวังหลิ่ม

รหัศนักศึกษา : 6210110723

Section : 03