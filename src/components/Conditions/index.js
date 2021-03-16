import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons';

export default function Conditions({weather}){
    return(
        <View style={styles.container}>
            <View style={styles.conditions}>
                <Feather name="wind" size={23} color="#1ed6ff"/>
                <Text>{weather.results.wind_speedy}</Text>
            </View>
            <View style={styles.conditions}>
                <MaterialCommunityIcons size={23} name='weather-sunset-up' color="#1ed6ff"/>
                <Text>{weather.results.sunrise}</Text>
            </View>
            <View style={styles.conditions}>
                <MaterialCommunityIcons size={23} name='weather-sunset-down' color="#1ed6ff"/>
                <Text>{weather.results.sunset}</Text>
            </View>
            <View style={styles.conditions}>
                <Feather name='droplet' size={23} color="#1ed6ff"/>
                <Text>{weather.results.humidity}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:15,
        padding:10,
        backgroundColor:'#fff',
        flexDirection:'row',
        width:'95%',
        justifyContent:'space-around',
        borderRadius:7
    },
    conditions:{
        alignItems:'center',
        justifyContent:'center',
        

    }



});