import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <UserContext.Provider value={{ user, setUser, inputValue, setInputValue }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
