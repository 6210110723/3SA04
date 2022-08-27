import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const availableZipItems = [
    { place: 'Chonburi', code: '20000' },
    { place: 'Rayong', code: '21000' },
    { place: 'Chanthaburi', code: '22000' },
    { place: 'Trat', code: '23000' },
    { place: 'Chachoengsao', code: '24000' },
    { place: 'Prachinburi', code: '25000' },
    { place: 'Sa Kaeo', code: '27000' },
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