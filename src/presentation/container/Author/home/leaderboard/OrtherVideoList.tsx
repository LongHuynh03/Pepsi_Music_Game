import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../../../component/background/Background'
import Header from '../../../../component/header/Header'
import Icon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../../resource/value/Colors';
import { RankingStackScreenProps } from '../../../../navigation/stack/RankingNavigation'
import ItemNewVideo from './NewVideo.item'
import { Video } from '../../../../../core/model/Video'
import { rtdb } from '../../../../../core/api/url/RealTimeDB'

const OrtherVideo: React.FC<RankingStackScreenProps<'OrtherVideo'>> = ({ navigation, route }) => {

    let listVideo: Video[] = [];

    const [list_Video, setlist_Video] = useState<Video[]>([])

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

    const goBack = () => {
        navigation.navigate('OrtherProfile');
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

export default OrtherVideo

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