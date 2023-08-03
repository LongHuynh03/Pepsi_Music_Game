import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../../../resource/value/Colors';
import Background from '../../../../component/background/Background';
import Header from '../../../../component/header/Header';
import { AVATAR_1, AVATAR_2_1X, CARD_PEPSI_1, CARD_PEPSI_2, CARD_PEPSI_3, CARD_PEPSI_4, CARD_PEPSI_5 } from '../../../../../../assets';
import Icon from 'react-native-vector-icons/AntDesign';
import { RankingStackScreenProps } from '../../../../navigation/stack/RankingNavigation';
import ItemProfile, { ItemProfileProps } from './Profile.item';

const DATA: ItemProfileProps[] = [
    { id: 1, title: 'Tiền nhiều để làm gì', view: '11.8k', like: '10203', image: CARD_PEPSI_1 },
    { id: 2, title: 'Tiền nhiều để làm gì', view: '11.8k', like: '10203', image: CARD_PEPSI_2 },
    { id: 3, title: 'Tiền nhiều để làm gì', view: '11.8k', like: '10203', image: CARD_PEPSI_3 },
    { id: 4, title: 'Tiền nhiều để làm gì', view: '11000', like: '10203', image: CARD_PEPSI_4 },
    { id: 5, title: 'Tiền nhiều để làm gì', view: '11000', like: '10203', image: CARD_PEPSI_5 },
    { id: 6, title: 'Tiền nhiều để làm gì', view: '11000', like: '10203', image: CARD_PEPSI_1 },
    { id: 7, title: 'Tiền nhiều để làm gì', view: '11000', like: '10203', image: CARD_PEPSI_2 },
    { id: 8, title: 'Tiền nhiều để làm gì', view: '11000', like: '10203', image: CARD_PEPSI_3 },
    { id: 9, title: 'Tiền nhiều để làm gì', view: '11000', like: '10203', image: CARD_PEPSI_4 },
    { id: 10, title: 'Tiền nhiều để làm gì', view: '11000', like: '10203', image: CARD_PEPSI_5 },
];

const OrtherProfile : React.FC<RankingStackScreenProps<'OrtherProfile'>> = ({navigation,route}) => {

    const centerHeader = () => {
        return (
            <Text style={styles.textHeader}>Thông tin cá nhân</Text>
        )
    };

    const goBack = () => {
        navigation.navigate('Ranking');
    };

    const home = 'home';
    return (
        <Background>
            <View style={styles.container}>
                <Header
                    centerHeader={centerHeader()}
                    iconLeft={
                        <Icon name='arrowleft' size={20} color={Colors.WHITE} />
                    }
                    leftHeader={goBack}
                />
                <View style={styles.group}>
                    <View style={styles.group1}>
                        <Image source={AVATAR_1} style={styles.avt} />
                        <View style={styles.boxInfor}>
                            <Text style={styles.ten}>Annie_2204</Text>
                            <View style={styles.group2}>
                                <View style={[styles.group3]}>
                                    <Text style={styles.tong}>Tổng số video</Text>
                                    <Text style={styles.soluong}>2.110</Text>
                                </View>
                                <View style={styles.line} />
                                <View style={styles.group3}>
                                    <Text style={styles.tong}>Tổng tương tác</Text>
                                    <Text style={styles.soluong}>1.02Tr</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.list}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) =>
                            <ItemProfile
                                item={item}
                                navigation = {navigation}/>
                        }
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </Background>
    )
}

export default OrtherProfile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
    },
    group: {
        width: Dimensions.get('window').width * 1,
        backgroundColor: Colors.BACKGROUND_BOX_BEATLIST, //'rgba(19, 66, 125, 0.1)'
    },
    group1: {
        height: Dimensions.get('window').height * 0.15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxInfor: {
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: Dimensions.get('window').width * 0.1,
    },
    group3: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    line: {
        borderEndWidth: 1,
        borderColor: Colors.BLUE_2_500,
        height: "80%",
    },
    avt: {
        resizeMode: 'contain',
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').width * 0.2,
        borderRadius: 90,
    },
    ten: {
        fontFamily: 'Montserrat',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 27,
        color: Colors.WHITE,
        alignItems: 'center',
    },
    group2: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    tong: {
        fontFamily: 'Montserrat',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
        color: Colors.BLUE_2_100, //'#CCEBF8'
        alignItems: 'center',

    },
    soluong: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 21,
        color: Colors.WHITE,
        alignItems: 'center',
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 10,
    },

})