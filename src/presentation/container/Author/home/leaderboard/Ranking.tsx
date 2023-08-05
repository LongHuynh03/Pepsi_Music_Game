import { StyleSheet, Text, View, FlatList, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { IMAGE_BUC, IMAGE_RANK_1, IMAGE_RANK_2, IMAGE_RANK_3 } from '../../../../../../assets'
import Background from '../../../../component/background/Background';
import Header from '../../../../component/header/Header';
import OIcon from 'react-native-vector-icons/Octicons';
import { Colors } from '../../../../resource/value/Colors';
import ItemRanking from './Ranking.item';
import ItemTopView from './TopView.item';
import { RankingStackScreenProps } from '../../../../navigation/stack/RankingNavigation';
import { Video } from '../../../../../core/model/Video';
import { Rank } from '../../../../../core/model/Rank';
import { rtdb } from '../../../../../core/api/url/RealTimeDB';


const Ranking: React.FC<RankingStackScreenProps<'Ranking'>> = ({ navigation, route }) => {

    let listVideo: Video[] = [];
    let listRank: Rank[] = [];

    const [list_Video, setlist_Video] = useState<Video[]>([]);
    const [list_Rank, setlist_Rank] = useState<Rank[]>([])

    useEffect(() => {
        const getVideo = async () => {
            const get = await rtdb.ref('/Videos')
                .once('value', (snapshot: any) => {
                    snapshot.forEach((item: any) => {
                        let video: Video = {
                            keyVideo: "1"
                        };
                        video.keyVideo = item.key;
                        video.craeteAt = item.val().createAt;
                        video.image = item.val().image;
                        video.like = item.val().like;
                        video.title = item.val().title;
                        video.userKey = item.val().userKey;
                        video.view = item.val().view;
                        listVideo.push(video);
                    })
                    console.log(listVideo);
                    setlist_Video(listVideo);
                });
        }

        getVideo();

        const getRank = async () => {
            const get = await rtdb.ref('/Ranks')
                .once('value', (snapshot: any) => {
                    snapshot.forEach((item: any) => {
                        let rank: Rank = {
                            keyRank: "1"
                        };
                        rank.keyRank = item.key;
                        rank.name = item.val().name;
                        rank.image = item.val().image;
                        rank.view = item.val().view;
                        rank.rank = item.val().rank;
                        listRank.push(rank);
                    })
                    // console.log(listRank);
                    setlist_Rank(listRank);
                });
        }

        getRank();

        return () => { }
    }, [])

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
                                        <Text style={styles.textName1}>Annie</Text>
                                        <Text style={styles.textView}>2.2tr lượt xem</Text>
                                    </View>
                                    <View style={styles.boxRank3}>
                                        <Image source={IMAGE_RANK_3} style={styles.imgRank3} />
                                        <Text style={styles.textName3}>John Cena</Text>
                                        <Text style={styles.textView}>1.1tr lượt xem</Text>
                                    </View>
                                </View>
                                <Image source={IMAGE_BUC} style={styles.imgBuc} />
                            </View>
                            <FlatList
                                data={list_Rank}
                                renderItem={({ item }) =>
                                    <ItemRanking
                                        item={item}
                                        navigation={navigation} />}
                                keyExtractor={(item) => item.keyRank.toString()}
                                showsVerticalScrollIndicator = {false}
                            />
                        </View>
                        :
                        <FlatList
                            data={list_Video}
                            renderItem={({ item }) =>
                                <ItemTopView
                                    item={item}
                                />}
                            keyExtractor={(item) => item.keyVideo.toString()}
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