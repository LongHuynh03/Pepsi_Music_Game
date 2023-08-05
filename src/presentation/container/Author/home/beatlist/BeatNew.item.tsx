import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../resource/value/Colors'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import FeatherIcon from 'react-native-vector-icons/Feather'

export interface ItemBeatProps {
    id: number,
    name: string,
    des: string,
    image: any,
}

interface Item {
    item: any,
}

const BeatNewItem: React.FC<Item> = (props) => {

    const {item} = props

    return (
        <View>
            <TouchableOpacity style={styles.card}>
                <View style={styles.boxImage}>
                    <Image source={{uri:item.image}} style={styles.image} />
                </View>
                <View style={styles.group}>
                    <Text style={styles.baihat}>{item.name}</Text>
                    <Text style={styles.casi}>{item.author}</Text>
                    <View style={styles.group1}>
                        <FeatherIcon name = "mic" size = {9} color={Colors.WHITE}/>
                        <Text style={styles.soluong}>9.023 lượt cover</Text>
                    </View>
                </View>
                <View style = {styles.boxMic}>
                    <View style = {styles.boxMic_1}>
                        <FontAwesome5Icon name = "microphone-alt" size = {20} color={Colors.WHITE}/>
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
        height: Dimensions.get('window').height * 0.08,
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
    soluong: {
        fontFamily: 'Montserrat',
        fontSize: 8,
        fontWeight: '500',
        lineHeight: 9.6,
        color: Colors.WHITE,
        marginLeft: '3%',
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