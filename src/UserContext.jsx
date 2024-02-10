/*import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setUserContextData = (data) => {
    setUserData(data);
  };

  return (
    <UserContext.Provider value={{ userData, setUserContextData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

*//*
import React, { createContext, useContext, useState } from 'react'


  
 export const Kart =createContext()

const Context = ({children}) => {
    const [userData, setUserData] = useState(null);
  return (
    <Kart.Provider  value={{ userData, setUserContextData }}>
   {children}
    </Kart.Provider>
  )
}

export default Context
*/

import React, { createContext, useContext, useState } from 'react';

export const Kart = createContext();

const Context = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const setUserContextData = (data) => {
    setUserData(data);
  };

  return (
    <Kart.Provider value={{ userData, setUserContextData }}>
      {children}
    </Kart.Provider>
  );
};

export default Context;
