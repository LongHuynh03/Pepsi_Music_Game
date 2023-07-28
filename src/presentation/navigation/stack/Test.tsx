import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type FirstLogInProps = {
};

type LoginProps = {
    id: string;
    name: string;
};

type LoginOTPProps = {
};

type RegisterProps = {
};

type InstructProps = {
};

type HomeProps = {
};

type RulesProps = {
};

export type MainStackParamList = {
    FirstLogIn: FirstLogInProps | undefined;
    LogIn: LoginProps | undefined; 
    LogInOTP: LoginOTPProps | undefined;
    Register: RegisterProps | undefined;
    Instruct: InstructProps | undefined;
    Home: HomeProps | undefined;
    Rules: RulesProps | undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;