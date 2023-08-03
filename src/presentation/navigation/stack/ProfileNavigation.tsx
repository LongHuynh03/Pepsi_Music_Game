import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type UserProfileProps = {
};

type UserVideoListProps = {
};

export type ProfileParamList = {
    UserProfile: UserProfileProps | undefined;
    UserVideoList: UserVideoListProps | undefined;
};

export type ProfileNavigation = StackNavigationProp<ProfileParamList>;

export type S = keyof ProfileParamList;

export type ProfileScreenProps<RouterName extends S> = StackScreenProps<
    ProfileParamList,
    RouterName
>;