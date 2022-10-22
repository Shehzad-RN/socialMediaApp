import { StyleSheet, Text, Image, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Styles from '../../../styles'
import Icon from 'react-native-vector-icons/Entypo'
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'
import firestore from '@react-native-firebase/firestore'
import ImagePicker from 'react-native-image-crop-picker';
import auth from '@react-native-firebase/auth'
import storage from '@react-native-firebase/storage';
let downloadUrl = null
const AddPost = ({ navigation }) => {
  const [data, setdata] = useState({
    title: '',
    desc: '',
    tags: '',
    image: "",
  })
  const addpost = (downloadURLs) => {
    firestore()
      .collection("Posts")
      .add({
        title: data.title,
        desc: data.desc,
        tags: data.tags,
        userId: auth().currentUser.uid,
        image: downloadUrl,
        likes: [],
        comments: [],
      })
      .then((res) => {
        if (res) {
          navigation.goBack()
        }
        console.log("reddddd", res)
      });

  };

  const uploadImage = async (image) => {
    const uploadUri = image.path;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);
    try {
      await task;
      const url = await storageRef.getDownloadURL();
      console.log("ffff", url)
      // setdata({...data,downloadUrl:url})
      // addpost(url)

      // setUploading(false);

      // setImage(null);

      // Alert.alert(
      //   'Image uploaded!',
      //   'Your image has been uploaded to the Firebase Cloud Storage Successfully!',
      // );
      return downloadUrl = url;

    } catch (e) {
      console.log(e);
      return null;
    }

  };
  const [ik, setik] = useState(
    ''
  )
  const addPhoto = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setik(image.path)
      setdata({ ...data, image: image.path })

      uploadImage(image)
    });
  }

  // const uploadPhotos = async () => {
  //   const downloadURLs = await Promise.all(photos.map(p => uploadImage(photo)))
  //   await addpost(downloadURLs)

  // }
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} style={styles.container}>
      <View style={styles.subcontainer2}>
        <View style={styles.subcontainer}>
          <View style={styles.photocontainer}>
            {data.image || data.downloadUrl ? <Image source={{ uri: data.image == "" ? data.downloadUrl : data.image }} style={[styles.photocontainer, { width: '100%' }]} />
              : <Icon name={"image"} size={40} color={"white"} onPress={() => addPhoto()} />}

          </View>
          <View style={{ height: 20 }} />
          <Input value={data.title} onChangeText={(txt) => { setdata({ ...data, title: txt }) }} placeholder={"Enter Title"} mystyle={styles.fieldtyle} />
          <Input value={data.desc} onChangeText={(txt) => { setdata({ ...data, desc: txt }) }} placeholder={"Enter Description"} mystyle={styles.fieldtyle} />
          <Input value={data.tags} onChangeText={(txt) => { setdata({ ...data, tags: txt }) }} placeholder={"Enter Tags"} mystyle={styles.fieldtyle} />
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', paddingBottom: 20, paddingHorizontal: 12 }}>
        <Button title={"Upload"} onPress={() => addpost()} />
      </View>
      {/* */}

    </ScrollView>
  )
}

export default AddPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.bgColor
  },
  subcontainer2: { flex: 4 },
  fieldtyle: { backgroundColor: '#fff', borderRadius: 6 },
  photocontainer: {
    height: 200,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Styles.bgColor
  },
  subcontainer: {
    margin: 10
  }
})