
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({children}) => {

    const [isAuth, setIsAuth] = useState(true);

    const toggleAuth = () => {
        setIsAuth(!isAuth);
    }

    return (
        <AuthContext.Provider value={{
            isAuth,
            toggleAuth
        }}>{children}</AuthContext.Provider>
    )

}

export default AuthContextProvider;
