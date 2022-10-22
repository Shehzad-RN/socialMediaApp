import { StyleSheet, Text, Image, View, FlatList } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
// import { data } from '../../../data'
import RBSheet from "react-native-raw-bottom-sheet";
import Card from '../../../Components/Card'
import Styles from '../../../styles'
import Friends from '../../../Components/Friends'
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import Input from '../../../Components/Input'
// import CommentComp from '../../../Components/CommentComp';
let comnts

import SendIcon from 'react-native-vector-icons/Ionicons'
import UsersComments from '../../../Components/UsersComments';
const Homescreen = ({ navigation }) => {

  const [data, setdata] = useState([])
  const refRBSheet = useRef();
  const [comment, setcomment] = useState("")
  const [commentsList, setcommentsList] = useState([])

  let arr = []


  console.log("comntscomnts", comnts)
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      _posts();

    });
    return unsubscribe;
  }, []);

  const _posts = () => {
    firestore()
      .collection('Posts')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          const {
            title,
            desc,
            tags,
            userId,
            image,
            likes,
            comments
          } = doc.data();
          arr.push({
            postId: doc.id,
            userId,
            title,
            tags,
            desc,
            image,
            liked: false,
            likes,
            comments,
          });
        });
        setdata(arr)
        // setcommentsList(arr)



      });
  }




  const onLikePress = ({ postId, likes, userId }) => {
    const likeref = firestore().collection("Posts").doc(postId)
    if (likes.includes(auth().currentUser.uid)) {
      likeref.update({
        likes: firebase.firestore.FieldValue.arrayRemove(auth().currentUser.uid)

      })
    } else {
      likeref.update({
        likes: firebase.firestore.FieldValue.arrayUnion(auth().currentUser.uid)
      })

    }
    _posts();
  }

  const [pId, setpId] = useState(null)
  const commentsHandler = (e) => {
    if (e) {
      firestore().collection("Posts").doc(pId).update({
        comments: firebase.firestore.FieldValue.arrayUnion({
          userid: auth().currentUser.uid,
          username: auth().currentUser.displayName,
          userImg: auth().currentUser.photoURL,
          postIdd: pId,
          comment: comment,
          createdAt: firebase.firestore.Timestamp.fromDate(new Date())
        })
      }).then(() => {
        setcomment("")
        _posts()
      })
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ListHeaderComponent={
          <FlatList
            horizontal={true}
            data={data}
            renderItem={({ item }) => {
              return (
                <Friends item={item} />
              )
            }}
          />
        }
        contentContainerStyle={{ paddingBottom: 70 }}
        renderItem={({ item }) => {
          return (
            <Card item={item}
              like={() => onLikePress({
                userId: item.userId,
                postId: item.postId,
                likes: item.likes,
                // liked:item
              },

              )}
              comment={(arr) => {
                setcommentsList(arr)
                setpId(item.postId)
                refRBSheet.current.open()
              }}
        
            />
          )
        }}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={400}
        openDuration={250}
        customStyles={{
          container: {
            // backgroundColor: 'red',
            justifyContent: "flex-start",
            alignItems: "center",
            width: '100%'
          }
        }}
      >
        <View style={{ flex: 1, width: '100%' }}>
          <FlatList
            data={commentsList}
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={({ item }) => {
              return (
                <UsersComments item={item} />
              )
            }}
          />
        </View>

        <View style={styles.inParent}>
          <Input
            value={comment}
            onChangeText={(txt) => setcomment(txt)}
            placeholder={"Write your comment "} mystyle={styles.inp} />
          <SendIcon onPress={() => commentsHandler({ comment, pId })} name={"md-send"} size={24} style={{ marginLeft: 20 }} color={"black"} />
        </View>
        {/* <CommentComp IconPress={() => commentsHandler(pId)} val={comment} onchange={(txt) => setcomment(txt)} /> */}
      </RBSheet>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.bgColor
  },
  inp: {
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 3,
    paddingLeft: 10,
    width: 280
  },
  inParent: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center'
  }
})