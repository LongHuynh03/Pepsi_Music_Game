import React, {useEffect} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ItemNotification from './Notification.item';
import Background from '../../../../../component/background/Background';
import Header from '../../../../../component/header/Header';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../../../resource/value/Colors';
import { RankingStackScreenProps } from '../../../../../navigation/stack/RankingNavigation';
import { Notification } from '../../../../../../core/model/Notification';
import { rtdb } from '../../../../../../core/api/url/RealTimeDB';

const Notification: React.FC<RankingStackScreenProps<'Notification'>> = ({navigation, route})=> {

    let listNotif: Notification[] = [];

    useEffect(() => {
      
        const getGift = async () => {
            let notifi : Notification = {
                keyNotification: "1"
            };
            const get = rtdb.ref('/Notificatios').once('value');
            await get.then((snapshot: any) => {
              snapshot.forEach((item: any) => {
                notifi.keyNotification = item.key;
                notifi.image = item.val().image;
                notifi.role = item.val().role;
                notifi.time = item.val().time;
                notifi.title = item.val().title;
                listNotif.push(notifi);
              })
              // console.log(list);
            });
          }
      
          getGift();

      return () => {}
    }, [])
    

    const centerHeader = () => {
        return (
            <View style={styles.header_1}>
                <Text style={styles.textHeader}>Thông báo</Text>
            </View>
        )
    }

    const goBack = () => {navigation.navigate('Ranking')};

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
                    data={listNotif}
                    renderItem={({ item }) => <ItemNotification
                        item={item}  navigation={navigation}/>}
                    keyExtractor={(item) => item.keyNotification.toString()}
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