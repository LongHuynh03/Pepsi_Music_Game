import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "../stack/StackNavigation";
import FirstLogIn from "../../container/Authen/LogIn/FirstLogIn.view";
import LogIn from "../../container/Authen/LogIn/LogIn.view";
import LogInOTP from "../../container/Authen/sendOTP/SendOTP.view";
import Register from "../../container/Authen/Register/Register.view";
import Introduce from "../../container/Author/introduce/Introduce.view";
import { AuthorNavigation } from "../Author/AuthorNavigation";
import Rules from "../../container/Author/rules/Rules";



const Stack = createStackNavigator<MainStackParamList>();

export const AuthenNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='FirstLogIn' component={FirstLogIn} />
            <Stack.Screen name='LogIn' component={LogIn} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='LogInOTP' component={LogInOTP} />
            <Stack.Screen name='Instruct' component={Introduce} />
            <Stack.Screen name='Home' component={AuthorNavigation} />
            <Stack.Screen name='Rules' component={Rules} />
        </Stack.Navigator>
    )
}
