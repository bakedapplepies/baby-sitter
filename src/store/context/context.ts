import { createContext } from "react";
import { User } from "../../types";

type ContextVarsType = {
  currentUser: User;
  chatMsg: string;
}

export const ContextObject: ContextVarsType = {
  currentUser: {id: 1, name: "John", pfp: require("../../../assets/Avatar.png")},
  chatMsg: ""
}

const Context = createContext(ContextObject);
export default Context;