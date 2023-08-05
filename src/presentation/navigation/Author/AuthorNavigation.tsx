import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackParamList } from "../stack/StackNavigation";
import LogIn from "../../container/Authen/LogIn/LogIn.view";
import { MainTabNavigation, MainTabParamList } from "../stack/TabNavigation";
import Introduce from "../../container/Author/introduce/Introduce.view";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { CENTER_BUTTON_1X, ICON_RECORD } from "../../../../assets";
import { Colors } from "../../resource/value/Colors";
import { useSelector } from "react-redux";
import { userSelecter } from "../../share-state/redux/reducers/userReducer";
import { BeatListNavigation } from "./BeatListNavigation";
import { RankingNavigation } from "./RankingNavigation";
import { ProfileNavigation } from "./ProfileNavigation";
import { RemixNavigation } from "./RemixNavigation";
import Home from "../../container/Author/home/Home.view";
import { VideoListNavigation } from "./VideoListNavigation";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IonIcon from "react-native-vector-icons/Ionicons";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";


const Tab = createBottomTabNavigator();

export const AuthorNavigation = () => {

    const data = useSelector(userSelecter);

    console.log(" AuthorNavigation :")
    console.log(data.keyUser)

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            backBehavior="initialRoute"
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
            <Tab.Screen name="MainVideoList" component={VideoListNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {
                                focused ?
                                    <MaterialCommunityIcon name="play-box" color={Colors.WHITE} size={20} />
                                    :
                                    <MaterialCommunityIcon name="play-box-outline" color={Colors.BOTTOM_BAR} size={20} />
                            }
                        </View>
                    ),
                    title: 'Video List',
                }} />
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarButton: () => undefined
                }} />
            <Tab.Screen name="BestList" component={BeatListNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {
                                focused ?
                                    <IonIcon name="musical-notes" color={Colors.WHITE} size={20} />
                                    :
                                    <IonIcon name="musical-notes-outline" color={Colors.BOTTOM_BAR} size={20} />
                            }
                        </View>
                    ),
                    title: 'Best List',
                }} />
            <Tab.Screen name="Record" component={RemixNavigation}
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
                    tabBarStyle: {
                        display: 'none',
                    }
                }} />
            <Tab.Screen name="Rating" component={RankingNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {
                                focused ?
                                    <IonIcon name="musical-notes-outline" color={Colors.BOTTOM_BAR} size={20} />
                                    :
                                    <IonIcon name="musical-notes-outline" color={Colors.BOTTOM_BAR} size={20} />
                            }
                        </View>
                    ),
                    title: 'Xếp hạng',
                }} />
            <Tab.Screen name="Profile" component={ProfileNavigation}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            {
                                focused ?
                                    <AntDesignIcon name="user" color={Colors.BOTTOM_BAR} size={20} />
                                    :
                                    <AntDesignIcon name="user" color={Colors.BOTTOM_BAR} size={20} />
                            }
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
