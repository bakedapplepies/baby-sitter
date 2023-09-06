import { ImageSourcePropType } from "react-native";


export type User = {
  id: string;
  name: string;
  pfp: ImageSourcePropType | null;
  email: string | null;
  phoneNum: string;
  password: string;
} | null;

export type Babysitter = User;
export type Parent = User;


export const createBabysitter = (userObj: User): Babysitter => {
  const newBabysitter: Babysitter = userObj;
  return newBabysitter;
}

export const createParent = (userObj: User): Parent => {
  const newParent: Parent = userObj;
  return newParent;
}