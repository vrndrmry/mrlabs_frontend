import React, {createContext, useState } from "react";

export const UserContext = React.createContext({user:'',setUser: ()=>{}})

export function UserContextProvider({children}){
    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}