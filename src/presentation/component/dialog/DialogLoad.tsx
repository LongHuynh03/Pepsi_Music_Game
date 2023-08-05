import * as Progress from 'react-native-progress';
import { useEffect, useState } from 'react'
import { Modal, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../resource/value/Colors';
import { Dimensions } from 'react-native';
import { rtdb } from '../../../core/api/url/RealTimeDB';
import { Video } from '../../../core/model/Video';
import { useSelector } from 'react-redux';
import { userSelecter } from '../../share-state/redux/reducers/userReducer';
interface DialogLoadProps {
    isVisibile?: boolean,
    isStart?: boolean,
    navigation?: any
}

const DialogLoad: React.FC<DialogLoadProps> = (props) => {



    const { isVisibile, isStart, navigation } = props;
    const [isRunning, setIsRunning] = useState(isStart);
    const [visible, setVisible] = useState(isVisibile);
    const [index, setIndex] = useState(0);

    const data = useSelector(userSelecter);


    useEffect(() => {
        if (isRunning && index < 1) {
            setTimeout(() => setIndex((index) => index += 0.25), 1000);
        }
        if (index >= 1) {
            const newVideo = rtdb.ref('/Videos').push();
            const videoNew: Video = {
                keyVideo: '1',
                createAt: '06.08.2003',
                image: 'https://firebasestorage.googleapis.com/v0/b/pepsimusicgame-f3252.appspot.com/o/Image-Card_3.png?alt=media&token=db601815-7ec2-4418-80e3-3d962adf10c7',
                like: 0,
                view: 0,
                title: 'Có tiền nhiều để làm gì',
                userKey: data.keyUser,
            }
            newVideo.set(videoNew)
                .then(() => {
                    navigation.navigate('Thanks');
                });
        }
        return () => {

        }
    }, [index, isRunning])


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.boxText}>
                        <Text style={styles.modalText}>Video đang được tải lên</Text>
                        <Text style={styles.modalText}>{index * 100 + "%"}</Text>
                    </View>

                    <Progress.Bar
                        progress={index} width={Dimensions.get('screen').width * 0.7} color={Colors.WHITE} />
                </View>
            </View>
        </Modal>
    )
}

export default DialogLoad

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
        width: Dimensions.get('screen').width * 0.8,
        backgroundColor: Colors.BLUE_PEPSI,
        borderRadius: 16,
        padding: 25,
        alignItems: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        color: Colors.WHITE,
    },
    boxText: {
        flexDirection: 'row',
        width: Dimensions.get('screen').width * 0.7,
        justifyContent: 'space-between'
    },
})