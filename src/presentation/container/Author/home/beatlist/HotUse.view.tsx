import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, {useEffect, useState} from 'react'
import Background from '../../../../component/background/Background'
import { Colors } from '../../../../resource/value/Colors'
import Header from '../../../../component/header/Header'
import BeatNewItem from './BeatNew.item'
import { BeatListStackScreenProps } from '../../../../navigation/stack/BeatListNavigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { Music } from '../../../../../core/model/Music'
import { rtdb } from '../../../../../core/api/url/RealTimeDB'

const HotUse: React.FC<BeatListStackScreenProps<'HotUse'>> = ({navigation, route}) => {

    let listMusic: Music[] = [];
    const [list_Music, setlist_Music] = useState<Music[]>([])

    useEffect(() => {
        const getMusic = async () => {
            
            const get = rtdb.ref('/Musics')
            .once('value',(snapshot: any) => {
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
                // console.log(list);
                setlist_Music(listMusic)
            });
        }

        getMusic();

        return () => { }
    }, [])

    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Sử dụng nhiều</Text>
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
                    data={listMusic}
                    renderItem={
                        ({ item }) => <BeatNewItem
                            item={item}
                        />}
                    keyExtractor={(item) => item.keyMusic.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </Background>

    )
}

export default HotUse
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