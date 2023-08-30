import { createContext, PropsWithChildren } from "react";
import { User } from "../../types";

type ContextVarsType = {
  currentUser: User;
  chatMsg: string;
}
const ContextObject: ContextVarsType = {
  currentUser: { id: "u0", name: "Paityn George", pfp: require("../../../assets/Avatar.png") },
  chatMsg: ""
}
export const Context = createContext({
  currentUser: {},
  chatMsg: ""
});

const ContextProvider = (props: PropsWithChildren) => {

  return (
    <Context.Provider value={ContextObject}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;