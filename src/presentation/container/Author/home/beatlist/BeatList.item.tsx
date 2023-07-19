import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { CARD_PEPSI_1, ICON_EYE, ICON_HEART, ICON_MIC_2 } from '../../../../../../assets'
import { Colors } from '../../../../resource/value/Colors'
import { height } from '../../../../resource/value/SizeScreen'

const ItemBeatList = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.item}>
        <View style = {styles.boxImage}>
            <Image source = {CARD_PEPSI_1} style = {styles.image} />
        </View>
        <View style = {styles.boxContent}>
            <Text style = {styles.title}>Tiền nhiều để làm gì</Text>
            <View style = {styles.boxButton}>
                <View style = {styles.boxReact}>
                    <View style = {styles.view_left}>
                        <Image source={ICON_EYE} style={styles.icon} />
                        <Text style={styles.txtReact}>11.8K</Text>
                    </View>
                    <View style = {styles.view_right}>
                        <Image source={ICON_HEART} style={styles.icon} />
                        <Text style={styles.txtReact}>10.203</Text>
                    </View>
                </View>
                <View style = {styles.boxMic}>
                    <View style={styles.mic}>
                        <Image source={ICON_MIC_2} style={styles.iconMic}/>
                    </View>
                </View>
            </View>
        </View>
      </View>
    </View>
  )
}

export default ItemBeatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.OVERLAY
    },
    item: {
        borderWidth: 1,
        width: Dimensions.get('screen').width * 0.4+4,
        height: Dimensions.get('screen').height *0.22,
        justifyContent: 'space-between',
        padding: 2,
        borderRadius: 8,
    },
    boxImage: {

    },
    image: {
        width: Dimensions.get('screen').width * 0.395,
        borderRadius: 10,
    },
    boxContent: {
        width: '100%',
    },
    title: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 18,
        color: Colors.WHITE
    },
    boxButton: {
        flexDirection: 'row',
    },
    boxReact: {
        flexDirection: 'row',
        width: "70%",
    },
    view_left: {
        flexDirection: 'row',
    },
    view_right: {
        flexDirection: 'row',
    },
    icon: {
        resizeMode: 'contain',
        width: 14
    },
    txtReact: {
        fontSize: 12,
        color: Colors.WHITE
    },
    boxMic: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
    },
    mic: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
        borderRadius: 4,
        backgroundColor: Colors.BACKGROUND_MIC,
        borderColor: Colors.WHITE,
        borderWidth: 1
    },
    iconMic: {
        resizeMode: 'contain',
        width: 20
    },
})