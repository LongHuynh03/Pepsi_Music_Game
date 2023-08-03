import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import ItemNotification, { ItemNotificationProps } from './Notification.item';
import { AVATAR_1 } from '../../../../../../../assets';
import Background from '../../../../../component/background/Background';
import Header from '../../../../../component/header/Header';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../../../resource/value/Colors';
import { BeatListStackScreenProps } from '../../../../../navigation/stack/BeatListNavigation';

const DATA: ItemNotificationProps[] = [
    {
        id: 1,
        title: "Bạn đã đăng tải video mới",
        titleTime: "21 giờ trước",
        image: AVATAR_1,
        role: 0
    },
    {
        id: 2,
        title: "Bạn đã nhận được IPHONE 13 ProMax\nGiải thưởng cho quán quân tuần",
        titleTime: "28/11/2021",
        image: AVATAR_1,
        role: 1
    },
    {
        id: 3,
        title: "Bạn đã đạt TOP 1 người có lượt\nyêu thích cao nhất tuần",
        titleTime: "26/11/2021",
        image: AVATAR_1,
        role: 0
    },
    {
        id: 4,
        title: "Bạn đã đăng tải video mới",
        titleTime: "26/11/2021",
        image: AVATAR_1,
        role: 0
    },
    {
        id: 5,
        title: "Bạn đã nhận được Samsung Tab S7+\nGiải thưởng cho á quân tuần",
        titleTime: "26/11/2021",
        image: AVATAR_1,
        role: 1
    },
    {
        id: 6,
        title: "Bạn đã đạt TOP 2 người có lượt\nyêu thích cao nhất tuần",
        titleTime: "21/11/2021",
        image: AVATAR_1,
        role: 0
    },
    {
        id: 7,
        title: "Bạn đã đăng tải video mới",
        titleTime: "21/11/2021",
        image: AVATAR_1,
        role: 0
    },
];

const Notification: React.FC<BeatListStackScreenProps<'Notification'>> = ({navigation, route})=> {

    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Thông báo</Text>
            </View>
        )
    }

    const goBack = () => {navigation.navigate('BeatList')};

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
                    style={styles.flatList}
                    data={DATA}
                    renderItem={({ item }) => <ItemNotification
                        item={item}  navigation={navigation}/>}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </Background>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    flatList: {},
});

export default Notification;