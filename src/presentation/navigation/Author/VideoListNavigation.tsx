import { createStackNavigator } from "@react-navigation/stack";
import { VideoListStackParamList } from "../stack/VideoListNavigation";
import TopTapVideoList from "../TopTab/VideoList";
import Notification from "../../container/Author/home/videolist/notification/Notification";
import MyGift from "../../container/Author/home/videolist/notification/MyGift";

const Stack = createStackNavigator<VideoListStackParamList>();

export const VideoListNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="VideoList" component={TopTapVideoList}/>
            <Stack.Screen name='Notification' component={Notification}/>
            <Stack.Screen name='MyGift' component={MyGift} />
        </Stack.Navigator>
    )
}