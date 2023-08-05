import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import { Colors } from '../../resource/value/Colors'
import { TouchableOpacity } from 'react-native'

interface Dialog {
    isVisible?: boolean;
    onCancel?: () => void;
    onAccept?: () => void;
}

const DialogReported: React.FC<Dialog> = (props) => {

    const { isVisible, onAccept, onCancel } = props;

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.title}>Cảm ơn bạn đã báo </Text>
                    <Text style={styles.title}>cáo bình luận này</Text>
                    <View style={styles.boxProblem}>
                        <Text style={styles.txtProblem}>Video Spam</Text>
                    </View>
                    <Text style={styles.txtNotif}>
                        Nội dung báo cáo của bạn đã được chúng tôi ghi nhận lại, chúng tôi sẽ xem xét và xử lý để web app ngày càng văn minh và phát triển hơn.
                    </Text>
                    <View style={styles.box_1}>
                        <TouchableOpacity style={styles.btnCancel} onPress={onCancel}>
                            <Text style={styles.txtCancel}>Quay lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnAccept} onPress={onAccept}>
                            <Text style={styles.txtAccept}>Xác nhận</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

export default DialogReported

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BACKGROUND_DIALOG
    },
    card: {
        width: Dimensions.get('screen').width * 0.8,
        backgroundColor: Colors.BLUE_PEPSI,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: Dimensions.get('screen').width * 0.05,
        borderRadius: 16
    },
    title: {
        width: '100%',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 27,
        textAlign: 'center',
        justifyContent: 'center',
        color: Colors.WHITE
    },
    boxProblem: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.01
    },
    txtProblem: {
        width: '80%',
        backgroundColor: Colors.LYRIC,
        textAlign: 'center',
        padding: 3,
        borderRadius: 6,
        fontSize: 14,
        fontWeight: '500'
    },
    txtNotif: {
        fontSize: 14,
        fontWeight: '400',
        color: Colors.WHITE,
        marginTop: Dimensions.get('screen').height * 0.01
    },
    box_1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Dimensions.get('screen').height * 0.03
    },
    btnCancel: {
        width: Dimensions.get('screen').width * 0.3,
        height: Dimensions.get('screen').height * 0.04,
        borderWidth: 2,
        borderColor: Colors.WHITE,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtCancel: {
        fontSize: 14,
        fontWeight: '500',
        color: Colors.WHITE
    },
    btnAccept: {
        width: Dimensions.get('screen').width * 0.30,
        height: Dimensions.get('screen').height * 0.04,
        backgroundColor: Colors.WHITE,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtAccept: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.BLUE_PEPSI
    },
})