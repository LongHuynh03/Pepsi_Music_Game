import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { AVATAR_RANK_4, IMAGE_RANK_4 } from '../../../../../../assets'
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../../resource/value/Colors'

export interface ItemRankingProps {
    id: number,
    rank: number,
    name: string,
    image: any,
    view: number,
    navigation: any,
}


const ItemRanking: React.FC<ItemRankingProps> = (props) => {

    const { id, rank, name, image, view, navigation } = props;

    const onClick = () => {
        navigation.navigate('OrtherProfile');
    }

    return (
        <View style={{}}>
            <TouchableOpacity style={styles.item} onPress={onClick}>
                <View style={styles.borderRank} >
                    <Text style={styles.txtRank} >{rank}</Text>
                    <Image source={IMAGE_RANK_4} style={styles.imgBorderRank} />
                </View>
                <View style={styles.boxContent} >
                    <Image source={image} style={styles.imgAvatar} />
                    <View style={styles.boxInfor}>
                        <Text style={styles.txtName}>{name}</Text>
                        <View style={styles.boxView}>
                            <Icon name='eyeo' size={10} color={Colors.BLUE_CARD} />
                            <Text style={styles.txtView}>{view}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default ItemRanking

const styles = StyleSheet.create({
    item: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height * 0.1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    borderRank: {
    },
    txtRank: {
        position: 'absolute',
        zIndex: 1,
        color: Colors.WHITE,
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
    },
    imgBorderRank: {},
    boxContent: {
        flexDirection: 'row',
        width: "90%",
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgAvatar: {
        // width: "100%",
        zIndex: 1
    },
    boxInfor: {
        width: "80%",
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: Colors.DARK_BLUE_MODE,
        marginStart: "-10%",
        borderRadius: 8,
        borderColor: Colors.WHITE,
    },
    txtName: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.WHITE,
        marginStart: '20%',
    },
    boxView: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: Colors.WHITE,
        padding: 3,
        marginEnd: "5%",
    },
    txtView: {
        fontSize: 11,
        fontWeight: '700',
        color: Colors.BLUE_PEPSI,
    }
})