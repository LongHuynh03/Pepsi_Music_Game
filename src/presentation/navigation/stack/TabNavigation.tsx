import type { BottomTabNavigationProp, BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type VideoListProps = {

};

type BestListProps = {
    
};

type RecordProps = {

};

type RatingProps = {

};

type ProfileProps = {

};

export type MainTabParamList = {
    VideoList: VideoListProps | undefined,
    BestList: BestListProps | undefined,
    Record: RecordProps | undefined,
    Rating: RatingProps | undefined,
    Profile: ProfileProps | undefined
};

export type MainTabNavigation = BottomTabNavigationProp<MainTabParamList>;

export type S = keyof MainTabParamList;

export type MainTabScreenProps<RouterName extends S> = BottomTabScreenProps<
    MainTabParamList,
    RouterName
>;