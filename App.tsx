import React, { useEffect } from 'react'
import LogIn from './src/presentation/container/Authen/LogIn/LogIn.view'
import { StyleSheet, View, Text, TouchableOpacity, Alert, ToastAndroid } from 'react-native'
import LogInOTP from './src/presentation/container/Authen/sendOTP/SendOTP.view'
import Splash from './src/presentation/container/Authen/LogIn/FirstLogIn.view'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './src/presentation/navigation/stack/StackNavigation'
import Register from './src/presentation/container/Authen/Register/Register.view'
import Introduce from './src/presentation/container/Author/introduce/Introduce.view'
import { AuthenNavigation } from './src/presentation/navigation/Authen/AuthenNavigation'
import { AppNavigation } from './src/presentation/navigation/AppNavigation'
import Rules from './src/presentation/container/Author/rules/Rules'
import Notification from './src/presentation/container/Author/notification/Notification'
import MyGift from './src/presentation/container/Author/notification/MyGift'
import ItemGift from './src/presentation/container/Author/notification/MyGift.item'
import BeatNewItem from './src/presentation/container/Author/home/beatlist/BeatNew.item'
import BeatNew from './src/presentation/container/Author/home/beatlist/BeatNew.view'
import BeatList from './src/presentation/container/Author/home/beatlist/BeatList.view'
import ItemBeatList from './src/presentation/container/Author/home/beatlist/BeatList.item'
import AcceptAnimation from './src/presentation/container/Author/home/remix/AcceptAnimation'
import CreateAnimation from './src/presentation/container/Author/home/remix/CreateAnimation'
import CreatePost from './src/presentation/container/Author/home/remix/CreatePost.view'
import Recording from './src/presentation/container/Author/home/remix/Record.view'
import Remix from './src/presentation/container/Author/home/remix/Remix.view'
import EditNameSong from './src/presentation/container/Author/home/remix/EditNameSong.view'
import Thanks from './src/presentation/container/Author/home/remix/Thanks'
import ItemProfile from './src/presentation/container/Author/home/profile/Profile.item'
import Profile from './src/presentation/container/Author/home/profile/Profile.view'
import Ranking from './src/presentation/container/Author/home/leaderboard/Ranking'
import TopView from './src/presentation/container/Author/home/leaderboard/TopView.view'
import NewVideo from './src/presentation/container/Author/home/videolist/NewVideo.view'
import ItemNewVideo from './src/presentation/container/Author/home/videolist/NewVideo.item'
import TopTapVideoList from './src/presentation/navigation/TopTab/VideoList'
import ItemRanking from './src/presentation/container/Author/home/leaderboard/Ranking.item'
import TopTapRanking from './src/presentation/navigation/TopTab/Ranking'
import OrtherProfile from './src/presentation/container/Author/home/profile/OrtherProfile'
import OrtherVideo from './src/presentation/container/Author/home/videolist/OrtherVideoList'
import { Provider } from 'react-redux'
import store from './src/presentation/share-state/redux/store'


const App = () => {
  return (
    // <LogIn/>
    // <LogInOTP/>
    // <Splash/>
    // <Register/>
    // <Introduce/>
    // </NavigationContainer>
    // <Rules/>
    // <Notification/>
    // <MyGift/>
    // <ItemGift/>
    // <Thanks/>
    // <BeatNew/>
    // <BeatList/>
    // <ItemBeatList/>
    // <AcceptAnimation/>
    // <CreateAnimation/>
    // <CreatePost/>
    // <Recording/>
    // <Remix/>
    // <EditNameSong/>
    // <ItemProfile/>
    // <Profile/>
    // <TopView/>
    // <ItemRanking/>
    // <Ranking/>
    // <OrtherProfile/>
    // <OrtherVideo/>

    // <TopTapVideoList/>
    // <TopTapRanking/>

    <AppNavigation/>

  )
}


import firestore from '@react-native-firebase/firestore';
import database, { firebase } from '@react-native-firebase/database';
import { rtdb } from './src/core/api/url/RealTimeDB'
import { Users } from './src/core/model/User'
import { UserRespone } from './src/core/model/UserRespone'

const user = {
  name: '123',
  phone: '123',
  image: 'unknow',
  video: 0,
  react: 0,
}

// const App = () => {

//   let list: UserRespone[] = [];
//   const [user, setUser] = React.useState<UserRespone>();
//   const clickRegister = async () => {

//     // //post
    
//     list = [];
//     setUser({});
//     let userTemp: UserRespone = {};
//     const getUserKey = await rtdb.ref('users')
//       .once('value', (value: any) => {
//         value.forEach((data: any) => {
//           if (data.val().phone == "123") {
//             userTemp.key = data.key;
//             userTemp.name = data.val().name;
//             userTemp.phone = data.val().phone;
//           }
//         })
//         setUser(userTemp);
//         console.log(user);
//       });
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <TouchableOpacity style={{ borderWidth: 1, width: 100, height: 200 }} onPress={clickRegister}>
//         <Text>Click</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

export default App

const styles = StyleSheet.create({})