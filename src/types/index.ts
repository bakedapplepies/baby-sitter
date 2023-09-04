import { ImageSourcePropType } from "react-native";

export type Babysitter = {
  id: string;
  name: string;
  pfp: ImageSourcePropType;
  email: string;
  phoneNum: string;
  password: string;
} | null;

export type User = {
  id: string;
  name: string;
  pfp: ImageSourcePropType;
  email: string;
  phoneNum: string;
  password: string;
} | null;