import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { INTRO_1, INTRO_2, INTRO_3, INTRO_4, INTRO_5, INTRO_6, TALEN } from '../../../../../assets'
import Background from '../../../component/background/Background'
import { Colors } from '../../../resource/value/Colors'

const Introduce = () => {

  const asd = () => {
    return (
      <Text>123</Text>
    )
  }

  return (
    <Background>
      <View style={styles.container}>
        <Swiper style={styles.swiper}
          showsButtons
          buttonWrapperStyle={styles.btnSwiper}
          nextButton={<Text style={styles.buttonText_Next}>TIẾP THEO</Text>}
          prevButton={<Text style={styles.buttonText_Prev}>TRỞ VỀ</Text>}
          paginationStyle={styles.pagination}
          autoplayTimeout={1000}
          autoplay
          loop
        >
          <View style={styles.swiperSilde}>
            <Image source={INTRO_1} style={styles.imageIntro} />
            <Text style={styles.textDescription_1}>Người chơi nhập tham gia chương</Text>
            <Text style={styles.textDescription_1}>trình bằng cách vào web</Text>
            <Text style={styles.textDescription_2}>ps://pepsirapgame.pepsishop.vn/</Text>
          </View>
          <View style={styles.swiperSilde}>
            <Image source={INTRO_2} style={styles.imageIntro} />
            <Text style={styles.textDescription_1}>Người chơi nhập thông tin bao gồm:</Text>
            <Text style={styles.textDescription_2}>Tên rap và số điện thoại</Text>
          </View>
          <View style={styles.swiperSilde}>
            <Image source={INTRO_3} style={styles.imageIntro} />
            <Text style={styles.textDescription_1}>HỆ THỐNG TIẾN HÀNH
              <Text style={styles.textDescription_2}> GỬI oTP ĐỂ XÁC MINH</Text></Text>
            <Text style={styles.textDescription_2}>SỐ ĐIỆN THOẠI CỦA NGƯỜI CHƠI</Text>
            <Text style={styles.textDescription_1}>ngƯỜI CHƠI NHẬN MÃ OTP ĐỂ ĐĂNG NHẬP</Text>
            <Text style={styles.textDescription_1}>VÀ BẮT ĐẦU THAM GIA TRÒ CHƠI</Text>
          </View>
          <View style={styles.swiperSilde}>
            <Image source={INTRO_4} style={styles.imageIntro} />
            <Text style={styles.textDescription_1}>NGƯỜI CHƠI BẮT ĐẦU TRÒ CHƠI BẰNG CÁCH</Text>
            <Text style={styles.textDescription_1}>BẤM VÀO “THU ÂM NGAY”, ĐỂ THU ÂM</Text>
            <Text style={styles.textDescription_1}>GIỌNG HÁT CỦA NGƯỜI CHƠI VÀ HOÀN</Text>
            <Text style={styles.textDescription_1}>THÀNH 1 BÀI HÁT rAP HOÀN CHỈNH</Text>
            <Text style={styles.textDescription_1}>BÀI HÁT SẼ ĐƯỢC ĐĂNG CÔNG KHAI VÀ</Text>
            <Text style={styles.textDescription_1}>NHỮNG NGƯỜI CHƠI KHÁC CÓ THỂ THẢ TIM</Text>
            <Text style={styles.textDescription_1}>VÀ CHIA SẺ</Text>
          </View>
          <View style={styles.swiperSilde}>
            <Image source={INTRO_5} style={styles.imageIntro} />
            <Text style={styles.textDescription_1}>mỗi tuần sẽ có bảng xếp hạng 10 bài hát</Text>
            <Text style={styles.textDescription_1}>được yêu thích nhất.</Text>
            <Text style={styles.textDescription_1}>điểm được tích lũy khi bài hát của người</Text>
            <Text style={styles.textDescription_1}>chơi được lọt vào  bảng xếp hạng này</Text>
            <Text style={styles.textDescription_1}>theo thứ tự</Text>
            <Text style={styles.textDescription_1}>top 1: 50 pepsi coin</Text>
            <Text style={styles.textDescription_1}>top 2 đến 5: 30 pepsi coin</Text>
            <Text style={styles.textDescription_1}>top 6 đến 10: 20 pepsi coin </Text>
          </View>
          <View style={styles.swiperSilde}>
            <Image source={INTRO_6} style={styles.imageIntro} />
            <Text style={styles.textDescription_1}>NGƯỜI CHƠI TÍCH LŨY PEPSI COIN VÀ</Text>
            <Text style={styles.textDescription_1}>QUY ĐổI QUÀ TƯƠNG ỨNG VỚI CÁC MỨC</Text>
            <Text style={styles.textDescription_1}>THEO QUY ĐỊNH CỦA TRANG:</Text>
            <Text style={styles.textDescription_2}>HTTPS://pepsirapgame.pepsishop.vn/</Text>
          </View>
        </Swiper>
      </View>
    </Background>
  )
}

export default Introduce

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  swiper: {
    height: Dimensions.get('screen').height
  },
  btnSwiper: {
    width: Dimensions.get('screen').width * 0.9,
    marginStart: Dimensions.get('screen').width * 0.05,
    marginTop: Dimensions.get('screen').height * 0.45
  },
  buttonText_Prev: {
    borderWidth: 1,
    borderColor: Colors.WHITE,
    width: Dimensions.get('screen').width * 0.36,
    height: Dimensions.get('screen').height * 0.05,
    borderRadius: 8,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: Colors.WHITE,
    backgroundColor: 'rgba(255, 255, 255,0.1)',
    fontWeight: '700',
  },
  buttonText_Next: {
    width: Dimensions.get('screen').width * 0.36,
    height: Dimensions.get('screen').height * 0.05,
    borderRadius: 8,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: Colors.BLUE_PEPSI,
    backgroundColor: Colors.WHITE,
    fontWeight: '700',
  },
  pagination: {
    marginBottom: Dimensions.get('screen').height * 0.07
  },
  swiperSilde: {
    width: Dimensions.get('screen').width * 0.9,
    marginStart: Dimensions.get('screen').width * 0.05,
    alignItems: 'center',
  },
  imageIntro: {
    resizeMode: 'contain',
    width: Dimensions.get('screen').width * 0.5,
    marginTop: - Dimensions.get('screen').height * 0.15,
    marginBottom: - Dimensions.get('screen').height * 0.2
  },
  textDescription_1: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    color: Colors.WHITE,
    marginTop: 10,
    textAlign: 'center'
  },
  textDescription_2: {
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 21,
    color: Colors.YELLOW,
    marginTop: 10
  },
})