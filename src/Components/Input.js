import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Styles from '../styles'

const Input = ({mystyle,placeholder,value,onChangeText}) => {
  return (
    <View>
      <TextInput 
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={"grey"}
      placeholder={placeholder}
      style={[styles.inputstyle,{...mystyle}]}
      />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    inputstyle:{
        height:50,
        marginVertical:10,
        color:'#000',
        paddingLeft:6,
        fontFamily:Styles.Regular
    }
})