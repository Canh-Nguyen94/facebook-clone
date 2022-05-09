import React,{useContext,useState} from 'react'
import axios from 'axios'
const AuthContext = React.createContext({
    username: "",
    email: ""
})
export const useAuth = ()=>useContext(AuthContext)

function AuthContextProvider({children}) {
    const [user,setUser] = useState(null);
    const users={ email: "jinx@gmail.com", password: "a123456"}
    const login = async()=>{
       const res = await axios.post("http://localhost:8800/api/v1/auth/login", users)
       console.log("responde", res)
    }
  return (
    <AuthContext.Provider value={{user, login}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider