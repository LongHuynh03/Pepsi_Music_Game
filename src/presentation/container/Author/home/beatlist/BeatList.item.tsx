import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../../../resource/value/Colors'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'

export interface ItemBeatListProps {
    id: number,
    title: string,
    view: number,
    like: number,
    image: any
}

interface Item {
    item: any,
}


const ItemBeatList: React.FC<Item> = (props) => {

    const { item } = props;

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.boxImage}>
                    <Image source={{uri : item.image}} style={styles.image} />
                </View>
                <View style={styles.boxContent}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.boxButton}>
                        <View style={styles.boxReact}>
                            <View style={styles.view_left}>
                                <AntDesignIcon name="eyeo" size={6} color={Colors.WHITE} />
                                <Text style={styles.txtReact}>{item.view}</Text>
                            </View>
                            <View style={styles.view_right}>
                                <AntDesignIcon name='hearto' color={Colors.WHITE} size={6} />
                                <Text style={styles.txtReact}>{item.like}</Text>
                            </View>
                        </View>
                        <View style={styles.boxMic}>
                            <View style={styles.mic}>
                                <FontAwesome5Icon name="microphone-alt" size={15} color={Colors.WHITE} />
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
    },
    item: {
        margin: Dimensions.get('screen').width * 0.03,
        width: Dimensions.get('screen').width * 0.4 + 4,
        height: Dimensions.get('screen').height * 0.22,
        justifyContent: 'space-between',
        padding: 3,
        borderRadius: 8,
        backgroundColor: Colors.BACKGROUND_BOX_BEATLIST
    },
    boxImage: {

    },
    image: {
        width: Dimensions.get('screen').width * 0.395,
        height: Dimensions.get('screen').height * 0.15,
        borderRadius: 10,
    },
    boxContent: {
        width: '100%',
        marginTop: "1%",
    },
    title: {
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 18,
        color: Colors.WHITE
    },
    boxButton: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    boxReact: {
        flexDirection: 'row',
        width: "70%",
    },
    view_left: {
        width: '40%',
        flexDirection: 'row',
        backgroundColor: Colors.RED_BAR,
        borderTopStartRadius: 4,
        borderBottomStartRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_right: {
        width: '40%',
        flexDirection: 'row',
        backgroundColor: Colors.BACKGROUND_HEART,
        borderTopEndRadius: 4,
        borderBottomEndRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        resizeMode: 'contain',
        width: 10
    },
    txtReact: {
        fontSize: 8,
        color: Colors.WHITE
    },
    boxMic: {
        justifyContent: 'center',
        alignItems: 'flex-end',
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