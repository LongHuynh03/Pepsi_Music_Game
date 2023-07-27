import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type RankingProps = {
};

type OtherProfileProps = {
};

type OrtherVideoProps = {
};

export type LeaderBoardParamList = {
    Ranking: RankingProps | undefined;
    OrtherProfile: OtherProfileProps | undefined;
    OrtherVideo: OrtherVideoProps | undefined;
};

export type LeaderBoardNavigation = StackNavigationProp<LeaderBoardParamList>;

export type S = keyof LeaderBoardParamList;

export type LeaderBoardScreenProps<RouterName extends S> = StackScreenProps<
    LeaderBoardParamList,
    RouterName
>;