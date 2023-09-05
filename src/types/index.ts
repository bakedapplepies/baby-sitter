import { ImageSourcePropType } from "react-native";

export type Babysitter = {
  id: string;
  name: string;
  pfp: ImageSourcePropType | null;
  email: string | null;
  phoneNum: string;
  password: string;
} | null;

export type User = {
  id: string;
  name: string;
  pfp: ImageSourcePropType | null;
  email: string | null;
  phoneNum: string;
  password: string;
} | null;