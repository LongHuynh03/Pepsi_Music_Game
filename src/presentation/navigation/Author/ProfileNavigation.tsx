import { createStackNavigator } from "@react-navigation/stack";
import { ProfileParamList } from "../stack/ProfileNavigation";
import Profile from "../../container/Author/home/profile/Profile.view";
import UserVideoList from "../../container/Author/home/profile/UserVideoList";

const Stack = createStackNavigator<ProfileParamList>();

export const ProfileNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name='UserProfile' component={Profile} />
            <Stack.Screen name='UserVideoList' component={UserVideoList}/>
        </Stack.Navigator>
    )
}