import { Babysitter, User } from "../types";

export type MessageType = {
  sender: Babysitter | User;
  content: string;
  time_sent: string;  // for simplicity
}

let defaultUser: User = {
  id: 0,
  name: "Miracle Dorwart",
  pfp: require("../../assets/Avatar.png")
};

let defaultBabysitter: Babysitter = {
  id: 0,
  name: "Miracle Dorwart",
  pfp: require("../../assets/Avatar.png")
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