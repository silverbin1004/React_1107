import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    //인증 상태 변경 리스너
    //인증에 변화가 생겼을 때 user 정보를 업데이트한다.
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  },[])

  return <AuthContext.Provider value={{
    user: user,
  }}>
    {children}
  </AuthContext.Provider>
}