export type RootStackParams = {
  Auth: undefined;
  BottomTab: undefined;
  Chatting: undefined;
}

export type BottomTabParams = {
  Search: undefined;
  Chat: undefined;
  Info: undefined;
  Notification: undefined;
}

export type AuthStackParams = {
  Splash: undefined;
  BabysitterOrUser: undefined;
  SignUp: {
    isBabysitter: boolean;
  };
  SignIn: {
    isBabysitter: boolean;
  };
  SetUpAccount: undefined;
}