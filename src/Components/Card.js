import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useRef } from 'react'
import Icon1 from 'react-native-vector-icons/Entypo'
import Icon2 from 'react-native-vector-icons/EvilIcons'
import Styles from '../styles'
import auth from '@react-native-firebase/auth'

const Card = ({ item, like, comment }) => {
    return (
        <View style={styles.ParentView}>
            <View style={styles.cardcontainer}>
                <Image source={{ uri: item.image }} style={styles.img1} />
                <View>
                    <View style={styles.userCard}>
                        <View style={{ marginTop: 6 }}>
                            <Text style={styles.txt1}>{item.name}</Text>
                            <Text style={[styles.txt1, { fontSize: 12, fontFamily: Styles.Regular }]}>{item.desc}</Text>
                        </View>
                        <View style={styles.img_card}>
                            <View style={styles.likeView}>
                                <Icon1 onPress={() => like()} name={item.likes.length >= 1 ? "heart" : "heart-outlined"} size={18} color={auth().currentUser.uid === item.userId ? "red" : "white"} style={styles.iconstyle} />
                                <Text style={styles.ccTxt}>{item.likes.length}</Text>
                            </View>
                            <View style={styles.likeView2}>
                                <Icon2 onPress={() => comment(item.comments)} name={"comment"} size={22} color={"white"} style={styles.iconstyle} />
                                <Text style={styles.ccTxt}>{item.comments?.length?item.comments?.length:0}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.img_card, { marginTop: 5 }]}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' }} style={styles.img2} />
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1551024739-78e9d60c45ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2lybHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' }} style={styles.img3} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    ParentView: { paddingHorizontal: 12 },
    cardcontainer: { borderBottomWidth: .3, paddingVertical: 10, borderBottomColor: '#fff' },
    img_card: { flexDirection: 'row' },
    img1: { height: 250, borderRadius: 20 },
    img2: { height: 30, width: 30, borderRadius: 25 },
    img3: { height: 30, width: 30, borderRadius: 25, right: 6, borderWidth: 2, borderColor: 'white' },
    userCard: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    likeView: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
    likeView2: { flexDirection: 'row', alignItems: 'center' },
    txt1: { fontSize: 14, fontFamily: Styles.Medium, color: '#fff' },
    ccTxt: { fontSize: 14, fontFamily: Styles.Regular, color: '#fff' },
    iconstyle: { marginRight: 6 }
})