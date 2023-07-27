import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type ProfileProps = {
};

type UserVideoListProps = {
};

export type ProfileParamList = {
    Profile: ProfileProps | undefined;
    UserVideoList: UserVideoListProps | undefined;
};

export type ProfileNavigation = StackNavigationProp<ProfileParamList>;

export type S = keyof ProfileParamList;

export type ProfileScreenProps<RouterName extends S> = StackScreenProps<
    ProfileParamList,
    RouterName
>;