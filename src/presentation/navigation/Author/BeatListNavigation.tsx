import { createStackNavigator } from "@react-navigation/stack";
import { BeatListStackParamList } from "../stack/BeatListNavigation";
import BeatList from "../../container/Author/home/beatlist/BeatList.view";
import BeatNew from "../../container/Author/home/remix/BeatNew.view";
import History from "../../container/Author/home/beatlist/History.view";
import HotUse from "../../container/Author/home/beatlist/HotUse.view";
import Propose from "../../container/Author/home/beatlist/Propose.view";
import Notification from "../../container/Author/home/beatlist/notification/Notification";
import MyGift from "../../container/Author/home/beatlist/notification/MyGift";
import { MainTabScreenProps } from "../stack/TabNavigation";
import {useLayoutEffect} from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator<BeatListStackParamList>();

export const BeatListNavigation: React.FC<MainTabScreenProps<'BestList'>> = ({navigation,route}) => {
    
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BeatList" component={BeatList}/>
            <Stack.Screen name="BeatNew" component={BeatNew} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="HotUse" component={HotUse} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Propose" component={Propose} />
            <Stack.Screen name="MyGift" component={MyGift} />
        </Stack.Navigator>
    )
}