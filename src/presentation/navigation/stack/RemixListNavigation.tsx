import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type RecordingProps = {
};

type RemixProps = {
};

type AcceptAnimationProps = {
};

type CreateAnimationProps = {
};

type EditNameSongProps = {
};

type CreatePostProps = {
};

type ThanksProps = {
};

export type RemixStackParamList = {
    Recording: RecordingProps | undefined;
    Remix: RemixProps | undefined; 
    AcceptAnimation: AcceptAnimationProps | undefined;
    CreateAnimation: CreateAnimationProps | undefined;
    EditNameSong: EditNameSongProps | undefined;
    CreatePost: CreatePostProps | undefined;
    Thanks: ThanksProps | undefined;
};

export type RemixStackNavigation = StackNavigationProp<RemixStackParamList>;

export type S = keyof RemixStackParamList;

export type RemixStackScreenProps<RouterName extends S> = StackScreenProps<
    RemixStackParamList,
    RouterName
>;