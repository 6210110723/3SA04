import React from 'react'
import Weather from '../components/Weather'
import { View } from 'react-native'

export default function WeatherScreen({route}) {
    return (
        <View>
            <Weather zipcode={route.params.zipcode}/>
        </View>
    )
}