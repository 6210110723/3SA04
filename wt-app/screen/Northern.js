import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const availableZipItems = [
    { place: 'Chiangmai', code: '50000' },
    { place: 'Lamphun', code: '51000' },
    { place: 'Lampang', code: '52000' },
    { place: 'Uttaradit', code: '53000	' },
    { place: 'Phrae', code: '54000' },
    { place: 'Nan', code: '55000' },
    { place: 'Phayao', code: '56000' },
    { place: 'Chiang Rai', code: '57000' },
    { place: 'Mae Hong Son', code: '58000' },
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