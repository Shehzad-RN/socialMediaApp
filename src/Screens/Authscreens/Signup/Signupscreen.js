import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../Components/Input'
import ContinueIcon from 'react-native-vector-icons/Entypo'
import { signupstyle } from '../Signup/styles'
import Button from '../../../Components/Button'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'

const Signupscreen = () => {
  const [data, Setdata] = useState({
    username: '',
    email: '',
    pass: '',
    cpass: '',
  })


  const bgImg = require('../../../Assets/bg.png')


  const _register = async () => {
    try {
      await auth()
        .createUserWithEmailAndPassword(data.email, data.pass)
        .then(res => {
          console.log('ressss Of Email', res);
          firestore()
            .collection('users')
            .doc(auth().currentUser.uid)
            .set({
              username: data.username,
              email: data.email,
              userId: res.user.uid,
              createdAt: firestore.Timestamp.fromDate(new Date()),
              userImg: null,
            })
            .then(res => {
              firestore()
                .collection('users')
                .doc(auth().currentUser.uid)
                .get()
                .then(res => {
                  // console.log('ressss', JSON.stringify(res));
                  // REGISTERING_USER(res.data())(dispatch);
                });
            })
            .catch(error => {
              console.log(
                'Something went wrong with added user to firestore: ',
                error,
              );
            });
        })
        .catch(error => {
          console.log('Something went wrong with sign up: ', error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ImageBackground resizeMode='cover' source={bgImg} style={signupstyle.container}>
      <View style={{ flex: 1, justifyContent: 'center', padding: 12 }}>
        <View style={signupstyle.fieldContainer}>
          <View style={signupstyle.authView}>
            <Input
              value={data.username}
              onChangeText={(txt) => {
                Setdata({ ...data, username: txt })
              }}
              placeholder={"Username"}
              mystyle={{
                color: 'white',

                borderBottomWidth: .5,
                borderBottomColor: 'white'
              }}
            />
            <Input
              placeholder={"Email"}
              value={data.email}
              onChangeText={(txt) => {
                Setdata({ ...data, email: txt })
              }}
              mystyle={{
                borderBottomWidth: .5,
                color: 'white',

                borderBottomColor: 'white'
              }}
            />
            <Input
              placeholder={"Password"}
              value={data.pass}
              onChangeText={(txt) => {
                Setdata({ ...data, pass: txt })
              }}
              mystyle={{
                borderBottomWidth: .5,
                color: 'white',

                borderBottomColor: 'white'
              }}
            />
            <Input
              placeholder={"Confirm Password"}
              value={data.cpass}
              onChangeText={(txt) => {
                Setdata({ ...data, cpass: txt })
              }}
              mystyle={{
                color: 'white',

                borderBottomColor: 'white'
              }}
            />
          </View>
        </View>
        <View style={{ alignSelf: 'flex-end', marginTop: 20 }}>
          <Button
            onPress={() => _register()}
            sTyle={{
              paddingHorizontal: 12,
              borderRadius: 4
            }}
            MyIcon={<ContinueIcon name={"controller-play"} size={32} color={"white"} />}
          />
        </View>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
          <Text style={signupstyle.txt}>Already have an account? <Text>SignIn</Text></Text>
        </View>
      </View>
    </ImageBackground>
  )
}

export default Signupscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})