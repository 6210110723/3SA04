import React  from "react";
import { Text, View } from "react-native";
import Transitioning from "react-native-reanimated"


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