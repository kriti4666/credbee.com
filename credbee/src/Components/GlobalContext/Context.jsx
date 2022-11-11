
import { useState } from "react";
import { createContext } from "react";

const statusContext = createContext(null);

const Context = () => {

    const [status, setStatus] = useState("");

    return (
        <statusContext.Provider value={{
            status,
            setStatus
        }}>

        </statusContext.Provider>
    )

}

export default Context;
