import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StatusBar, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const availableZipItems = [
    { place: 'Krabi ', code: '81000' },
    { place: 'Chumphon ', code: '86000' },
    { place: 'Trang ', code: '92000' },
    { place: 'Nakhon Si Thammarat', code: '80000' },
    { place: 'Narathiwat', code: '96000' },
    { place: 'Pattani', code: '94000' },
    { place: 'Phang Nga', code: '82000' },
    { place: 'Phatthalung', code: '93000' },
    { place: 'Phuket', code: '83000' },
    { place: 'Ranong', code: '85000' },
    { place: 'Satun', code: '91000' },
    { place: 'Songkhla', code: '90000' },
    { place: 'Surat Thani', code: '84000' },
    { place: 'Yala', code: '95000' },
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