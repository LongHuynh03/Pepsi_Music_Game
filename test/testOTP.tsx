import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, userSelecter } from '../src/presentation/share-state/redux/reducers/userReducer';
import { rtdb } from '../src/core/api/url/RealTimeDB';
import { Users } from '../src/core/model/User';
import { Music } from '../src/core/model/Music';
import { Gift } from '../src/core/model/Gift';

const TestOTP = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const getGift = async () => {
            let gift : Gift = {
                keyGift: "1"
            };
            const getUsers = rtdb.ref('/Gifts').once('value');
            await getUsers.then((snapshot: any) => {
              snapshot.forEach((item: any) => {
                gift.keyGift = item.key;
                gift.des = item.val().des;
                gift.image = item.val().image;
                gift.title = item.val().title;
                list.push(gift);
              })
              // console.log(list);
            });
          }
      
          getGift();
      return () => {
        
      }
    }, [])
    

    const data = useSelector(userSelecter);

    let list: Gift[] = [];
    const clickTest = () => {
        // const get = rtdb.ref('/Musics')
        // .once('value', (value: any) => {
        //     value.forEach((data: any) => {
        //         // console.log(data.val());
        //         list.push(data.val());
        //     })
        // })
        console.log(list);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ borderWidth: 1, width: 100 }} onPress={clickTest}>
                <Image style={{width: 100, height: 100}} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/pepsimusicgame-f3252.appspot.com/o/Image-Card_2.png?alt=media&token=acffd22d-172b-4e2a-abec-921b7ad84c08' }}/>
            </TouchableOpacity>
        </View>
    )
}

export default TestOTP

const styles = StyleSheet.create({})