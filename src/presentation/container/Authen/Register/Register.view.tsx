import { Dimensions, Alert, Image, TextInput, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import Button from '../../../component/button/Button'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import { BACKGROUND, BACKGROUND_BOOTOM_TAB, ICON_HOME, LOGO_PEPSI } from '../../../../../assets'
import { RegisterField } from '../../../component/input/TextField'
import Form from '../../../component/form/Form'
import { MainStackScreenProps } from '../../../navigation/stack/StackNavigation'
import Background from '../../../component/background/Background'
import { Users } from '../../../../core/model/User'
import { rtdb } from '../../../../core/api/url/RealTimeDB'
import auth from '@react-native-firebase/auth'


const Register: React.FC<MainStackScreenProps<'Register'>> = ({ navigation, route }) => {

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [listUser, setlistUser] = useState<Users[]>([]);


  const [isHas, setIsHas] = useState(false);

  const logIn = () => {
    navigation.navigate('LogIn');
  }

  useEffect(() => {

    const getUsers = async () => {
      const getUsers = rtdb.ref('users').once('value');
      let list: Users[] = [];
      await getUsers.then((snapshot: any) => {
        snapshot.forEach((item: any) => {
          list.push(item.val());
        })
        // console.log(list);
        setlistUser(list);
      });
    }

    getUsers();

    return () => { }
  }, [])



  const complete = () => {
    console.log(phone + name);
    setIsHas(false);
    if (!phone) {
      Alert.alert('Please enter your phone');
    }
    else if (!name) {
      Alert.alert('Please enter your name');
    }
    else {
      console.log("okkk")
      console.log(listUser)
      
      for (let i = 0; i < listUser.length; i++) {
        if (listUser.at(i)?.phone === phone) {
          console.log("111")
          setIsHas(true);
          Alert.alert('This number is already in use');
          setPhone('')
          return;
        }
        else if (listUser.at(i)?.name === name) {
          console.log("2222")
          setIsHas(true);
          Alert.alert('This name is already in use');
          setName('')
          return;
        }
      }
      if (!isHas) {
        navigation.navigate('LogInOTP', {
          phone,
          name,
          type: false
        });
      }
    }
  }


  return (
    <ScrollView>
      <Background>
        <View style={styles.container} >
          <View style={styles.header}>
            <Image source={LOGO_PEPSI} style={styles.image} />
          </View>
          <Form>
            <RegisterField
              inputProps_1={{
                onChangeText(text) {
                  setPhone(text)
                },
                value: phone
              }}
              inputProps_2={{
                onChangeText(text) {
                  setName(text)
                },
                value: name
              }} />
          </Form>
          <Button
            containerStyle={styles.buttonLogIn}
            title='Lấy mã OTP'
            onPress={complete} />
          <View style={styles.viewOr}>
            <View style={styles.line} />
            <Text style={styles.textOr}>hoặc</Text>
            <View style={styles.line} />
          </View>
          <Button
            containerStyle={styles.buttonRegister}
            title='Đăng nhập'
            onPress={logIn}
            titleStyle={styles.title} />
        </View>
      </Background>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
  },
  header: {
    marginVertical: Dimensions.get('screen').width * 0.13,
  },
  image: {
    resizeMode: 'contain',
    height: 48
  },
  buttonLogIn: {
    width: '90%',
    height: '5.4%',
    marginTop: '10%',
  },
  buttonRegister: {
    width: '90%',
    height: '5.4%',
    backgroundColor: Colors.BACKGROUND_FORM,
  },
  title: {
    color: Colors.WHITE,
  },
  viewOr: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '8%',
  },
  line: {
    width: '45%',
    borderTopWidth: 0.5,
    borderColor: Colors.WHITE
  },
  textOr: {
    width: '10%',
    textAlign: 'center',
    fontWeight: '700',
    color: Colors.WHITE
  },
})