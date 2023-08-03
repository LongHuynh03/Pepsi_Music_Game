import { StyleSheet, Text, View, ImageBackground, ScrollView, Dimensions, Image, FlatList } from 'react-native'
import React from 'react'
import Background from '../../../../component/background/Background'
import { Colors } from '../../../../resource/value/Colors'
import Header from '../../../../component/header/Header'
import { CARD_PEPSI_1, CARD_PEPSI_2, CARD_PEPSI_3, CARD_PEPSI_4, CARD_PEPSI_5, ICON_LEFTARROW } from '../../../../../../assets'
import BeatNewItem, { ItemBeatProps } from './BeatNew.item'
import { MainStackScreenProps } from '../../../../navigation/stack/StackNavigation'
import { BeatListStackScreenProps } from '../../../../navigation/stack/BeatListNavigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

const DATA: ItemBeatProps[] = [
    {
        id: 1,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_1
    },
    {
        id: 2,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_2
    },
    {
        id: 3,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_3
    },
    {
        id: 4,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_4
    },
    {
        id: 5,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_5
    },
    {
        id: 6,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_3
    },
    {
        id: 7,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_5
    },
    {
        id: 8,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_4
    },
    {
        id: 9,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_2
    },
    {
        id: 10,
        name: 'Tiền nhiều để làm gì',
        des: 'GDucky ft.Lưu Hiền Trinh',
        image: CARD_PEPSI_1
    },
]

const History: React.FC<BeatListStackScreenProps<'History'>> = ({navigation, route}) => {

    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Đã thu gần đây</Text>
            </View>
        )
    }

    const goBack = () => {
        navigation.navigate('BeatList');
    };

    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={
                        <AntDesignIcon name = "arrowleft" size={20} color={Colors.WHITE}/>
                    }
                    leftHeader={goBack}
                    centerHeader={centerHeader()} />
                <FlatList
                    data={DATA}
                    renderItem={
                        ({ item }) => <BeatNewItem
                            id={item.id} name={item.name} des={item.des} image={item.image}
                        />}
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </Background>

    )
}

export default History
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
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


})