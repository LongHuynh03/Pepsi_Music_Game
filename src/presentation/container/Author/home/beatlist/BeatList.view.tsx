import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import Background from '../../../../component/background/Background'
import Header from '../../../../component/header/Header'
import { BANER_1, ICON_HOME, ICON_MUSIC, ICON_NOTIFICATION } from '../../../../../../assets'
import { Colors } from '../../../../resource/value/Colors'
import Button from '../../../../component/button/Button'

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

  const goNewBeat = () => { };

  const goBestBeat = () => { };

  const goHistory = () => { };

  const goPropose = () => { };

  return (
    <Background>
      <Header
        iconLeft={ICON_HOME}
        leftHeader={goBack}
        centerHeader={centerHeader()}
        iconRight={ICON_NOTIFICATION}
        rightHeader={goNotification}
      />
      <ScrollView>
        <Image source={BANER_1} style={styles.imageBanner} />
        <View style={styles.boxButton}>
          <Button containerStyle={styles.btn}
            title='Beat mới nhất'
            titleStyle={styles.titleStyle}
            icon={ICON_MUSIC}
            onPress={goBestBeat} />
          <Button containerStyle={styles.btn}
            title='Beat mới nhất'
            titleStyle={styles.titleStyle}
            icon={ICON_MUSIC}
            onPress={goBestBeat} />
        </View>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Đã thu gần đây</Text>
          <Text style={styles.seeAll}>Xem tất cả {'>'}</Text>
        </View>
      </ScrollView>
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
  imageBanner: {

  },
  boxButton: {

  },
  btn: {

  },
  titleStyle: {

  },
  boxTitle: {

  },
  title: {},
  seeAll: {},
})