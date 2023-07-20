import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

// type FirstLogInProps = {
//     userID: number;
// };

// type LoginProps = {
//     id: string;
//     name: string;
// };

// type LoginOTPProps = {
//     id: number;
// };

// type RegisterProps = {
// };

// type InstructProps = {
// };

// type HomeProps = {
// };

// type RulesProps = {
// };

//
type BeatListProps = {
    userID: number;
};

type BeatNewProps = {

};

type HistoryProps = {
    id: number;
};

type ProposeProps = {
};

type HotUseProps = {
};

type NotificationProps = {
};

// export type MainStackParamList = {
//     FirstLogIn: FirstLogInProps | undefined;
//     LogIn: LoginProps | undefined; 
//     LogInOTP: LoginOTPProps | undefined;
//     Register: RegisterProps | undefined;
//     Instruct: InstructProps | undefined;
//     Home: HomeProps | undefined;
//     Rules: RulesProps | undefined;
//     //
//     BeatList: BeatListProps | undefined;
//     BeatNew: BeatNewProps | undefined;
//     History: HistoryProps | undefined;
//     Propose: ProposeProps | undefined;
//     HotUse: HotUseProps | undefined;
//     Notification: NotificationProps | undefined;
// };

export type MainStackParamList = {
    BeatList: BeatListProps | undefined;
    BeatNew: BeatNewProps | undefined;
    History: HistoryProps | undefined;
    Propose: ProposeProps | undefined;
    HotUse: HotUseProps | undefined;
    Notification: NotificationProps | undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;