import { Dimensions, Image, ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../../../component/button/Button'
import { Colors } from '../../../resource/value/Colors'
import { LOGO_PEPSI } from '../../../../../assets'
import { LogInField, RegisterField } from '../../../component/input/TextField'
import Form from '../../../component/form/Form'
import { MainStackScreenProps } from '../../../navigation/stack/StackNavigation'
import Background from '../../../component/background/Background'
import { rtdb } from '../../../../core/api/url/RealTimeDB'
import { Users } from '../../../../core/model/User'
import { ToastAndroid } from 'react-native'


const LogIn: React.FC<MainStackScreenProps<'LogIn'>> = ({ navigation, route }) => {
  // const LogIn = () => {

  const [phone, setPhone] = useState('');
  const [listUser, setlistUser] = useState<Users[]>([]);

  const [isHas, setIsHas] = useState(false);

  useEffect(() => {

    const getUsers = async () => {
      const getUsers = rtdb.ref('/Users').once('value');
      let list: Users[] = [];
      await getUsers.then((snapshot: any) => {
        snapshot.forEach((item: any) => {
          if (item != null) {
            list.push(item.val());
            console.log(item.val());
          }
        })
        setlistUser(list);
      });
    }

    getUsers();

    return () => { }
  }, [])

  const logIn = () => {
    console.log(listUser)
    if (phone) {
      for (let i = 0; i < listUser.length; i++) {
        if (listUser.at(i)?.phone === phone) {
          console.log("111")
          setIsHas(true);
          console.log("okkk")
          navigation.navigate('LogInOTP', {
            phone,
            type: true
          });
          break;
        }
      }
      // if (isHas) {
      //   console.log("okkk")
      //   navigation.navigate('LogInOTP', {
      //     phone,
      //     type: true
      //   });
      // } else {
      //   ToastAndroid.show("Số đt không được đăng kí", ToastAndroid.SHORT);
      // }
    }
    else {
      Alert.alert('Please enter your phone number');
    }

  }


  const register = () => {
    navigation.navigate('Register');
  }


  return (
    <ScrollView>
      <Background>
        <View style={styles.container} >
          <View style={styles.header}>
            <Image source={LOGO_PEPSI} style={styles.image} />
          </View>
          <Form>
            <LogInField
              inputProps={{
                onChangeText(text) {
                  setPhone(text);
                },
              }} />
          </Form>
          <Button
            containerStyle={styles.buttonLogIn}
            title='Đăng nhập'
            onPress={logIn} />
          <View style={styles.viewOr}>
            <View style={styles.line} />
            <Text style={styles.textOr}>hoặc</Text>
            <View style={styles.line} />
          </View>
          <Button
            containerStyle={styles.buttonRegister}
            title='Đăng ký'
            onPress={register}
            titleStyle={styles.title} />
        </View>
      </Background>
    </ScrollView>
  )
}

export default LogIn

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