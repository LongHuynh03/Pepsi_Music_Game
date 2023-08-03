import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type VideoListProps = {
};

type NotificationProps = {
};

type MyGiftProps = {
};
export type VideoListStackParamList = {
    VideoList: VideoListProps | undefined;
    Notification: NotificationProps | undefined;
    MyGift: MyGiftProps | undefined;
};

export type VideoListStackNavigation = StackNavigationProp<VideoListStackParamList>;

export type S = keyof VideoListStackParamList;

export type VideoListStackScreenProps<RouterName extends S> = StackScreenProps<
    VideoListStackParamList,
    RouterName
>;