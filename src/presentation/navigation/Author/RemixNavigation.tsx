import { createStackNavigator } from "@react-navigation/stack";
import Recording from "../../container/Author/home/remix/Record.view";
import Remix from "../../container/Author/home/remix/Remix.view";
import AcceptAnimation from "../../container/Author/home/remix/AcceptAnimation";
import CreateAnimation from "../../container/Author/home/remix/CreateAnimation";
import CreatePost from "../../container/Author/home/remix/CreatePost.view";
import EditNameSong from "../../container/Author/home/remix/EditNameSong.view";
import Thanks from "../../container/Author/home/remix/Thanks";
import { RemixStackParamList } from "../stack/RemixListNavigation";
import BeatNew from "../../container/Author/home/remix/BeatNew.view";

const Stack = createStackNavigator<RemixStackParamList>();

export const RemixNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BeatNew" component={BeatNew}/>
            <Stack.Screen name='Recording' component={Recording}/>
            <Stack.Screen name='Remix' component={Remix} />
            <Stack.Screen name='AcceptAnimation' component={AcceptAnimation} />
            <Stack.Screen name='CreateAnimation' component={CreateAnimation} />
            <Stack.Screen name='CreatePost' component={CreatePost} />
            <Stack.Screen name='EditNameSong' component={EditNameSong} />
            <Stack.Screen name='Thanks' component={Thanks} />
        </Stack.Navigator>
    )
}