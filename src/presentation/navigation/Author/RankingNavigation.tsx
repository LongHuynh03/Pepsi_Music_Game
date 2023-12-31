import { createStackNavigator } from "@react-navigation/stack";
import { RankingStackParamList } from "../stack/RankingNavigation";
import TopView from "../../container/Author/home/leaderboard/TopView.view";
import Ranking from "../../container/Author/home/leaderboard/Ranking";
import OrtherProfile from "../../container/Author/home/leaderboard/OrtherProfile";
import OrtherVideo from "../../container/Author/home/leaderboard/OrtherVideoList";

const Stack = createStackNavigator<RankingStackParamList>();

export const RankingNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Ranking' component={Ranking} />
            <Stack.Screen name='TopView' component={TopView} />
            <Stack.Screen name='OrtherProfile' component={OrtherProfile} />
            <Stack.Screen name='OrtherVideo' component={OrtherVideo} />
        </Stack.Navigator>
    )
}