import { StyleSheet, Text, View, FlatList, Dimensions, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { AVATAR_RANK_1, AVATAR_RANK_2, AVATAR_RANK_3, AVATAR_RANK_4, BACKGROUND_RANK, CARD_PEPSI_1, CARD_PEPSI_2, CARD_PEPSI_3, CARD_PEPSI_4, CARD_PEPSI_5, IMAGE_BUC, IMAGE_RANK_1, IMAGE_RANK_2, IMAGE_RANK_3 } from '../../../../../../assets'
import Background from '../../../../component/background/Background';
import Header from '../../../../component/header/Header';
import Icon from 'react-native-vector-icons/Feather';
import OIcon from 'react-native-vector-icons/Octicons';
import { Colors } from '../../../../resource/value/Colors';
import ItemRanking, { ItemRankingProps } from './Ranking.item';
import TopView from './TopView.view';
import ItemTopView, { ItemTopViewProps } from './TopView.item';
import { RankingStackScreenProps } from '../../../../navigation/stack/RankingNavigation';


const DATA: ItemRankingProps[] = [
    {
        id: 1,
        name: 'Janne',
        rank: 4,
        image: AVATAR_RANK_4,
        view: 1000
    },
    {
        id: 2,
        name: 'Janne',
        rank: 5,
        image: AVATAR_RANK_4,
        view: 1000
    }, {
        id: 3,
        name: 'Janne',
        rank: 6,
        image: AVATAR_RANK_4,
        view: 1000
    }, {
        id: 4,
        name: 'Janne',
        rank: 7,
        image: AVATAR_RANK_4,
        view: 1000
    }, {
        id: 5,
        name: 'Janne',
        rank: 8,
        image: AVATAR_RANK_4,
        view: 1000
    }, {
        id: 6,
        name: 'Janne',
        rank: 9,
        image: AVATAR_RANK_4,
        view: 1000
    }, {
        id: 7,
        name: 'Janne',
        rank: 10,
        image: AVATAR_RANK_4,
        view: 1000
    }, {
        id: 8,
        name: 'Janne',
        rank: 11,
        image: AVATAR_RANK_4,
        view: 1000
    }, {
        id: 9,
        name: 'Janne',
        rank: 12,
        image: AVATAR_RANK_4,
        view: 1000
    }, {
        id: 10,
        name: 'Janne',
        rank: 13,
        image: AVATAR_RANK_4,
        view: 1000
    },
];

const DATATOPVIEW: ItemTopViewProps[] = [
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

const Ranking: React.FC<RankingStackScreenProps<'Ranking'>> = ({navigation,route}) => {

    const [onChoose, setonChoose] = React.useState(1)

    const goBack = () => {
        navigation.goBack();
    }
    const goNotification = () => {
    }

    const centerHeader = () => {
        return (
            <Text style={styles.textHeader}>Nhạc thịnh hành</Text>
        )
    };
    return (
        <Background>
            <Header
                iconLeft={
                    <OIcon name='home' size={20} color={Colors.WHITE} />
                }
                leftHeader={goBack}
                centerHeader={centerHeader()}
                iconRight={
                    <OIcon name='bell' size={20} color={Colors.WHITE} />
                }
                rightHeader={goNotification}
            />
            <View style={styles.boxButton}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={onChoose == 1 ? [styles.btn, styles.btnChoose] : styles.btn} onPress={() => setonChoose(1)}>
                        <Text style={onChoose == 1 ? [styles.txtButton, styles.txtButtonChoose] : styles.txtButton}>Người có lượt tương tác nhiều nhất</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={onChoose == 2 ? [styles.btn, styles.btnChoose] : styles.btn} onPress={() => setonChoose(2)}>
                        <Text style={onChoose == 2 ? [styles.txtButton, styles.txtButtonChoose] : styles.txtButton}>Video có lượt tương tác nhiều nhất</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <View style={styles.container}>
                {
                    onChoose == 1 ?
                        <View style={{ paddingHorizontal: 22 }}>
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
                            <FlatList
                                data={DATA}
                                renderItem={({ item }) =>
                                    <ItemRanking
                                        item={item}
                                        navigation = {navigation}/>}
                                keyExtractor={(item) => item.id.toString()}
                            />
                        </View>
                        :
                        <FlatList
                            data={DATATOPVIEW}
                            renderItem={({ item }) =>
                                <ItemTopView
                                    id={item.id}
                                    title={item.title}
                                    author={item.author}
                                    image={item.image}
                                    like={item.view}
                                    view={item.view}
                                />}
                            keyExtractor={(item) => item.id.toString()}
                            />
                }
            </View>

        </Background>
    )
}

export default Ranking

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 22,
    },
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
    },
    boxButton: {
        width: Dimensions.get('screen').width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: Dimensions.get('screen').width * 0.6,
        height: Dimensions.get('screen').height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: Dimensions.get('screen').height * 0.02,
        marginEnd: Dimensions.get('screen').width * 0.05,
        borderRadius: 6,
    },
    btnChoose: {
        backgroundColor: Colors.WHITE,
    },
    txtButton: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 18,
        color: Colors.WHITE
    },
    txtButtonChoose: {
        color: Colors.BLUE_PEPSI
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