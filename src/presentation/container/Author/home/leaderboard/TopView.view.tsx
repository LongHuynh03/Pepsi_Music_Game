import { StyleSheet, Text, View, FlatList, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import ItemRanking, { ItemTopViewProps } from './TopView.item'
import { CARD_PEPSI_1, CARD_PEPSI_2, CARD_PEPSI_3, CARD_PEPSI_4, CARD_PEPSI_5 } from '../../../../../../assets'
import Background from '../../../../component/background/Background';
import Header from '../../../../component/header/Header';
import Icon from 'react-native-vector-icons/Octicons';
import { Colors } from '../../../../resource/value/Colors';


const DATA: ItemTopViewProps[] = [
    {
        id: 1,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_1,
        like: 1000,
        view: 1000,
    },
    {
        id: 2,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_2,
        like: 1000,
        view: 1000,
    }, {
        id: 3,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_3,
        like: 1000,
        view: 1000,
    }, {
        id: 4,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_4,
        like: 1000,
        view: 1000,
    }, {
        id: 5,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_5,
        like: 1000,
        view: 1000,
    }, {
        id: 6,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_1,
        like: 1000,
        view: 1000,
    }, {
        id: 7,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_2,
        like: 1000,
        view: 1000,
    }, {
        id: 8,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_3,
        like: 1000,
        view: 1000,
    }, {
        id: 9,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_4,
        like: 1000,
        view: 1000,
    }, {
        id: 10,
        title: "Đom Đóm",
        author: "Jack",
        image: CARD_PEPSI_5,
        like: 1000,
        view: 1000,
    },

];

const TopView = () => {
    const goBack = () => {
        // navigation.navigate('Record');
    }
    const goNotification = () => {
        console.log(123);
    }

    const centerHeader = () => {
        return (
            <Text style={styles.textHeader}>Bảng xếp hạng</Text>
        )
    };

    return (
        <Background>
            {/* <Header
                iconLeft={
                    <Icon name='home' size={20} color={Colors.WHITE} />
                }
                leftHeader={goBack}
                centerHeader={centerHeader()}
                iconRight={
                    <Icon name='bell' size={20} color={Colors.WHITE} />
                }
                rightHeader={goNotification}
            /> */}
            <View style={styles.container}>
                {/* <View style={styles.toptab}>
                    <Text style={styles.texttab}>Video có lượt tương tác nhiều nhất</Text>
                </View> */}
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <ItemRanking
                            id={item.id}
                            title={item.title}
                            author={item.author}
                            image={item.image}
                            like={item.view}
                            view={item.view}
                            />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

        </Background>
    )
}

export default TopView

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
    },
    header_1: {
        marginTop: Dimensions.get('window').height * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toptab: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.05,
        marginVertical: Dimensions.get('screen').height * 0.015,
        backgroundColor: Colors.BACKGROUND_MIC
    },
    texttab: {
        fontFamily: 'Monterrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
        paddingVertical: Dimensions.get('screen').width * 0.02,
    },
})