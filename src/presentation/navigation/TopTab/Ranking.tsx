import { Dimensions, StyleSheet, TouchableOpacity, Animated, Text, View } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native'
import Header from '../../component/header/Header';
import Icon from 'react-native-vector-icons/Octicons';
import { Colors } from '../../resource/value/Colors';
import { width } from '../../resource/value/SizeScreen';
import Background from '../../component/background/Background';
import { CARD_PEPSI_1 } from '../../../../assets';
import NewVideo from '../../container/Author/home/videolist/NewVideo.view';
import Ranking from '../../container/Author/home/leaderboard/Ranking';
import TopView from '../../container/Author/home/leaderboard/TopView.view';


const Tab = createMaterialTopTabNavigator();

const TopTapRanking = () => {

    const goBack = () => {
        // navigation.navigate('Record');
    }
    const goNotification = () => {
        console.log(onClick);
    }

    const centerHeader = () => {
        return (
            <Text style={styles.textHeader}>Nhạc thịnh hành</Text>
        )
    };

    const [onClick, setonClick] = React.useState(1);

    return (
        <NavigationContainer>
            <Background>
                <Header
                    iconLeft={
                        <Icon name='home' size={20} color={Colors.WHITE} />
                    }
                    leftHeader={goBack}
                    centerHeader={centerHeader()}
                    iconRight={
                        <Icon name='bell' size={20} color={Colors.WHITE} />
                    }
                    rightHeader={goNotification}
                />
                <Tab.Navigator
                    screenOptions={{
                        tabBarItemStyle: {
                            width: Dimensions.get('screen').width /1.2,
                            borderRadius: 10,
                            // margin: Dimensions.get('screen').width * 0.03,
                            justifyContent: 'center',
                            alignItems: 'center',
                        },
                        tabBarStyle: {
                            backgroundColor: undefined,
                        },
                        // tabBarActiveTintColor: 'white',
                        // tabBarAllowFontScaling: true,
                        tabBarScrollEnabled: true,
                    }}
                >
                    <Tab.Screen name="Home" component={Ranking}
                        options={({ route }) => ({
                            tabBarIcon: ({ focused }) => (
                                <View style={focused ? [styles.boxTabChoose, styles.boxTab] : styles.boxTab}>
                                    <Text style={
                                        focused ?
                                            [styles.txtTabBar, styles.txtTabBarChoose]
                                            :
                                            styles.txtTabBar}
                                    >
                                        Người có lượt tương tác nhiều nhất
                                    </Text>
                                </View>
                            ),
                            tabBarShowLabel: false
                        })}
                    />
                    <Tab.Screen name="Settings" component={TopView} 
                    options={({ route }) => ({
                        tabBarIcon: ({ focused }) => (
                            <View style={focused ? [styles.boxTabChoose, styles.boxTab] : styles.boxTab}>
                                <Text style={
                                    focused ?
                                        [styles.txtTabBar, styles.txtTabBarChoose]
                                        :
                                        styles.txtTabBar}
                                >
                                    Video có lượt tương tác nhiều nhất
                                </Text>
                            </View>
                        ),
                        tabBarShowLabel: false
                    })}/>
                </Tab.Navigator>
            </Background>

        </NavigationContainer>
    )
}

export default TopTapRanking

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 27,
        color: Colors.WHITE
    },
    boxTab: {
        width: Dimensions.get('screen').width /1.2,
        height: Dimensions.get('screen').height * 0.04,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: -Dimensions.get('screen').width * 0.5,
        marginTop: -Dimensions.get('screen').width * 0.015,
    },
    boxTabChoose: {
        backgroundColor: Colors.WHITE,
        borderRadius: 6,
    },
    txtTabBar: {
        color: Colors.WHITE
    },
    txtTabBarChoose: {
        color: Colors.BLUE_PEPSI,
    },
})