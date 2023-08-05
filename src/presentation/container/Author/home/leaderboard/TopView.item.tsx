import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { Colors } from '../../../../resource/value/Colors';
import Icon from 'react-native-vector-icons/AntDesign'
import { IMAGE_BORDER_TOP_1 } from '../../../../../../assets';

export interface ItemTopViewProps {
  id: number;
  title: string;
  author: string;
  image: any;
  view: number;
  like: number;
}

interface Item {
  item: any
}

const ItemTopView: React.FC<Item> = (props) => {

  const { item } = props;
  const [imgBorder, setimgBorder] = React.useState<any>(IMAGE_BORDER_TOP_1);

  // if (id % 2 == 0){
  //   setimgBorder(IMAGE_BORDER_TOP_1);
  //   console.log("123");
  // }

  return (
    <TouchableOpacity style={[styles.gr]}>
      <View style={[styles.boxBorder]}>
        <Text style={styles.txtID}>1</Text>
        <Image source={imgBorder} style={styles.imgBorder}/>
      </View>
      <Image style={styles.img1} source={{uri : item.image}} />
      <View style={styles.grbottom}>
        <View style={styles.grleft}>
          <Text style={styles.text1}>{item.title}</Text>
          <Text style={styles.text2}>{item.author}</Text>
        </View>
        <View style={styles.grright}>
          <View style={styles.grWatch}>
            <Icon name='eyeo' color={Colors.WHITE} size={6} />
            <Text style={styles.txt}>{item.like}</Text>
          </View>
          <View style={styles.grLike}>
            <Icon name='hearto' color={Colors.WHITE} size={6} />
            <Text style={styles.txt}>{item.view}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ItemTopView

const styles = StyleSheet.create({
  boxBorder: {
    position: 'absolute',
    zIndex: 1,
  },
  imgBorder: {
  },
  txtID: {
    position: 'absolute',
    fontFamily: 'Monterrat',
    fontSize: 20,
    fontWeight: '700',
    color: Colors.WHITE,
    zIndex: 2,
    margin:'10%',
  },
  gr: {
    borderRadius: 8,
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.25,
    marginBottom: Dimensions.get('screen').height * 0.015,
    borderWidth: 1,
    borderColor: Colors.BLUE_2_300,
  },
  img1: {
    width: Dimensions.get('screen').width * 0.895,
    height: Dimensions.get('screen').height * 0.247,
    borderRadius: 8,
  },
  grbottom: {
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%",
    height: "25%",
    paddingHorizontal: Dimensions.get('screen').width * 0.07,
    backgroundColor: Colors.BACKGROUND_TOPVIEW,
  },
  grleft: {
    width : "50%",
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text1: {
    color: Colors.WHITE,
    fontFamily: 'Monterrat',
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 19,
  },
  text2: {
    color: Colors.WHITE,
    fontFamily: 'Monterrat',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
  },
  grright: {
    width : "50%",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  grWatch: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.RED_BAR,
    padding: Dimensions.get('screen').width * 0.005,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,

  },
  grLike: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLUE_LIKE,
    padding: Dimensions.get('screen').width * 0.005,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  txt: {
    color: Colors.WHITE,
    fontFamily: 'Monterrat',
    fontSize: 8,
    fontWeight: '500',
    lineHeight: 9.6,
  },
})