import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import ItemGift, { ItemMyGiftProps } from './MyGift.item';
import { IPHONE_13_PROMAX, SAMSUNG_GALAXY } from '../../../../../../../assets';
import Background from '../../../../../component/background/Background';
import Header from '../../../../../component/header/Header';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../../../resource/value/Colors';
import { BeatListStackScreenProps } from '../../../../../navigation/stack/BeatListNavigation';

const DATA: ItemMyGiftProps[] = [
    {
        id: 1,
        title: "Iphone 13 Promax",
        des: "Top 1 tuần - 28/11/2021",
        button: "Chưa nhận",
        image: IPHONE_13_PROMAX,
    },
    {
        id: 2,
        title: "Samsung Galaxy Tab S7+",
        des: "Top 2 tuần - 21/11/2021",
        button: "Đã nhận",
        image: SAMSUNG_GALAXY
    },
    
    {
        id: 3,
        title: "Samsung Galaxy Tab S7+",
        des: "Top 2 tuần - 21/11/2021",
        button: "Đã nhận",
        image: SAMSUNG_GALAXY
    },
    
    {
        id: 4,
        title: "Samsung Galaxy Tab S7+",
        des: "Top 2 tuần - 21/11/2021",
        button: "Đã nhận",
        image: SAMSUNG_GALAXY
    },
    
    {
        id: 5,
        title: "Samsung Galaxy Tab S7+",
        des: "Top 2 tuần - 21/11/2021",
        button: "Đã nhận",
        image: SAMSUNG_GALAXY
    },
    
    {
        id: 6,
        title: "Samsung Galaxy Tab S7+",
        des: "Top 2 tuần - 21/11/2021",
        button: "Đã nhận",
        image: SAMSUNG_GALAXY
    },
    
    {
        id: 7,
        title: "Samsung Galaxy Tab S7+",
        des: "Top 2 tuần - 21/11/2021",
        button: "Đã nhận",
        image: SAMSUNG_GALAXY
    },
    
    {
        id: 8,
        title: "Samsung Galaxy Tab S7+",
        des: "Top 2 tuần - 21/11/2021",
        button: "Đã nhận",
        image: SAMSUNG_GALAXY
    },
    
    {
        id: 9,
        title: "Samsung Galaxy Tab S7+",
        des: "Top 2 tuần - 21/11/2021",
        button: "Đã nhận",
        image: SAMSUNG_GALAXY
    },
    
    {
        id: 10,
        title: "Samsung Galaxy Tab S7+",
        des: "Top 2 tuần - 21/11/2021",
        button: "Đã nhận",
        image: SAMSUNG_GALAXY
    },
];
const MyGift:React.FC<BeatListStackScreenProps<'MyGift'>> = ({navigation,route}) => {
    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Quà của tôi</Text>
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
                        <AntDesignIcon name = "arrowleft" size={20} color={Colors.WHITE}/>
                    }
                    leftHeader={goBack}
                    centerHeader={centerHeader()} />
                <FlatList
                    style={styles.flatList}
                    numColumns={2}
                    data={DATA}
                    // renderItem={renderItem}
                    renderItem={({ item }) => <ItemGift id={item.id}
                        title={item.title}
                        des={item.des}
                        button={item.button}
                        image={item.image} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </Background>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    flatList: {
        marginHorizontal: Dimensions.get('window').width * 0.02,
        marginTop: 8
    },
});

export default MyGift;