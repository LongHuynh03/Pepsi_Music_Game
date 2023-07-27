import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "../stack/StackNavigation";
import FirstLogIn from "../../container/Authen/LogIn/FirstLogIn.view";
import LogIn from "../../container/Authen/LogIn/LogIn.view";
import LogInOTP from "../../container/Authen/sendOTP/SendOTP.view";
import Register from "../../container/Authen/Register/Register.view";
import Introduce from "../../container/Author/introduce/Introduce.view";
import { AuthorNavigation } from "../Author/AuthorNavigation";
import Rules from "../../container/Author/rules/Rules";
import BeatList from "../../container/Author/home/beatlist/BeatList.view";
import BeatNew from "../../container/Author/home/beatlist/BeatNew.view";
import History from "../../container/Author/home/beatlist/History.view";
import HotUse from "../../container/Author/home/beatlist/HotUse.view";
import Propose from "../../container/Author/home/beatlist/Propose.view";
import Notification from "../../container/Author/notification/Notification";
import { RemixStackParamList } from "../stack/RemixListNavigation";
import Recording from "../../container/Author/home/remix/Record.view";
import Remix from "../../container/Author/home/remix/Remix.view";
import AcceptAnimation from "../../container/Author/home/remix/AcceptAnimation";
import CreateAnimation from "../../container/Author/home/remix/CreateAnimation";
import CreatePost from "../../container/Author/home/remix/CreatePost.view";
import EditNameSong from "../../container/Author/home/remix/EditNameSong.view";
import Thanks from "../../container/Author/home/remix/Thanks";



const Stack = createStackNavigator<RemixStackParamList>();

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
            <Stack.Screen name="Recording" component={Recording} />
            <Stack.Screen name="Remix" component={Remix} />
            <Stack.Screen name="AcceptAnimation" component={AcceptAnimation} />
            <Stack.Screen name="CreateAnimation" component={CreateAnimation} />
            <Stack.Screen name="CreatePost" component={CreatePost} />
            <Stack.Screen name="EditNameSong" component={EditNameSong} />
            <Stack.Screen name="Thanks" component={Thanks} />
        </Stack.Navigator>
    )
}
