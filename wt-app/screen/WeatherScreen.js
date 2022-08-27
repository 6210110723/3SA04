import React from "react"
import Weather from "../components/Weather"
import { View } from "react-native"

export default function WeatherScreen({route}) {
    return (
        <view>
            <Weather zipcode={route.params.zipcode}/>
        </view>
    )
}