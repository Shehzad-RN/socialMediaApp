import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import Button from '../../../Components/Button';

const Profilescreen = () => {

  const _LogouOut = ()=>{
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  }

  return (
    <View>
      <Button title={"Log Out"} onPress={()=>_LogouOut()}/>
    </View>
  )
}

export default Profilescreen

const styles = StyleSheet.create({})