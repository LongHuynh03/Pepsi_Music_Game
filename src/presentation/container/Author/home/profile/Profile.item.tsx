import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../resource/value/Colors'
import { CARD_PEPSI_1, ICON_EYE, ICON_HEART, ICON_SHARE } from '../../../../../../assets'
import Icon from 'react-native-vector-icons/AntDesign'

export interface ItemProfileProps {
    id: number,
    title: string,
    view: string,
    like: string,
    image: any,
}

const ItemProfile: React.FC<ItemProfileProps> = (props) => {
    const { id, title, view, like, image } = props;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.item}>
                <View style={styles.boxNew}>
                    <Text style={styles.new}>Mới</Text>
                </View>
                <View style={styles.boxPlay}>
                    <Icon name = "caretright" size = {20} color = {Colors.WHITE}/>
                </View>
                <View style={styles.card}>
                    <View>
                        <Image source={image} style={styles.image} />
                        <Text style={styles.text}>{title}</Text>
                    </View>
                </View>
                <View style={styles.gr}>
                    <View style={styles.boxView}>
                        <View style={styles.gr1}>
                            <Icon name="eyeo" size={8} color="white" />
                            <Text style={styles.view}>{view}</Text>
                        </View >
                        <View style={styles.gr2}>
                            <Icon name="hearto" size={8} color="white" />
                            <Text style={styles.like}>{like}</Text>
                        </View>
                    </View>
                    <View style={styles.boxReact}>
                        <TouchableOpacity style={styles.btnReact}>
                            <Icon name='download' color='white' size={13} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnReact}>
                            <Icon name='sharealt' color='white' size={13} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default ItemProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxNew: {
        position: 'absolute',
        zIndex: 1,
        width: 40,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.RED_BAR,
        borderRadius: 2,
        margin: 10
    },
    new: {
        fontSize: 10,
        fontWeight: '700',
        color: Colors.WHITE,
    },
    boxPlay: {
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        top: "40%",
        
    },
    item: {
        marginTop: Dimensions.get('screen').width * 0.03,
        width: Dimensions.get('screen').width * 0.42,
        height: Dimensions.get('screen').height * 0.23,
        justifyContent: 'space-between',
        padding: 3,
        borderRadius: 8,
        backgroundColor: Colors.BACKGROUND_BOX_BEATLIST,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('screen').width * 0.4,
        height: Dimensions.get('screen').height * 0.165,
        borderRadius: 6,

    },
    text: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 18,
        color: Colors.WHITE,
        marginTop: Dimensions.get('screen').width * 0.01,

    }, gr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxView: {
        width: "51%",
        flexDirection: 'row',
        alignItems: 'center',
    },
    gr1: {
        width: '50%',
        flexDirection: 'row',
        backgroundColor: Colors.RED_BAR,
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gr2: {
        width: '50%',
        flexDirection: 'row',
        backgroundColor: Colors.BACKGROUND_HEART,
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view: {
        fontSize: 10,
        color: Colors.WHITE,
    },
    like: {

        fontSize: 10,
        color: Colors.WHITE,
    },
    boxReact: {
        width: "50%",
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    btnReact: {
        borderWidth: 1,
        marginHorizontal: "2%",
        padding: "5%",
        borderEndWidth: 1,
        borderColor: Colors.WHITE,
        borderRadius: 4,
        backgroundColor: Colors.BACKGROUND_MIC,
    },

})