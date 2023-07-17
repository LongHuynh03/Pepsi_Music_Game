import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigation } from "./Authen/AuthenNavigation"
import { AuthorNavigation } from "./Author/AuthorNavigation"

export const AppNavigation = () => {

    const authen = () => {
        return (
            <AuthenNavigation/>
        )
    }

    const author = () => {
        return (
            <AuthorNavigation/>
        )
    }

    return (
        <NavigationContainer>
            <AuthenNavigation/>
            {/* <AuthorNavigation/> */}
        </NavigationContainer>
    )
}