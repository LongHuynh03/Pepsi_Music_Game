import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackParamList } from "../stack/StackNavigation";
import LogIn from "../../container/Authen/LogIn/LogIn.view";
import { MainTabNavigation, MainTabParamList } from "../stack/TabNavigation";
import Introduce from "../../container/Author/introduce/Introduce.view";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { BACKGROUND_BOOTOM_TAB, CENTER_BUTTON_1X, ICON_BESTLIST, ICON_BESTLIST_FOCUS, ICON_HOME, ICON_PROFILE, ICON_PROFILE_FOCUS, ICON_RATING, ICON_RATING_FOCUS, ICON_RECORD, ICON_VIDEOLIST, ICON_VIDEOLIST_FOCUS } from "../../../../assets";
import { Colors } from "../../resource/value/Colors";
import { createStackNavigator } from "@react-navigation/stack";
import BeatList from "../../container/Author/home/beatlist/BeatList.view";
import BeatNew from "../../container/Author/home/beatlist/BeatNew.view";
import History from "../../container/Author/home/beatlist/History.view";
import HotUse from "../../container/Author/home/beatlist/HotUse.view";
import Propose from "../../container/Author/home/beatlist/Propose.view";
import Notification from "../../container/Author/notification/Notification";
import NewVideo from "../../container/Author/home/videolist/NewVideo.view";
import Record from "../../container/Author/home/Record.view";


const Tab = createBottomTabNavigator();

const StackBeatList = createStackNavigator();

const beatList = () => {
    return (
        <StackBeatList.Navigator screenOptions={{ headerShown: false }}>
            <StackBeatList.Screen name = "BeatList" component={BeatList}/>
            <StackBeatList.Screen name = "BeatNew" component={BeatNew}/>
            <StackBeatList.Screen name = "History" component={History}/>
            <StackBeatList.Screen name = "HotUse" component={HotUse}/>
            <StackBeatList.Screen name = "Propose" component={Propose}/>
            <StackBeatList.Screen name = "Notification" component={Notification}/>
        </StackBeatList.Navigator>
    )
}

export const AuthorNavigation = () => {

    return (
        <Tab.Navigator initialRouteName="Record" 
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    height: Dimensions.get('screen').height * 0.1,
                    justifyContent: "center",
                    backgroundColor: Colors.BLUE_PEPSI,
                },
                tabBarItemStyle: {
                    marginBottom: Dimensions.get('screen').height * 0.03,
                },
                headerShown: false,
                tabBarActiveTintColor: Colors.WHITE,
                tabBarInactiveTintColor: Colors.BOTTOM_BAR,
            })}>
            <Tab.Screen name="VideoList" component={NewVideo}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? ICON_VIDEOLIST_FOCUS : ICON_VIDEOLIST} style={styles.image}/>
                        </View>
                    ),
                    title: 'Video List',
                }} />
            {/* <Tab.Screen name="BestList" component= {}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused? ICON_BESTLIST_FOCUS : ICON_BESTLIST} style={styles.image}/>
                        </View>
                    ),
                    title: 'Best List',
                }} /> */}
            <Tab.Screen name="Record" component={Record}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                top: - Dimensions.get('screen').height * 0.03,
                                borderRadius: 45,
                                width: Dimensions.get('screen').width / 5,
                            }}>
                            <Image source={ICON_RECORD} style={styles.imageRecord} />
                        </View>
                    ),
                    title: 'Thu âm',
                }} />
            <Tab.Screen name="Rating" component={Rating}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? ICON_RATING_FOCUS : ICON_RATING} style={styles.image}/>
                        </View>
                    ),
                    title: 'Xếp hạng',
                }} />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={focused ? ICON_PROFILE_FOCUS : ICON_PROFILE} style={styles.image}/>
                        </View>
                    ),
                    title: 'Cá nhân',
                }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    imageRecord: {
        resizeMode: 'contain',
        height: Dimensions.get('screen').height * 0.1,
        marginStart: '-50%',
    },
    image: {
        resizeMode: 'contain',
        width: Dimensions.get('screen').width * 0.08
    },
});
