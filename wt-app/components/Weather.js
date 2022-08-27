import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Forecast from "./Forecast"

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        main: '-',
        description: '-',
        temp: 0
    })

   useEffect(() => { 

   console.log(`fetching data with zipCode = ${props.zipCode}`);
    if (props.zipCode) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=19d5f642cb405113038c9fa2f191a15d`)
        .then((response) => response.json())
        .then((json) => {
          setForecastInfo({
            name: json.name,
            main: json.weather[0].main,
            description: json.weather[0].description,
            temp: json.main.temp});
        })
        .catch((error) => {
          console.warn(error);
        });
    }
  }, [props.zipCode])

    return (
    <View>
    <ImageBackground source={require("../image/bg.jpg")} style={styles.backdrop}>
       <Text style={{ fontWeight: 'bold' , fontSize: 24}}>Zip Code : {props.zipCode}</Text>
       <Forecast {...forecastInfo} />
     </ImageBackground>
     </View>
  );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
}),
