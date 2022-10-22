import {StyleSheet} from  "react-native"
import Styles from '../../../styles'
export const loginstyle = StyleSheet.create({
    container:{
        flex:1
    },
    fieldContainer:{
        height: 200,
        borderRadius:10,
        borderWidth: 1, borderColor: 'white'
    },
    txt:{
        fontSize:16,
        color:'white',
        fontFamily:Styles.Medium

    },
    btncontainer:{ alignSelf: 'flex-end', marginTop: 20 },
    authView:{paddingHorizontal:12,justifyContent:'center',flex:1}
  
})