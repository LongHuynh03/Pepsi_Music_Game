import React from 'react'
import LogIn from './src/presentation/container/Authen/LogIn/LogIn.view'
import { StyleSheet } from 'react-native'
import LogInOTP from './src/presentation/container/Authen/LogIn/LogInOTP.view'
import Splash from './src/presentation/container/Authen/LogIn/Splash.view'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from './src/presentation/navigation/stack/Navigation'

const Stack = createStackNavigator<MainStackParamList>();


const App = () => {
  return (
    // <LogIn/>
    // <LogInOTP/>
    // <Splash/>
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name='Splash' component={Splash}/>
          <Stack.Screen name='LogIn' component={LogIn}/>
          <Stack.Screen name='LogInOTP' component={LogInOTP}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})