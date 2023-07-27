import { StyleSheet, Text, View, FlatList, Dimensions, Image, ImageBackground } from 'react-native'
import React from 'react'
import { AVATAR_RANK_1, AVATAR_RANK_2, AVATAR_RANK_3, AVATAR_RANK_4, BACKGROUND_RANK, CARD_PEPSI_1, CARD_PEPSI_2, CARD_PEPSI_3, CARD_PEPSI_4, CARD_PEPSI_5, IMAGE_BUC, IMAGE_RANK_1, IMAGE_RANK_2, IMAGE_RANK_3 } from '../../../../../../assets'
import Background from '../../../../component/background/Background';
import Header from '../../../../component/header/Header';
import Icon from 'react-native-vector-icons/Feather';
import { Colors } from '../../../../resource/value/Colors';
import ItemRanking, { ItemRankingProps } from './Ranking.item';


const DATA: ItemRankingProps[] = [
    {
        id: 1,
        name: 'Janne',
        rank : 4,
        image: AVATAR_RANK_4,
        view: 1000
    },
    {
        id: 2,
        name: 'Janne',
        rank : 5,
        image: AVATAR_RANK_4,
        view: 1000
    },{
        id: 3,
        name: 'Janne',
        rank : 6,
        image: AVATAR_RANK_4,
        view: 1000
    },{
        id: 4,
        name: 'Janne',
        rank : 7,
        image: AVATAR_RANK_4,
        view: 1000
    },{
        id: 5,
        name: 'Janne',
        rank : 8,
        image: AVATAR_RANK_4,
        view: 1000
    },{
        id: 6,
        name: 'Janne',
        rank : 9,
        image: AVATAR_RANK_4,
        view: 1000
    },{
        id: 7,
        name: 'Janne',
        rank : 10,
        image: AVATAR_RANK_4,
        view: 1000
    },{
        id: 8,
        name: 'Janne',
        rank : 11,
        image: AVATAR_RANK_4,
        view: 1000
    },{
        id: 9,
        name: 'Janne',
        rank : 12,
        image: AVATAR_RANK_4,
        view: 1000
    },{
        id: 10,
        name: 'Janne',
        rank : 13,
        image: AVATAR_RANK_4,
        view: 1000
    },
];

const Ranking = () => {
    return (
        <Background>
            <View style={styles.container}>
                <ImageBackground style= {{width: Dimensions.get('screen').width, paddingHorizontal: 22}} source={BACKGROUND_RANK}>
                    <View style={styles.boxTop}>
                        <Text style={styles.txtTop}>Hạng của tôi : <Text style={styles.txtRank}>1000000</Text></Text>
                    </View>
                    <View style={styles.boxRanks}>
                        <View style={styles.boxRank}>
                            <View style={styles.boxRank2}>
                                <Image source={IMAGE_RANK_2} style={styles.imgRank2} />
                                <Text style={styles.textName2}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                            <View style={styles.boxRank1}>
                                <Image source={IMAGE_RANK_1} style={styles.imgRank1} />
                                <Text style={styles.textName1}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                            <View style={styles.boxRank3}>
                                <Image source={IMAGE_RANK_3} style={styles.imgRank3} />
                                <Text style={styles.textName3}>Bruno</Text>
                                <Text style={styles.textView}>1.2tr lượt xem</Text>
                            </View>
                        </View>
                        <Image source={IMAGE_BUC} style={styles.imgBuc} />
                    </View>
                </ImageBackground>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) =>
                        <ItemRanking
                            id ={item.id}
                            name = {item.name}
                            rank = {item.rank}
                            image={item.image}
                            view={item.view} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>

        </Background>
    )
}

export default Ranking

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 22,
    },
    boxTop: {
        borderWidth: 1,
        borderColor: Colors.YELLOW,
        borderRadius: 4,
        backgroundColor: Colors.WHITE,
        padding: 5,
        alignSelf: 'flex-end',
    },
    txtTop: {
        fontWeight: '400',
        fontSize: 12,
        color: Colors.BLUE_PEPSI
    },
    txtRank: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.RED_BAR
    },
    boxRanks: {

    },
    boxRank: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxRank2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    imgRank2: {
    },
    textName2: {
        fontWeight: '500',
        fontSize: 10,
        color: 'rgba(255, 222, 229, 1)'
    },
    textView: {
        fontWeight: '700',
        fontSize: 10,
        color: Colors.WHITE,
        marginTop: 10,
    },
    boxRank1: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgRank1: {},
    textName1: {
        fontWeight: '700',
        fontSize: 12,
        color: Colors.YELLOW
    },
    boxRank3: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 110
    },
    imgRank3: {},
    textName3: {
        fontWeight: '700',
        fontSize: 12,
        color: 'rgba(173, 225, 255, 1)'
    },
    imgBuc: {
        // marginTop: 20,
    },
})