export type MessageType = {
  sender_id: string;  // or User_ID type
  content: string;
  time_sent: string;  // for simplicity
}

export const ChatData: MessageType[] = [
  {
    sender_id: "156",
    content: "Lorem ipsum dolor sit amet",
    time_sent: "07:00"
  },
  {
    sender_id: "123",
    content: "Lorem ipsum dolor sit amet consectetur.\nLectus ipsum est ac",
    time_sent: "07:05"
  },
  {
    sender_id: "156",
    content: "Lorem ipsum dolor sit amet",
    time_sent: "07:05"
  },
  {
    sender_id: "123",
    content: "Lorem ipsum dolor sit amet",
    time_sent: "07:05"
  },
  {
    sender_id: "156",
    content: "Lorem ipsum dolor sit amet consectetur.\nLectus ipsum est ac",
    time_sent: "07:05"
  },
];