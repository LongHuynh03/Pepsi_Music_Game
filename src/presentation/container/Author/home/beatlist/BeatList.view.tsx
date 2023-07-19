import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../../../../component/background/Background'
import Header from '../../../../component/header/Header'
import { ICON_HOME, ICON_NOTIFICATION } from '../../../../../../assets'
import { Colors } from '../../../../resource/value/Colors'
import Icon from 'react-native-vector-icons/Entypo'

const BeatList = () => {

  const centerHeader = () => {
    return (
      <View style={styles.header_1}>
        <Text style={styles.textHeader}>Beat list</Text>
      </View>
    )
  }

  const goBack = () => { };

  const goNotification = () => { };

  return (
    <Background>
      <Header
        iconLeft={ICON_HOME}
        leftHeader={goBack}
        centerHeader={centerHeader()}
        iconRight={ICON_NOTIFICATION}
        rightHeader={goNotification}
      />
        <Icon name="rocket" color="#eee" size={30} />

    </Background>
  )
}

export default BeatList

const styles = StyleSheet.create({
  header_1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.WHITE,
    textAlign: 'center',
  },
})