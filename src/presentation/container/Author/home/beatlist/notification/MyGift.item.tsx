import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../../../resource/value/Colors';

export interface ItemMyGiftProps {
    item: any;
}

const ItemGift: React.FC<ItemMyGiftProps> = (props) => {
// const ItemGift = () => {

    const {item} = props;

    const [buttonColor, setButtonColor] = React.useState(Colors.BLUE_1_500);
    const [buttonText, setButtonText] = React.useState('Chưa nhận');

    const onPressButton = () => {
        if (buttonText == 'Chưa nhận' || buttonColor == Colors.BLUE_1_500) {
            setButtonText('Đã nhận');
            setButtonColor(Colors.RED_BAR);
        } else {
            setButtonText('Chưa nhận');
            setButtonColor(Colors.BLUE_1_500);
        };
    };
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style = {styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.des}>{item.des}</Text>
                    <TouchableOpacity style={[styles.button, { backgroundColor: buttonColor }]} onPress={onPressButton}>
                        <Text style={[styles.textbtn, { color: buttonText === 'Chưa nhận' ? '#fff' : '#fff' }]}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default ItemGift

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: Dimensions.get('screen').width * 0.4,
        height: Dimensions.get('screen').height * 0.27,
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        borderColor: Colors.WHITE,
        borderRadius: 8,
        borderWidth: 1,
        marginStart: Dimensions.get('screen').width * 0.05,
        marginTop: Dimensions.get('screen').width * 0.05,
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.37,
        height: Dimensions.get('screen').width * 0.37,
    },
    content: {
        width: "100%",
        marginLeft: Dimensions.get('screen').width * 0.015,
    },
    title: {
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 18,
        color: Colors.BLUE_1_500,
        marginBottom: Dimensions.get('screen').height * 0.005,
        marginTop: Dimensions.get('screen').height * 0.009,
    },
    des: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: Colors.BLUE_1_400,
        marginBottom: Dimensions.get('screen').height * 0.005,
    },
    button: {
        width: Dimensions.get('screen').width * 0.2,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    textbtn: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 13.091,
        color: Colors.WHITE,
    },
})