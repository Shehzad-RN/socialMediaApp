import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import Styles from '../styles'

const Friends = ({ item }) => {
    return (
        <View style={{ margin: 10 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginVertical: 6 }}>
                <Image source={{ uri: item.image }} style={styles.img} />
                <Text style={styles.nameTxt}>{item.title}</Text>
            </View>
        </View>
    )
}

export default Friends

const styles = StyleSheet.create({
    img: {
        height: 40,
         width: 40,
          borderRadius: 35, borderWidth: 2, borderColor: 'white'
    },
    nameTxt: { fontSize: 10, color: '#fff', fontFamily: Styles.Medium, marginTop: 4 }
})