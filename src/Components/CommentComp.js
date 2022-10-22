import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from './Input'
import SendIcon from 'react-native-vector-icons/Ionicons'
const CommentComp = ({val,onchange,IconPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inParent}>
                <Input 
                value={val}
                onChangeText={onchange}
                placeholder={"Write your comment "} mystyle={styles.inp} />
                <SendIcon onPress={()=>IconPress()} name={"md-send"} size={24} style={{ marginLeft: 20 }} color={"black"} />
            </View>
        </View>
    )
}

export default CommentComp

const styles = StyleSheet.create({
    container:{ width: '100%' },
    inp:{
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 3,
        paddingLeft: 10,
        width: 280
    },
    inParent:{
        flexDirection: 'row',
        paddingHorizontal: 12,
        alignItems: 'center'
    }
})