import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const availableZipItems = [
    { place: 'Samut Prakan', code: '10270' },
    { place: 'Nonthaburi', code: '11000' },
    { place: 'Pathum Thani', code: '12000' },
    { place: 'Phra Nakhon Si Ayutthaya', code: '13000' },
    { place: 'Ang Thong', code: '14000' },
    { place: 'Lopburi', code: '15000' },
    { place: 'Sing Buri', code: '16000' },
    { place: 'Chai Nat', code: '17000' },
    { place: 'Saraburi', code: '18000' },
    { place: 'Nakhon Nayok', code: '26000' },
    { place: 'Uthai Thani', code: '41000' },
    { place: 'Nakhon Pathom', code: '48000' },
    { place: 'Nakhon Sawan', code: '60000' },
    { place: 'Kamphaeng Phet', code: '62000' },
    { place: 'Sukhothai', code: '64000' },
    { place: 'Phitsanulok', code: '65000' },
    { place: 'Phichit', code: '66000' },
    { place: 'Phetchabun', code: '67000' },
    { place: 'Suphan Buri', code: '72000' },
    { place: 'Samut Sakhon', code: '74000' },
    { place: 'Samut Songkhram', code: '75000' },
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