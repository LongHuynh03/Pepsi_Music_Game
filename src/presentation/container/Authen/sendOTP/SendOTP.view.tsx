import { StyleSheet, ToastAndroid, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import Background from '../../../component/background/Background'
import Header from '../../../component/header/Header'
import Form from '../../../component/form/Form'
import { LogInField, OTPField } from '../../../component/input/TextField'
import Button from '../../../component/button/Button'
import { Colors } from '../../../resource/value/Colors'
import { LOGO_PEPSI } from '../../../../../assets'
import TextTitle from '../../../component/text/TextTitle'
import { MainStackScreenProps } from '../../../navigation/stack/StackNavigation'
import { rtdb } from '../../../../core/api/url/RealTimeDB'
import { UserRespone } from '../../../../core/model/UserRespone'
import { Users } from '../../../../core/model/User'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, userSelecter } from '../../../share-state/redux/reducers/userReducer'
import { addStatus } from '../../../share-state/redux/reducers/statusReducer'

const LogInOTP: React.FC<MainStackScreenProps<'LogInOTP'>> = ({ navigation, route }) => {

  const dispatch = useDispatch();

  const name = route?.params?.name;
  const phone = route?.params?.phone;
  const type = route?.params?.type;

  console.log(type)

  const [falseOTP, setFalseOTP] = useState(false);
  const [status, setStatus] = useState(type);

  const [code_1, setCode_1] = useState('');
  const [code_2, setCode_2] = useState('');
  const [code_3, setCode_3] = useState('');
  const [code_4, setCode_4] = useState('');

  const complete = async () => {
    const getUserKey = await rtdb.ref('users')
      .once('value', (value: any) => {
        value.forEach((data: any) => {
          if (data.val().phone == phone) {
            dispatch(addUser({
              keyUser: data.key,
              phone: data.val().phone,
              name: data.val().name,
              image: data.val().image,
              react: data.val().react,
              video: data.val().video,
            }))
          }
        })
      }).then(() => {
        if (!type) {
          ToastAndroid.show("Register", ToastAndroid.SHORT);
          navigation.navigate('Instruct');
        }
        else{
          ToastAndroid.show("LogIn", ToastAndroid.SHORT);
          dispatch(addStatus({
            status: type,
          }))
        }
      });
  }

  const clickRegister = async () => {
    const code = code_1.toString() + code_2.toString() + code_3.toString() + code_4.toString();
    console.log(code);
    if (code != '1912') {
      setFalseOTP(true);
    }
    else {
      console.log('haha')
      if (type) {
        complete();
      }
      else {
        const newUser  = rtdb.ref('users').push();
        const userNew: Users = {
          name: name ?? 'User',
          phone: phone ?? '0000',
          image: '123',
          react: 0,
          video: 0,
        }
        await newUser.set(userNew)
          .then(() => {
            complete();
          });
        //key user
        console.log('New record key:', newUser.key);
      }
    }

  };

  return (
    <ScrollView>
      <Background>
        <View style={styles.container} >
          <View style={styles.header}>
            <Image source={LOGO_PEPSI} style={styles.image} />
          </View>
          <Form>
            <OTPField
              status={falseOTP}
              inputProps_1={{
                onChangeText(text) {
                  setCode_1(text)
                },
              }}
              inputProps_2={{
                onChangeText(text) {
                  setCode_2(text)
                },
              }}
              inputProps_3={{
                onChangeText(text) {
                  setCode_3(text)
                },
              }}
              inputProps_4={{
                onChangeText(text) {
                  setCode_4(text)
                },
              }} />
          </Form>
          <Button
            containerStyle={styles.buttonLogIn}
            title='Xác nhận'
            onPress={clickRegister} />
        </View>
      </Background>
    </ScrollView>
  )
}

export default LogInOTP

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
})