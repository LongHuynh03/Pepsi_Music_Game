import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type RankingProps = {
};

type TopViewProps = {
};

type OrtherProfileProps = {
};

type OrtherVideoProps = {
};

type NotificationProps = {
};

type MyGiftProps = {
};

export type RankingStackParamList = {
    Ranking: RankingProps | undefined;
    TopView: TopViewProps | undefined;
    OrtherProfile: OrtherProfileProps | undefined;
    OrtherVideo: OrtherVideoProps | undefined;
    Notification: NotificationProps | undefined;
    MyGift: MyGiftProps | undefined;
};

export type RankingStackNavigation = StackNavigationProp<RankingStackParamList>;

export type S = keyof RankingStackParamList;

export type RankingStackScreenProps<RouterName extends S> = StackScreenProps<
    RankingStackParamList,
    RouterName
>;