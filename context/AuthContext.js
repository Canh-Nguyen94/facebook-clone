import React,{useContext,useState} from 'react'
import axios from 'axios'
const AuthContext = React.createContext({
    
})
export const useAuth = ()=>useContext(AuthContext)

function AuthContextProvider({children}) {
    const [user,setUser] = useState(null);
    
    const login = async(email,password) => {
      const res = await axios.post("auth/login", { email, password})
      console.log("response123", res.data.username)
      setUser(res.data)
    }
  return (
    <AuthContext.Provider value={{user, login}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider