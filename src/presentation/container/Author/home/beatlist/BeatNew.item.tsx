import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../resource/value/Colors'
import { CARD_PEPSI_1, ICON_MIC_1, ICON_MIC_2 } from '../../../../../../assets'

export interface ItemBeatProps {
    id: number,
    name: string,
    des: string,
    image: any,
}

const BeatNewItem: React.FC<ItemBeatProps> = (props) => {

    const {id, name, des, image} = props

    return (
        <View>
            <TouchableOpacity style={styles.card}>
                <View style={styles.boxImage}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.group}>
                    <Text style={styles.baihat}>{name}</Text>
                    <Text style={styles.casi}>{des}</Text>
                    <View style={styles.group1}>
                        <Image source={ICON_MIC_1} style={styles.icon_mic} />
                        <Text style={styles.soluong}>9.023 lượt cover</Text>
                    </View>
                </View>
                <View style = {styles.boxMic}>
                    <View style = {styles.boxMic_1}>
                        <Image source={ICON_MIC_2} style={styles.mic} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default BeatNewItem

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.085,
        backgroundColor: Colors.DARK_BLUE_MODE, //rgba(19, 66, 125, 0.7)
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.WHITE,
        marginTop: Dimensions.get('window').height * 0.03,
    },
    boxImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "19%",
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('window').height * 0.08,
    },
    group: {
        width: "61%",
        paddingStart:"5%",
        justifyContent: "center",
    },
    baihat: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
    },
    casi: {
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
        color: Colors.WHITE,
    },
    group1: {
        marginLeft: '1%',
        flexDirection: 'row',
        backgroundColor: Colors.BACKGROUND_VIEW, //#104CE7
        width: Dimensions.get('window').width * 0.21,
        height: Dimensions.get('window').height * 0.02,
        borderRadius: 4,
        marginTop: Dimensions.get('window').height * 0.003,
        alignItems: 'center',
    },
    icon_mic: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.02,
        marginLeft: '5%',
    },

    soluong: {
        fontFamily: 'Montserrat',
        fontSize: 8,
        fontWeight: '500',
        lineHeight: 9.6,
        color: Colors.WHITE,
        marginLeft: '3%',
    },
    mic: {
        resizeMode: 'contain',
        height: Dimensions.get('window').height * 0.04,
    },
    boxMic: {
        width: "20%",
        justifyContent: "center",
        alignItems: "center",
    },
    boxMic_1: {
        justifyContent: "center",
        alignItems: "center",
        height: Dimensions.get('window').height * 0.05,
        width: Dimensions.get('window').height * 0.05,
        borderWidth: 1.5,
        borderRadius: 8,
        backgroundColor: Colors.BACKGROUND_MIC, //rgba(255, 255, 255, 0.3)
        borderColor: Colors.WHITE
    },
})