import { createStackNavigator } from "@react-navigation/stack";
import { LeaderBoardParamList } from "../stack/LeaderBoardNavigation";

const Stack = createStackNavigator<LeaderBoardParamList>();

// const LeaderBoardNavigation = () => {
//     return (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name='Ranking' component={Recording} />
//             <Stack.Screen name='Remix' component={Remix} />
//             <Stack.Screen name='AcceptAnimation' component={AcceptAnimation} />
//         </Stack.Navigator>
//     )
// }