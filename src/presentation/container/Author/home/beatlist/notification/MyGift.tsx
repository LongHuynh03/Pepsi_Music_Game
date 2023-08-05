import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import ItemGift from './MyGift.item';
import Background from '../../../../../component/background/Background';
import Header from '../../../../../component/header/Header';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../../../resource/value/Colors';
import { BeatListStackScreenProps } from '../../../../../navigation/stack/BeatListNavigation';
import { Gift } from '../../../../../../core/model/Gift';
import { rtdb } from '../../../../../../core/api/url/RealTimeDB';

const MyGift: React.FC<BeatListStackScreenProps<'MyGift'>> = ({ navigation, route }) => {

    let listGift: Gift[] = [];

    useEffect(() => {

        const getGift = async () => {
            const get = rtdb.ref('/Gifts')
                .once('value', (snapshot: any) => {
                    snapshot.forEach((item: any) => {
                        let gift: Gift = {
                            keyGift: "1"
                        };
                        gift.keyGift = item.key;
                        gift.des = item.val().des;
                        gift.image = item.val().image;
                        gift.title = item.val().title;
                        listGift.push(gift);
                    })
                    // console.log(list);
                });
        }

        getGift();
        return () => { }
    }, [])


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
                        <AntDesignIcon name="arrowleft" size={20} color={Colors.WHITE} />
                    }
                    leftHeader={goBack}
                    centerHeader={centerHeader()} />
                <FlatList
                    style={styles.flatList}
                    numColumns={2}
                    data={listGift}
                    // renderItem={renderItem}
                    renderItem={({ item }) => <ItemGift
                        item={item} />}
                    keyExtractor={(item) => item.keyGift.toString()}
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