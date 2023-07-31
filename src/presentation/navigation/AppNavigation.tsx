import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigation } from "./Authen/AuthenNavigation"
import { AuthorNavigation } from "./Author/AuthorNavigation"
import { BeatListNavigation } from "./Author/BeatListNavigation"
import { RemixNavigation } from "./Author/RemixNavigation"
import { RankingNavigation } from "./Author/RankingNavigation"

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
            {/* <BeatListNavigation/> */}
            {/* <RemixNavigation/> */}
            {/* <RankingNavigation/> */}
        </NavigationContainer>
    )
}