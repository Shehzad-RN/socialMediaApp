import {StyleSheet} from  "react-native"
import Styles from '../../../styles'
export const signupstyle = StyleSheet.create({
    container:{
        flex:1
    },
    fieldContainer:{
        height: 300,
        borderRadius:10,
        borderWidth: 1, borderColor: 'white'
    },
    txt:{
        fontSize:16,
        color:'white',
        fontFamily:Styles.Medium

    },
    authView:{paddingHorizontal:12,justifyContent:'center',flex:1}
  
})