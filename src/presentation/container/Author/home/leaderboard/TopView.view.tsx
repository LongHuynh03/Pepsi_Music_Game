import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React, {useEffect} from 'react'
import ItemRanking from './TopView.item'
import Background from '../../../../component/background/Background';
import Header from '../../../../component/header/Header';
import Icon from 'react-native-vector-icons/Octicons';
import { Colors } from '../../../../resource/value/Colors';
import { RankingStackScreenProps } from '../../../../navigation/stack/RankingNavigation';
import { Video } from '../../../../../core/model/Video';
import { rtdb } from '../../../../../core/api/url/RealTimeDB';

const TopView: React.FC<RankingStackScreenProps<'TopView'>> = ({navigation,route}) => {
    
    let listVideo: Video[] = [];
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
            });
          }
      
          getVideo();
    
      return () => {}
    }, [])

    const goBack = () => {
        navigation.navigate('Ranking');
    }
    const goNotification = () => {
        // console.log(123);
    }

    const centerHeader = () => {
        return (
            <Text style={styles.textHeader}>Bảng xếp hạng</Text>
        )
    };

    return (
        <Background>
            <Header
                iconLeft={
                    <Icon name='home' size={20} color={Colors.WHITE} />
                }
                leftHeader={goBack}
                centerHeader={centerHeader()}
                iconRight={
                    <Icon name='bell' size={20} color={Colors.WHITE} />
                }
                rightHeader={goNotification}
            />
            <View style={styles.container}>
                <View style={styles.toptab}>
                    <Text style={styles.texttab}>Video có lượt tương tác nhiều nhất</Text>
                </View>
                <FlatList
                    data={listVideo}
                    renderItem={({ item }) =>
                        <ItemRanking
                            item={item}
                            />}
                    keyExtractor={(item) => item.keyVideo.toString()}
                />
            </View>
        </Background>
    )
}

export default TopView

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
    header_1: {
        marginTop: Dimensions.get('window').height * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toptab: {
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width * 0.9,
        height: Dimensions.get('screen').height * 0.05,
        marginVertical: Dimensions.get('screen').height * 0.015,
        backgroundColor: Colors.BACKGROUND_MIC
    },
    texttab: {
        fontFamily: 'Monterrat',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: Colors.WHITE,
        paddingVertical: Dimensions.get('screen').width * 0.02,
    },
})