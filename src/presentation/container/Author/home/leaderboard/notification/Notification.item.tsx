import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../../resource/value/Colors';

export interface ItemNotificationProps {
    id: number;
    title: string;
    titleTime: string;
    image: any;
    role: number;
}

interface Item {
    item: any;
    navigation: any;
}

const ItemNotification: React.FC<Item> = (props) => {
    const { item } = props;

    const {navigation} = props;

    // nếu role=1 => trang quà tặng
    // nếu role=0 => trang bài viết
    const changScreen = () => {
        if (item.role == 1) {
            console.log("qt");
            navigation.navigate('MyGift');
        }
        else {
            console.log("bv");
        }
    }

    return (
        <TouchableOpacity style={styles.item} onPress={changScreen}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.gr1}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.titleTime}>{item.time}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ItemNotification

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.WHITE,
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.11,
        backgroundColor: Colors.DARK_BLUE_MODE,
    },
    image: {
        resizeMode: "contain",
        width: Dimensions.get('screen').height * 0.1,
        height: Dimensions.get('screen').height * 0.1,
    },
    gr1: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: Dimensions.get('screen').width * 0.05
    },
    title: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 18,
        color: Colors.WHITE,
    },
    titleTime: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: Colors.WHITE,
    },
})