import { StyleSheet, Text, ImageBackground, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../Components/Input'
import ContinueIcon from 'react-native-vector-icons/Entypo'
import { loginstyle } from '../Login/styles'
import Button from '../../../Components/Button'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
const Loginscreen = ({ navigation }) => {

    const [data, Setdata] = useState({

        email: '',
        pass: '',

    })

    const bgImg = require('../../../Assets/bg.png')
    const _loginUser = async () => {
        try {
            await auth()
                .signInWithEmailAndPassword(data.email, data.pass)
                .then(res => {
                    console.log('ressss Of Email', res);
                    //     firestore()
                    //         .collection('users')
                    //         .doc(auth().currentUser.uid)
                    //         .set({
                    //             email: data.email,

                    //             createdAt: firestore.Timestamp.fromDate(new Date()),
                    //         })
                    //         .then(res => {
                    //             firestore()
                    //                 .collection('users')
                    //                 .doc(auth().currentUser.uid)
                    //                 .get()
                    //                 .then(res => {

                    //                 });
                    //         })
                    //         .catch(error => {
                    //             console.log(
                    //                 'Something went wrong with added user to firestore: ',
                    //                 error,
                    //             );
                    //         });
                    // })
                    // .catch(error => {
                    //     console.log('Something went wrong with sign up: ', error);
                    // });
                })
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <ImageBackground resizeMode='cover' source={bgImg} style={loginstyle.container}>
            <View style={{ flex: 1, justifyContent: 'center', padding: 12 }}>
                <View style={loginstyle.fieldContainer}>
                    <View style={{ paddingHorizontal: 12, justifyContent: 'center', flex: 1 }}>
                        <Input
                            placeholder={"Email"}
                            value={data.email}
                            onChangeText={(txt) => { Setdata({ ...data, email: txt }) }}
                            mystyle={{
                                borderBottomWidth: .5,
                                color:'white',
                                borderBottomColor: 'white'
                            }}
                        />
                        <Input
                            placeholder={"Password"}
                            value={data.pass}
                            onChangeText={(txt) => { Setdata({ ...data, pass: txt }) }}
                            mystyle={{
                                borderBottomColor: 'white',
                                color:'white'
                            }}
                        />
                    </View>
                </View>
                <View style={loginstyle.btncontainer}>
                    <Button
                        onPress={() => _loginUser()}
                        sTyle={{
                            paddingHorizontal: 12,
                            borderRadius: 4
                        }}
                        MyIcon={<ContinueIcon name={"controller-play"} size={32} color={"white"} />}
                    />

                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={{ alignItems: 'center', marginTop: 40 }}>
                    <Text style={loginstyle.txt}>Dont have an account <Text>SignUp</Text></Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Loginscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})