import { StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import Background from '../../../../component/background/Background'
import Header from '../../../../component/header/Header'
import { BANER_1 } from '../../../../../../assets'
import { Colors } from '../../../../resource/value/Colors'
import Button from '../../../../component/button/Button'
import ItemBeatList from './BeatList.item'
import BeatNewItem from './BeatNew.item'
import { BeatListStackScreenProps } from '../../../../navigation/stack/BeatListNavigation'
import FeatherIcon from 'react-native-vector-icons/Feather'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import IoniconsIcon from 'react-native-vector-icons/Ionicons'
import { Video } from '../../../../../core/model/Video'
import { Music } from '../../../../../core/model/Music'
import { rtdb } from '../../../../../core/api/url/RealTimeDB'

const BeatList: React.FC<BeatListStackScreenProps<'BeatList'>> = ({ navigation, route }) => {
  // const BeatList = () => {

  const [list_Video, setlist_Video] = useState<Video[]>([])
  const [list_Music, setlist_Music] = useState<Music[]>([])

  useEffect(() => {
    const getVideo = async () => {
      const get = rtdb.ref('/Videos')
        .once('value', (snapshot: any) => {
          snapshot.forEach((item: any) => {
            let video: Video = {
              keyVideo: "1"
            };
            video.keyVideo = item.key;
            video.craeteAt = item.val().craeteAt;
            video.image = item.val().image;
            video.like = item.val().like;
            video.title = item.val().title;
            video.userKey = item.val().userKey;
            video.view = item.val().view;
            listVideo.push(video);
          })
          // console.log(listVideo);
          setlist_Video(listVideo)
        });
    }

    getVideo();

    const getMusic = async () => {

      const get = rtdb.ref('/Musics')
        .once('value', (snapshot: any) => {
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
          console.log(listMusic);
          setlist_Music(listMusic);
        });
    }

    getMusic();
    return () => {}
  }, [])
  

  let listVideo: Video[] = [];
  let listMusic: Music[] = [];

  const centerHeader = () => {

    return (
      <View style={styles.header_1}>
        <Text style={styles.textHeader}>Beat list</Text>
      </View>
    )
  }

  const goBack = () => {
    navigation.goBack();
  };

  const goNotification = () => {
    navigation.navigate('Notification');
  };

  const goNewBeat = () => {
    navigation.navigate('BeatNew');
  };

  const goHotUse = () => {
    navigation.navigate('HotUse');
  };

  const goHistory = () => {
    navigation.navigate('History');
  };

  const goPropose = () => {
    navigation.navigate('Propose');
  };

  return (
    <Background>
      <Header
        iconLeft={
          <FeatherIcon name='home' size={20} color={Colors.WHITE} />
        }
        leftHeader={goBack}
        centerHeader={centerHeader()}
        iconRight={
          <FontistoIcon name='bell' size={20} color={Colors.WHITE} />
        }
        rightHeader={goNotification}
      />
      <ScrollView style={styles.container}>
        <Image source={BANER_1} style={styles.imageBanner} />
        <View style={styles.boxButton}>
          <Button containerStyle={styles.btn}
            title='Beat mới nhất'
            titleStyle={styles.titleStyle}
            icon={
              <FontAwesomeIcon name="music" size={25} color={Colors.BLUE_PEPSI} />
            }
            onPress={goNewBeat} />
          <Button containerStyle={styles.btn}
            title='Sử dụng nhiều'
            titleStyle={styles.titleStyle}
            icon={
              <IoniconsIcon name="volume-medium" size={25} color={Colors.BLUE_PEPSI} />
            }
            onPress={goHotUse} />
        </View>
        <View style={styles.boxHistory}>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>Đã thu gần đây</Text>
            <TouchableOpacity style={styles.btnSeeAll} onPress={goHistory}>
              <Text style={styles.seeAll}>Xem tất cả {'>'}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={list_Video}
            renderItem={({ item }) => <ItemBeatList
              item={item} />}
            keyExtractor={(item) => item.keyVideo.toString()}
            horizontal
            showsHorizontalScrollIndicator={false} />
        </View>
        <View style={styles.boxPropose}>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>Đề xuất cho bạn</Text>
            <TouchableOpacity style={styles.btnSeeAll} onPress={goPropose}>
              <Text style={styles.seeAll}>Xem tất cả {'>'}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.listPropose}>
            {/* {
              listMusic.map((item) => <BeatNewItem
                item={item} />)
            } */}
            <FlatList
            data={list_Music}
            renderItem={({ item }) => <BeatNewItem
              item={item} />}
            keyExtractor={(item) => item.keyMusic.toString()}/>
          </View>
        </View>
      </ScrollView>
    </Background>
  )
}

export default BeatList

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Dimensions.get('screen').scale * 5,
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
  imageBanner: {
    resizeMode: 'stretch',
    width: "100%",
    height: Dimensions.get('screen').height * 0.25,
    borderRadius: 8,
  },
  boxButton: {
    marginTop: Dimensions.get('screen').height * 0.03,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    width: "45%",
    height: Dimensions.get('screen').height * 0.05,
  },
  titleStyle: {
    marginStart: Dimensions.get('screen').width * 0.03
  },
  boxTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Dimensions.get('screen').height * 0.02,
  },
  title: {
    fontSize: 16,
    color: Colors.WHITE,
    fontWeight: '700',
    lineHeight: 24,
  },
  seeAll: {
    fontSize: 12,
    color: Colors.WHITE,
    fontWeight: '400',
    lineHeight: 18,
  },
  btnSeeAll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxHistory: {},
  boxPropose: {},
  listPropose: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})