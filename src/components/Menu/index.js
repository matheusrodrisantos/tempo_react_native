import React from 'react';
import {StyleSheet,TouchableOpacity} from 'react-native';
import{Feather} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Menu(){

    const navigation=useNavigation();

    return(
        <TouchableOpacity style={styles.container}>
            <Feather 
                onPress={()=>navigation.openDrawer()}
                name="menu"
                size={37}
                color="#373737"
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        zIndex:9,
        width:60,
        height:60,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        left:10,
        top:40,
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        elevation:2,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowOffset:{
            width:1,
            height:3
        }

    }


});