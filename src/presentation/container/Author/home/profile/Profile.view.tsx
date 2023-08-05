import { StyleSheet, Text, View, Image, Dimensions, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import ItemProfile from './Profile.item'
import { Colors } from '../../../../resource/value/Colors';
import Background from '../../../../component/background/Background';
import Header from '../../../../component/header/Header';
import { AVATAR_1 } from '../../../../../../assets';
import Icon from 'react-native-vector-icons/Feather';
import { ProfileScreenProps } from '../../../../navigation/stack/ProfileNavigation';
import { Video } from '../../../../../core/model/Video';
import { rtdb } from '../../../../../core/api/url/RealTimeDB';
import { useDispatch } from 'react-redux';
import { addStatus } from '../../../../share-state/redux/reducers/statusReducer';

const Profile:React.FC<ProfileScreenProps<'UserProfile'>> = ({navigation, route}) => {

    const [list_Video, setlist_Video] = useState<Video[]>([])

    let listVideo: Video[] = [];

    const dispatch = useDispatch();

    useEffect(() => {
        const getVideo = async () => {
            const get = rtdb.ref('/Videos').once('value');
            await get.then((snapshot: any) => {
              snapshot.forEach((item: any) => {
            let video : Video = {
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

    const logOut = () => {
        const logout = dispatch(addStatus({
            status : false
        }))
    }

    return (
        <Background>
            <View style={styles.container}>
                <Header
                    centerHeader={centerHeader()}
                    iconRight={
                        <Icon name='log-out' size={20} color={Colors.WHITE} />
                    }
                    rightHeader={logOut}
                />
                <View style={styles.group}>
                    <View style={styles.group1}>
                        <Image source={AVATAR_1} style={styles.avt} />
                        <View style={styles.boxInfor}>
                            <Text style={styles.ten}>Annie_2204</Text>
                            <View style={styles.group2}>
                                <View style={[styles.group3]}>
                                    <Text style={styles.tong}>Tổng số video</Text>
                                    <Text style={styles.soluong}>2.110</Text>
                                </View>
                                <View style={styles.line} />
                                <View style={styles.group3}>
                                    <Text style={styles.tong}>Tổng tương tác</Text>
                                    <Text style={styles.soluong}>1.02Tr</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.list}>
                    <FlatList
                        // style= {styles.lisItem}
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

export default Profile

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