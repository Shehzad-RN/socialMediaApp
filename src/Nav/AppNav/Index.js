import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from '../../Screens/Appscreens/Home/Homescreen';
import Searchscreen from '../../Screens/Appscreens/Search/Searchscreen';
// import Chatscreen from '../../Screens/Appscreens/Chat/Chatscreen';
// import Friendsscreen from '../../Screens/Appscreens/Friend/Friendsscreen';
import Likes from '../../Screens/Appscreens/Likes/Likes';
import Profilescreen from '../../Screens/Appscreens/Profile/Profilescreen';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchIcon from 'react-native-vector-icons/FontAwesome'
import Chat from 'react-native-vector-icons/Ionicons'
import AddPost from '../../Screens/Appscreens/AddPost/AddPost';
import FriendIcon from 'react-native-vector-icons/FontAwesome5'
import ADD from 'react-native-vector-icons/Ionicons'
import HeartIcon from 'react-native-vector-icons/Entypo'
import styles from '../../styles';
const Tab = createBottomTabNavigator();

export default function AppNav() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === 'Home') {
                    return <Icon name={'home'} size={20} color={color} />;
                } else if (route.name === 'Search') {
                    return <SearchIcon name={'search'} size={20} color={color} />;
                }
                else if (route.name === 'AddPost') {
                    return <ADD name={'add-circle'} size={20} color={color} />;
                } else if (route.name === 'Likes') {
                    return <HeartIcon name={'heart-outlined'} size={20} color={color} />;
                } else if (route.name === 'Profile') {
                    return <FriendIcon name={'user-alt'} size={20} color={color} />;
                }
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            
            tabBarLabel:'',
            tabBarStyle: {
                // paddingBottom: 10,
                // height: 58,
                borderTopWidth:null,
                borderTopLeftRadius:21, 
                borderTopRightRadius:21,
                backgroundColor:styles.bgColor,
                position:'absolute',
                bottom: 0,
                padding:10,
                
                // width: DEVICE_WIDTH,
                height: 50,
                zIndex: 8 
              },

            headerStyle:{
                backgroundColor:styles.bgColor
            },
            
            headerTintColor:'white',
            headerTitleAlign:'center'
        })}>
            <Tab.Screen name="Home" component={Homescreen} />
            <Tab.Screen name="Likes" component={Likes} />
            <Tab.Screen name="AddPost" component={AddPost} />
            <Tab.Screen name="Search" component={Searchscreen} />
            <Tab.Screen name="Profile" component={Profilescreen} />


        </Tab.Navigator>
    );
}