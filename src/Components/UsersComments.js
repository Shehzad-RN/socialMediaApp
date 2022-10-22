import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Styles from '../styles'
import auth from '@react-native-firebase/auth'
const UsersComments = ({ item }) => {

    useEffect(() => {
        console.log("name", auth().currentUser.displayName)
    }, [])

    return (
        <View style={{ width: "100%" }}>
            <View style={styles.comentView}>
                <Text style={styles.cmnTxt}>{auth().currentUser.displayName}</Text>
                <Text style={styles.cmnTxt}>{item.comment}</Text>
            </View>
        </View>
    )
}

export default UsersComments

const styles = StyleSheet.create({
    cmnTxt: {
        fontSize: 14,
        color: 'black',
        fontFamily: Styles.Regular,
        // paddingLeft: 12
    },
    comentView: {
        backgroundColor: '#fff',
        elevation:3,
        borderRadius: 20,
        marginVertical: 6,
        justifyContent: 'flex-start',
        // width: 200,
        alignItems: 'center',
        padding:12,
        alignSelf: 'flex-start',
        flexDirection: 'row', paddingVertical: 10
    }
})