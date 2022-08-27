import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const availableZipItems = [
    { place: 'Nakhon Ratchasima', code: '30000' },
    { place: 'Buriram', code: '31000' },
    { place: 'Surin', code: '32000' },
    { place: 'Sisaket', code: '33000' },
    { place: 'Ubon Ratchathani', code: '34000' },
    { place: 'Yasothon', code: '35000' },
    { place: 'Chaiyaphum', code: '36000' },
    { place: 'Amnat Charoen', code: '37000' },
    { place: 'Bueng Kan', code: '38000' },
    { place: 'Nong Bua Lamphu', code: '39000' },
    { place: 'Khon Kaen', code: '40000' },
    { place: 'Udon Thani', code: '41000' },
    { place: 'Loei', code: '42000' },
    { place: 'Nong Khai', code: '43000' },
    { place: 'Maha Sarakham', code: '44000' },
    { place: 'Roi Et', code: '45000' },
    { place: 'Kalasin', code: '46000' },
    { place: 'Sakon Nakhon', code: '47000' },
    { place: 'Nakhon Phanom', code: '48000' },
    { place: 'Mukdahan', code: '49000' },
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