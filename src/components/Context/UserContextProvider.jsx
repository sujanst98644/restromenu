import React, {useState} from "react"
import UserContext from "./UserContext"


function UserContextProvider({children}) {
    const [User, setUser] = useState('')
  return (
    <UserContext.Provider value={{User, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider