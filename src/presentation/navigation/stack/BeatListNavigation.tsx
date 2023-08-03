import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type BeatListProps = {
    id: string
};

type BeatNewProps = {
};

type HistoryProps = {
};

type ProposeProps = {
};

type HotUseProps = {
};

type NotificationProps = {
};

type MyGiftProps = {
};

export type BeatListStackParamList = {
    BeatList: BeatListProps | undefined;
    BeatNew: BeatNewProps | undefined;
    History: HistoryProps | undefined;
    Propose: ProposeProps | undefined;
    HotUse: HotUseProps | undefined;
    Notification: NotificationProps | undefined;
    MyGift: MyGiftProps | undefined;
};

export type BeatListStackNavigation = StackNavigationProp<BeatListStackParamList>;

export type S = keyof BeatListStackParamList;

export type BeatListStackScreenProps<RouterName extends S> = StackScreenProps<
    BeatListStackParamList,
    RouterName
>;