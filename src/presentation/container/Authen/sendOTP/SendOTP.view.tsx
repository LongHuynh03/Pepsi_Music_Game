import { StyleSheet, Text, View, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import Background from '../../../component/background/Background'
import Header from '../../../component/header/Header'
import Form from '../../../component/form/Form'
import { LogInField, OTPField } from '../../../component/input/TextField'
import Button from '../../../component/button/Button'
import { Colors } from '../../../resource/value/Colors'
import { LOGO_PEPSI } from '../../../../../assets'
import TextTitle from '../../../component/text/TextTitle'
import { MainStackScreenProps } from '../../../navigation/stack/StackNavigation'

const LogInOTP: React.FC<MainStackScreenProps<'LogInOTP'>> = ({ navigation, route }) => {

  const submit = () => {
    navigation.navigate('Home');
  }

  return (
    <ScrollView>
      <Background>
        <View style={styles.container} >
          <View style={styles.header}>
            <Image source={LOGO_PEPSI} style={styles.image} />
          </View>
          <Form>
            <OTPField />
          </Form>
          <Button
            containerStyle={styles.buttonLogIn}
            title='Xác nhận'
            onPress={submit} />
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