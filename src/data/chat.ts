import { Babysitter, User } from "../types/index";

export type MessageType = {
  sender: Babysitter | User;
  content: string;
  time_sent: string;  // for simplicity
}

let defaultUser: User = {
  id: "u0",
  name: "Paityn George",
  pfp: require("../../assets/Avatar.png"),
  email: "paityngeorge@gmail.com",
  password: "1234",
  phoneNum: "1234"
};

let defaultBabysitter: Babysitter = {
  id: "b0",
  name: "Miracle Dorwart",
  pfp: require("../../assets/Avatar.png"),
  email: "paityngeorge@gmail.com",
  password: "1234",
  phoneNum: "1234",
};

export const ChatData: MessageType[] = [
  {
    sender: defaultBabysitter,
    content: "Lorem ipsum dolor sit amet",
    time_sent: "07:00"
  },
  {
    sender: defaultUser,
    content: "Lorem ipsum dolor sit amet consectetur.\nLectus ipsum est ac",
    time_sent: "07:05"
  },
  {
    sender: defaultBabysitter,
    content: "Lorem ipsum dolor sit amet",
    time_sent: "07:05"
  },
  {
    sender: defaultUser,
    content: "Lorem ipsum dolor sit amet",
    time_sent: "07:05"
  },
  {
    sender: defaultBabysitter,
    content: "Lorem ipsum dolor sit amet consectetur.\nLectus ipsum est ac",
    time_sent: "07:05"
  },
];