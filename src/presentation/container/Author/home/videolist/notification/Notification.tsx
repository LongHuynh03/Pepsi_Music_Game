import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ItemNotification from './Notification.item';
import Background from '../../../../../component/background/Background';
import Header from '../../../../../component/header/Header';
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../../../resource/value/Colors';
import { VideoListStackScreenProps } from '../../../../../navigation/stack/VideoListNavigation';
import { Notification } from '../../../../../../core/model/Notification';
import { rtdb } from '../../../../../../core/api/url/RealTimeDB';


const NotificationScreen: React.FC<VideoListStackScreenProps<'Notification'>> = ({navigation, route})=> {

    let listNotif: Notification[] = [];

    const [list_Notif, setlist_Notif] = useState<Notification[]>([])

    useEffect(() => {
      
        const getGift = async () => {
            
            const get = rtdb.ref('/Notifications').once('value');
            await get.then((snapshot: any) => {
              snapshot.forEach((item: any) => {
                let notifi : Notification = {
                    keyNotification: "1"
                };
                notifi.keyNotification = item.key;
                notifi.image = item.val().image;
                notifi.role = item.val().role;
                notifi.time = item.val().time;
                notifi.title = item.val().title;
                listNotif.push(notifi);
              })
              setlist_Notif(listNotif)
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

    const goBack = () => {navigation.navigate('VideoList')};

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
                    data={list_Notif}
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

export default NotificationScreen;