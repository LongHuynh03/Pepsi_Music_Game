import { createStackNavigator } from "@react-navigation/stack";
import { BeatListStackParamList } from "../stack/BeatListNavigation";
import BeatList from "../../container/Author/home/beatlist/BeatList.view";
import History from "../../container/Author/home/beatlist/History.view";
import HotUse from "../../container/Author/home/beatlist/HotUse.view";
import Propose from "../../container/Author/home/beatlist/Propose.view";
import MyGift from "../../container/Author/home/beatlist/notification/MyGift";
import { MainTabScreenProps } from "../stack/TabNavigation";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import BeatNew from "../../container/Author/home/beatlist/BeatNew.view";
import NotificationScreen from "../../container/Author/home/beatlist/notification/Notification";

const Stack = createStackNavigator<BeatListStackParamList>();

export const BeatListNavigation: React.FC<MainTabScreenProps<'BestList'>> = ({navigation,route}) => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BeatList" component={BeatList}/>
            <Stack.Screen name="BeatNew" component={BeatNew} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="HotUse" component={HotUse} />
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="Propose" component={Propose} />
            <Stack.Screen name="MyGift" component={MyGift} />
        </Stack.Navigator>
    )
}