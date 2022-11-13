import React, {useState} from "react";

const iniState = {
  checkAuth: false,
  admin: false,
  user: false,
};
export const ContextAuth = React.createContext();

const ProvideAuth = ({children}) => {
  const [authStatus, setAuth] = useState(iniState);
  
  const handleAuthStatus = (auth) => {
    setAuth(auth);
  };
  return (
    <ContextAuth.Provider value={{authStatus, handleAuthStatus}}>
      {children}
    </ContextAuth.Provider>
  );
};

export default ProvideAuth;
