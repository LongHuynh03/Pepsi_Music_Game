import React from 'react'
import LogIn from './src/presentation/container/Authen/LogIn/LogIn.view'
import { StyleSheet } from 'react-native'
import LogInOTP from './src/presentation/container/Authen/sendOTP/SendOTP.view'
import Splash from './src/presentation/container/Authen/LogIn/FirstLogIn.view'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './src/presentation/navigation/stack/StackNavigation'
import Register from './src/presentation/container/Authen/Register/Register.view'
import Introduce from './src/presentation/container/Author/introduce/Introduce.view'
import { AuthenNavigation } from './src/presentation/navigation/Authen/AuthenNavigation'
import { AppNavigation } from './src/presentation/navigation/AppNavigation'
import Rules from './src/presentation/container/Author/home/Rules'
import Notification from './src/presentation/container/Author/notification/Notification'
import MyGift from './src/presentation/container/Author/notification/MyGift'
import ItemGift from './src/presentation/container/Author/notification/MyGift.item'
import Thanks from './src/presentation/container/Author/remix/Thanks'
import BeatNewItem from './src/presentation/container/Author/home/beatlist/BeatNew.item'
import BeatNew from './src/presentation/container/Author/home/beatlist/BeatNew.view'
import BeatList from './src/presentation/container/Author/home/beatlist/BeatList.view'


const App = () => {
  return (
    // <LogIn/>
    // <LogInOTP/>
    // <Splash/>
    // <Register/>
    // <Introduce/>
    // <NavigationContainer>
    //   {/* <MainNavigation /> */}
    //   <AuthenNavigation/>
    // </NavigationContainer>
    // <Rules/>
    // <Notification/>
    // <MyGift/>
    // <ItemGift/>
    // <Thanks/>
    // <BeatNew/>
    <BeatList/>

    // <AppNavigation/>

  )
}

export default App

const styles = StyleSheet.create({})