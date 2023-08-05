import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigation } from "./Authen/AuthenNavigation"
import { AuthorNavigation } from "./Author/AuthorNavigation"
import { useSelector } from "react-redux"
import { statusSelecter } from "../share-state/redux/reducers/statusReducer"

export const AppNavigation = () => {

    const statusData = useSelector(statusSelecter);

    console.log(statusData)

    return (
        <NavigationContainer>
            {
                statusData.status ? <AuthorNavigation/> : <AuthenNavigation/>
            } 
        </NavigationContainer>
    )
}