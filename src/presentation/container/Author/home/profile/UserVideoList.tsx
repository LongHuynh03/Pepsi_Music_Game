import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../../../component/background/Background'
import Header from '../../../../component/header/Header'
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../../resource/value/Colors';
import { ProfileScreenProps } from '../../../../navigation/stack/ProfileNavigation'
import ItemNewVideo from './NewVideo.item'
import { Video } from '../../../../../core/model/Video'
import { rtdb } from '../../../../../core/api/url/RealTimeDB'

const UserVideoList: React.FC<ProfileScreenProps<'UserVideoList'>> = ({ navigation, route }) => {


    let listVideo: Video[] = [];

    const [list_Video, setlist_Video] = useState<Video[]>([])

    useEffect(() => {
        const getVideo = async () => {
            const get = rtdb.ref('/Videos').once('value');
            await get.then((snapshot: any) => {
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
                setlist_Video(listVideo);
                // console.log(list);
            });
        }

        getVideo();

        return () => { }
    }, [])

    const goBack = () => {
        navigation.navigate('UserProfile');
    }
    const goNotification = () => {
        console.log(123);
    }

    const centerHeader = () => {
        return (
            <Text style={styles.textHeader}>Video list</Text>
        )
    };

    return (
        <Background>
            <Header
                leftHeader={goBack}
                centerHeader={centerHeader()}
                iconLeft={
                    <Icon name='arrowleft' size={20} color={Colors.WHITE} />
                }
            />
            <View style={styles.container}>
                <FlatList
                    data={list_Video}
                    renderItem={({ item }) => <ItemNewVideo
                        item={item} />}
                    keyExtractor={(item) => item.keyVideo.toString()}
                />
            </View>
        </Background>
    )
}

export default UserVideoList

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
})