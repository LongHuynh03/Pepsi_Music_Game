import { StyleSheet, Text, View, TextInputProps, TextInput, Touchable, TouchableOpacity, StyleProp } from 'react-native'
import React, { useRef } from 'react'
import LogIn from '../../container/Authen/LogIn/LogIn.view'
import Button from '../button/Button'
import { Colors } from '../../resource/value/Colors';

export interface LogInFieldProps {
  inputProps?: TextInputProps;
}

export interface RegisterFieldProps {
  inputProps_1?: TextInputProps;
  inputProps_2?: TextInputProps;
}

export interface OTPFieldProps {
  inputProps_1?: TextInputProps;
  inputProps_2?: TextInputProps;
  inputProps_3?: TextInputProps;
  inputProps_4?: TextInputProps;
  status?: boolean;
}

export const LogInField: React.FC<LogInFieldProps> = (props) => {
  const { inputProps } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput {...inputProps}
        style={styles.textInputLogin}
        placeholder='Nhập số điện thoại' />
    </View>
  )
}


export const RegisterField: React.FC<RegisterFieldProps> = (props) => {
  const { inputProps_1, inputProps_2 } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng ký</Text>
      <TextInput {...inputProps_1}
        style={styles.textInputRegister}
        placeholder='Nhập số điện thoại' />
      <TextInput {...inputProps_2}
        style={styles.textInputRegister}
        placeholder='Nghệ danh' />
    </View>
  )
}

export const OTPField: React.FC<OTPFieldProps> = (props) => {
  const { inputProps_1, inputProps_2, inputProps_3, inputProps_4, status } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title_1}>Nhập OTP</Text>
      <Text style={styles.des}>Nhập OTP vừa được gửi về máy bạn</Text>
      <View style={styles.boxOTP}>
        <TextInput {...inputProps_1}
          style={!status? styles.textInputOTP : [styles.textInputOTP, styles.textInputOTPFalse]}
          maxLength={1}
          inputMode='decimal'
          autoFocus />
        <TextInput {...inputProps_2}
          style={!status? styles.textInputOTP : [styles.textInputOTP, styles.textInputOTPFalse]}
          maxLength={1}
          inputMode='decimal' />
        <TextInput {...inputProps_3}
          style={!status? styles.textInputOTP : [styles.textInputOTP, styles.textInputOTPFalse]}
          maxLength={1}
          inputMode='decimal' />
        <TextInput {...inputProps_4}
          style={!status? styles.textInputOTP : [styles.textInputOTP, styles.textInputOTPFalse]}
          maxLength={1}
          inputMode='decimal' />
      </View>
      <Text style={[styles.des, { marginBottom: '0%' }]}>Bạn chưa nhận được mã?</Text>
      <TouchableOpacity>
        <Text style={styles.textbtn}>Gửi lại mã</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '700',
    lineHeight: 36,
    marginBottom: '5%',
  },
  textInputLogin: {
    width: 300,
    height: 50,
    color: 'black',
    backgroundColor: 'white',
    fontWeight: '700',
    borderRadius: 6,
  },
  textInputRegister: {
    width: 300,
    height: 40,
    color: 'black',
    backgroundColor: 'white',
    fontWeight: '700',
    borderRadius: 6,
    marginBottom: '3%',
  },
  title_1: {
    color: 'white',
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: '700',
    lineHeight: 36,
  },
  des: {
    color: 'white',
    fontSize: 14,
    lineHeight: 36,
    marginBottom: '5%',
  },
  boxOTP: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: '5%',
  },
  textInputOTP: {
    width: 50,
    height: 50,
    borderRadius: 6,
    backgroundColor: Colors.WHITE,
    textAlign: 'center',
    borderWidth: 0,
    borderColor: Colors.WHITE,
    color: Colors.BLACK
  },
  textInputOTPFalse: {
    borderWidth: 2,
    borderColor: Colors.RED_BAR,
    color: Colors.RED_BAR
  },
  textbtn: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
  },
})