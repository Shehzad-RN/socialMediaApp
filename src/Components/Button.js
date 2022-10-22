import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Styles from '../styles'

const Button = ({ title, MyIcon,sTyle,onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn,{...sTyle}]}>
            {title ? <Text style={styles.titleTxt}>{title}</Text> : null}
            {MyIcon}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    btn: {
        height: 50,
        borderRadius:10,
    
        alignItems:'center',
        justifyContent: 'center',
        alignSelf:'center',
        width: "70%",
        backgroundColor: 'green'
    },
    titleTxt: {
        color: 'white',
        fontFamily: Styles.Bold
    }
})