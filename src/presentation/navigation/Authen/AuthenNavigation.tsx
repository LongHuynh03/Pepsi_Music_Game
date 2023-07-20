import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "../stack/StackNavigation";
import FirstLogIn from "../../container/Authen/LogIn/FirstLogIn.view";
import LogIn from "../../container/Authen/LogIn/LogIn.view";
import LogInOTP from "../../container/Authen/sendOTP/SendOTP.view";
import Register from "../../container/Authen/Register/Register.view";
import Introduce from "../../container/Author/introduce/Introduce.view";
import { AuthorNavigation } from "../Author/AuthorNavigation";
import Rules from "../../container/Author/home/Rules";
import BeatList from "../../container/Author/home/beatlist/BeatList.view";
import BeatNew from "../../container/Author/home/beatlist/BeatNew.view";
import History from "../../container/Author/home/beatlist/History.view";
import HotUse from "../../container/Author/home/beatlist/HotUse.view";
import Propose from "../../container/Author/home/beatlist/Propose.view";
import Notification from "../../container/Author/notification/Notification";



const Stack = createStackNavigator<MainStackParamList>();

export const AuthenNavigation = () => {
    return (
        // <Stack.Navigator screenOptions={{ headerShown: false }}>
        //     <Stack.Screen name='FirstLogIn' component={FirstLogIn} />
        //     <Stack.Screen name='LogIn' component={LogIn} />
        //     <Stack.Screen name='Register' component={Register} />
        //     <Stack.Screen name='LogInOTP' component={LogInOTP} />
        //     <Stack.Screen name='Instruct' component={Introduce} />
        //     {/* <Stack.Screen name='Home' component={AuthorNavigation} /> */}
        //     <Stack.Screen name='Rules' component={Rules} />
        //     //
        //     <Stack.Screen name = "BeatList" component={BeatList}/>
        //     <Stack.Screen name = "BeatNew" component={BeatNew}/>
        //     <Stack.Screen name = "History" component={History}/>
        //     <Stack.Screen name = "HotUse" component={HotUse}/>
        //     <Stack.Screen name = "Propose" component={Propose}/>
        //     <Stack.Screen name = "Notification" component={Notification}/>
        // </Stack.Navigator>

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BeatList" component={BeatList} />
            <Stack.Screen name="BeatNew" component={BeatNew} />
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="HotUse" component={HotUse} />
            <Stack.Screen name="Propose" component={Propose} />
            <Stack.Screen name="Notification" component={Notification} />
        </Stack.Navigator>
    )
}
