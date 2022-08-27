import React from "react";
import { FlatList, View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { TouchableHighlight } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code}) => (
    <TouchableHighlight  onPress={() =>
    navigation.navigate('Weather', { zipCode: code})}>
    <View style={style.zipItem}>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    </TouchableHighlight>
)

export default function zipCodeScreen(){
    const navigation = useNavigation()
  return (
        <FlatList
            data={availableZipItems}
            keyExtractor={item => item.code}
            renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
    )
}

const Styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipItem: {
        flex: 1,
    },
    zipItem: {
        flex: 1,
    }
})