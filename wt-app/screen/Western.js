import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const availableZipItems = [
    { place: 'Tak', code: '63000' },
    { place: 'Ratchaburi', code: '70000' },
    { place: 'Kanchanaburi', code: '71000' },
    { place: 'Phetchaburi', code: '76000' },
    { place: 'Prachuap Khiri Khan', code: '77000' },
   ]

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }}>
        <View style={styles.ZipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)
export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <View>
        <FlatList
            data = {availableZipItems}
            keyExtractor = {item => item.code}
            renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
        />
        {/* <StatusBar style="auto" /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    ZipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 30, 
        marginRight: 30,         
    },
    zipPlace: {
        flex: 1,
        top: 20
    },
    zipCode: {
        flex: 1,
    },
    container: {
        
    }
    
})