import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Background from '../../../../component/background/Background'
import { Colors } from '../../../../resource/value/Colors'
import Header from '../../../../component/header/Header'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import BeatNewItem from './BeatNew.item'
import { RemixStackScreenProps } from '../../../../navigation/stack/RemixListNavigation'
import { Music } from '../../../../../core/model/Music'
import { rtdb } from '../../../../../core/api/url/RealTimeDB'
import { Video } from '../../../../../core/model/Video'

const BeatNew: React.FC<RemixStackScreenProps<'BeatNew'>> = ({ navigation, route }) => {
    // const BeatNew = () => {

    let listMusic: Music[] = [];

    const [list_Music, setlist_Music] = useState<Music[]>([]);

    useEffect(() => {
        const getMusic = async () => {
            const get = rtdb.ref('/Musics').once('value');
            await get.then((snapshot: any) => {
                snapshot.forEach((item: any) => {
                    let music: Music = {
                        keyMusic: "1"
                    };
                    music.keyMusic = item.key;
                    music.author = item.val().author;
                    music.image = item.val().image;
                    music.name = item.val().name;
                    listMusic.push(music);
                })
                setlist_Music(listMusic)
                // console.log(list);
            });
        }

        getMusic();

        return () => { }
    }, [])

    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Beat mới nhất</Text>
            </View>
        )
    }

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <Background>
            <View style={styles.container}>
                <Header
                    iconLeft={
                        <AntDesignIcon name="arrowleft" size={20} color={Colors.WHITE} />
                    }
                    leftHeader={goBack}
                    centerHeader={centerHeader()} />
                <FlatList
                    data={list_Music}
                    renderItem={
                        ({ item }) => <BeatNewItem
                            item={item} navigation={navigation}
                        />}
                    keyExtractor={(item) => item.keyMusic.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </Background>

    )
}

export default BeatNew
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