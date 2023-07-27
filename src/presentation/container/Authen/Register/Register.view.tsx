import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../../component/button/Button'
import { Colors } from '../../../resource/value/Colors'
import Header from '../../../component/header/Header'
import { BACKGROUND, BACKGROUND_BOOTOM_TAB, ICON_HOME, LOGO_PEPSI } from '../../../../../assets'
import { LogInField, RegisterField } from '../../../component/input/TextField'
import Form from '../../../component/form/Form'
import { MainStackScreenProps } from '../../../navigation/stack/StackNavigation'
import Background from '../../../component/background/Background'


const Register: React.FC<MainStackScreenProps<'Register'>> = ({ navigation, route }) => {

  const [edt, setedt] = React.useState<string>('');
  console.log(edt)

  const logIn = () => {
    navigation.navigate('LogIn');
  }

  const logInOTP = () => {
    navigation.navigate('LogInOTP');
  }

  return (
    <ScrollView>
      <Background>
        <View style={styles.container} >
          <View style={styles.header}>
            <Image source={LOGO_PEPSI} style={styles.image} />
          </View>
          <Form>
            <RegisterField />
          </Form>
          <Button
            containerStyle={styles.buttonLogIn}
            title='Lấy mã OTP'
            onPress={logInOTP} />
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