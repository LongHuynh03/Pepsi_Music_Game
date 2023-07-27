import { createStackNavigator } from "@react-navigation/stack";
import { BeatListStackParamList } from "../stack/BeatListNavigation";
import BeatList from "../../container/Author/home/beatlist/BeatList.view";
import BeatNew from "../../container/Author/home/beatlist/BeatNew.view";
import History from "../../container/Author/home/beatlist/History.view";
import HotUse from "../../container/Author/home/beatlist/HotUse.view";
import Notification from "../../container/Author/notification/Notification";
import Propose from "../../container/Author/home/beatlist/Propose.view";

const Stack = createStackNavigator<BeatListStackParamList>();

export const BeatListNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BeatList" component={BeatList} />
            <Stack.Screen name="BeatNew" component={BeatNew} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="HotUse" component={HotUse} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Propose" component={Propose} />
        </Stack.Navigator>
    )
}