import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../../../component/background/Background'
import { Colors } from '../../../../resource/value/Colors';
import ItemNewVideo from './NewVideo.item'
import { Video } from '../../../../../core/model/Video'
import { rtdb } from '../../../../../core/api/url/RealTimeDB'
import DialogReport from '../../../../component/dialog/DialogReport';
import DialogReported from '../../../../component/dialog/DialogReported';

const FavoriteVideo = () => {

    const [list_Video, setlist_Video] = useState<Video[]>([])

    let listVideo: Video[] = [];
    useEffect(() => {

        const getVideo = async () => {
            let video: Video = {
                keyVideo: "1"
            };
            const get = rtdb.ref('/Videos')
                .once('value', (value: any) => {
                    value.forEach((item: any) => {
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
                        console.log(listVideo);
                    })
                    setlist_Video(listVideo);
                });
        }

        getVideo();

        return () => { }
    }, [])

    return (
        <Background>
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

export default FavoriteVideo

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