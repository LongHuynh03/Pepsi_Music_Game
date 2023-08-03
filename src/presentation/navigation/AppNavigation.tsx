import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigation } from "./Authen/AuthenNavigation"
import { AuthorNavigation } from "./Author/AuthorNavigation"
import { BeatListNavigation } from "./Author/BeatListNavigation"
import { RemixNavigation } from "./Author/RemixNavigation"
import { RankingNavigation } from "./Author/RankingNavigation"
import { useDispatch, useSelector } from "react-redux"
import { userSelecter } from "../share-state/redux/reducers/userReducer"
import auth from '@react-native-firebase/auth'
import { useEffect } from "react"
import { statusSelecter } from "../share-state/redux/reducers/statusReducer"

export const AppNavigation = () => {

    const statusData = useSelector(statusSelecter);

    console.log(statusData)

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
            {
                statusData.status ? <AuthorNavigation/> : <AuthenNavigation/>
            } 
            {/* <AuthenNavigation/>
            <AuthorNavigation/>
            {/* <BeatListNavigation/> */}
            {/* <RemixNavigation/> */}
            {/* <RankingNavigation/> */}
        </NavigationContainer>
    )
}