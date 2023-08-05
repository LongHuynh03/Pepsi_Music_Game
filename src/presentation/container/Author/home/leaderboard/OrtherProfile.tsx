import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../../../resource/value/Colors';
import Background from '../../../../component/background/Background';
import Header from '../../../../component/header/Header';
import Icon from 'react-native-vector-icons/AntDesign';
import { RankingStackScreenProps } from '../../../../navigation/stack/RankingNavigation';
import ItemProfile from './Profile.item';
import { Video } from '../../../../../core/model/Video';
import { rtdb } from '../../../../../core/api/url/RealTimeDB';
import { useSelector } from 'react-redux';
import { userSelecter } from '../../../../share-state/redux/reducers/userReducer';
import { Users } from '../../../../../core/model/User';

const OrtherProfile: React.FC<RankingStackScreenProps<'OrtherProfile'>> = ({ navigation, route }) => {

    let listVideo: Video[] = [];

    const [list_Video, setlist_Video] = useState<Video[]>([])

    const data = useSelector(userSelecter);

    useEffect(() => {

        const getVideo = async () => {
            const get = rtdb.ref('/Videos')
                .once('value', (snapshot: any) => {
                    snapshot.forEach((item: any) => {
                        let video: Video = {
                            keyVideo: "1"
                        };
                        video.keyVideo = item.key;
                        video.createAt = item.val().createAt;
                        video.image = item.val().image;
                        video.like = item.val().like;
                        video.title = item.val().title;
                        video.userKey = item.val().userKey;
                        video.view = item.val().view;
                        listVideo.push(video);
                    })
                    // console.log(list);
                    setlist_Video(listVideo);
                });
        }
        getVideo();

        return () => { }
    }, [])


    const centerHeader = () => {
        return (
            <Text style={styles.textHeader}>Thông tin cá nhân</Text>
        )
    };

    const goBack = () => {
        navigation.navigate('Ranking');
    };

    const home = 'home';
    return (
        <Background>
            <View style={styles.container}>
                <Header
                    centerHeader={centerHeader()}
                    iconLeft={
                        <Icon name='arrowleft' size={20} color={Colors.WHITE} />
                    }
                    leftHeader={goBack}
                />
                <View style={styles.group}>
                    <View style={styles.group1}>
                        <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pepsimusicgame-f3252.appspot.com/o/Image-Avatar-2_1x.png?alt=media&token=1b3055aa-9ea7-4003-94f9-f213d71a8710' }} style={styles.avt} />
                        <View style={styles.boxInfor}>
                            <Text style={styles.ten}>Annie</Text>
                            <View style={styles.group2}>
                                <View style={[styles.group3]}>
                                    <Text style={styles.tong}>Tổng số video</Text>
                                    <Text style={styles.soluong}>1000</Text>
                                </View>
                                <View style={styles.line} />
                                <View style={styles.group3}>
                                    <Text style={styles.tong}>Tổng tương tác</Text>
                                    <Text style={styles.soluong}>2000</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={list_Video}
                        renderItem={({ item }) =>
                            <ItemProfile
                                item={item}
                                navigation={navigation} />
                        }
                        keyExtractor={(item) => item.keyVideo.toString()}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </Background>
    )
}

export default OrtherProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
    },
    group: {
        width: Dimensions.get('window').width * 1,
        backgroundColor: Colors.BACKGROUND_BOX_BEATLIST, //'rgba(19, 66, 125, 0.1)'
    },
    group1: {
        height: Dimensions.get('window').height * 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxInfor: {
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: Dimensions.get('window').width * 0.1,
    },
    group3: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    line: {
        borderEndWidth: 1,
        borderColor: Colors.BLUE_2_500,
        height: "80%",
    },
    avt: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        borderRadius: 90,
    },
    ten: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 27,
        color: Colors.WHITE,
        alignItems: 'center',
    },
    group2: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    tong: {
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
        color: Colors.BLUE_2_100, //'#CCEBF8'
        alignItems: 'center',

    },
    soluong: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
        alignItems: 'center',
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },

})