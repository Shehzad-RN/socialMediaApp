import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import firestore from '@react-native-firebase/firestore'

const Likes = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
   _posts()
  }, [])
  
  const _posts = () => {
    firestore()
      .collection('Posts')
      .get()
      .then(querySnapshot => {
    querySnapshot.forEach((item)=>{


        })


        // querySnapshot.forEach((doc) => {
        //   const {
        //     title,
        //     desc,
        //     tags,
        //     userId,
        //     image,
        //     likes,
        //     comments
        //   } = doc.data();
        //   arr.push({
        //     postId: doc.id,
        //     userId,
        //     title,
        //     tags,
        //     desc,
        //     image,
        //     liked: false,
        //     likes,
        //     comments,
        //   });
        // });
        // setdata(arr)
        // setcommentsList(arr)



      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.card}>

      </View>
    </View>
  )
}

export default Likes

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red'
  },
  card:{
    height:80,
    backgroundColor:'green'
  }
})