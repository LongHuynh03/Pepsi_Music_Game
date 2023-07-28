import { StyleSheet, Text, View, ScrollView, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Background from '../../../../component/background/Background'
import Header from '../../../../component/header/Header'
import { BANER_1, CARD_PEPSI_1, CARD_PEPSI_2, CARD_PEPSI_3, CARD_PEPSI_4, CARD_PEPSI_5, ICON_HOME, ICON_MUSIC, ICON_NOTIFICATION } from '../../../../../../assets'
import { Colors } from '../../../../resource/value/Colors'
import Button from '../../../../component/button/Button'
import ItemBeatList, { ItemBeatListProps } from './BeatList.item'
import BeatNewItem, { ItemBeatProps } from './BeatNew.item'
import { BeatListStackScreenProps } from '../../../../navigation/stack/BeatListNavigation'

const DATA_HISTORY: ItemBeatListProps[] = [
  {
    id: 1,
    title: "Tiền nhiều để làm gì",
    view: 11000,
    like: 10000,
    image: CARD_PEPSI_1
  },
  {
    id: 2,
    title: "Tiền nhiều để làm gì",
    view: 11000,
    like: 10000,
    image: CARD_PEPSI_2
  },
  {
    id: 3,
    title: "Tiền nhiều để làm gì",
    view: 11000,
    like: 10000,
    image: CARD_PEPSI_3
  },
  {
    id: 4,
    title: "Tiền nhiều để làm gì",
    view: 11000,
    like: 10000,
    image: CARD_PEPSI_4
  },
  {
    id: 5,
    title: "Tiền nhiều để làm gì",
    view: 11000,
    like: 10000,
    image: CARD_PEPSI_5
  },
  {
    id: 6,
    title: "Tiền nhiều để làm gì",
    view: 11000,
    like: 10000,
    image: CARD_PEPSI_1
  },
];

const DATA_PROPOSE: ItemBeatProps[] = [
  {
    id: 1,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_1
  },
  {
    id: 2,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_2
  },
  {
    id: 3,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_3
  },
  {
    id: 4,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_4
  },
  {
    id: 5,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_5
  },
  {
    id: 6,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_3
  },
  {
    id: 7,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_5
  },
  {
    id: 8,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_4
  },
  {
    id: 9,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_2
  },
  {
    id: 10,
    name: 'Tiền nhiều để làm gì',
    des: 'GDucky ft.Lưu Hiền Trinh',
    image: CARD_PEPSI_1
  },
]

// const BeatList: React.FC<BeatListStackScreenProps<'BeatList'>> = ({ navigation, route }) => {
const BeatList = () => {

  const centerHeader = () => {
    return (
      <View style={styles.header_1}>
        <Text style={styles.textHeader}>Beat list</Text>
      </View>
    )
  }

  const goBack = () => {
  };

  const goNotification = () => {
    // navigation.navigate('Notification');
  };

  const goNewBeat = () => {
    // navigation.navigate('BeatNew');
  };

  const goHotUse = () => {
    // navigation.navigate('HotUse');
  };

  const goHistory = () => {
    // navigation.navigate('History');
  };

  const goPropose = () => {
    // navigation.navigate('Propose');
  };

  return (
    <Background>
      <Header
        iconLeft={ICON_HOME}
        leftHeader={goBack}
        centerHeader={centerHeader()}
        iconRight={ICON_NOTIFICATION}
        rightHeader={goNotification}
      />
      <ScrollView style={styles.container}>
        <Image source={BANER_1} style={styles.imageBanner} />
        <View style={styles.boxButton}>
          <Button containerStyle={styles.btn}
            title='Beat mới nhất'
            titleStyle={styles.titleStyle}
            icon={ICON_MUSIC}
            onPress={goNewBeat} />
          <Button containerStyle={styles.btn}
            title='Sử dụng nhiều'
            titleStyle={styles.titleStyle}
            icon={ICON_MUSIC}
            onPress={goHotUse} />
        </View>
        <View style={styles.boxHistory}>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>Đã thu gần đây</Text>
            <TouchableOpacity style={styles.btnSeeAll} onPress={goHistory}>
              {/* <Text style={styles.seeAll}>Xem tất cả {'>'}</Text> */}
            </TouchableOpacity>
          </View>
          <FlatList
            data={DATA_HISTORY}
            renderItem={({ item }) => <ItemBeatList
              id={item.id}
              title={item.title}
              view={item.view}
              like={item.like}
              image={item.image} />}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false} />
        </View>
        <View style={styles.boxPropose}>
          <View style={styles.boxTitle}>
            <Text style={styles.title}>Đề xuất cho bạn</Text>
            <TouchableOpacity style={styles.btnSeeAll} onPress={goPropose}>
              {/* <Text style={styles.seeAll}>Xem tất cả {'>'}</Text> */}
            </TouchableOpacity>
          </View>
          <View style={styles.listPropose}>
            {
              DATA_PROPOSE.map((item) => <BeatNewItem
                id={item.id}
                name={item.name}
                des={item.des}
                image={item.image}
                key={item.id} />)
            }
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