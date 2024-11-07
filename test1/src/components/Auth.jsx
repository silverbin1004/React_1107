import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import { auth, googleProvider } from "../firebase"
import { useContext, useEffect, useState} from "react"
import { AuthContext } from "../context/AuthProvider"
function Auth () {

  const {user} = useContext(AuthContext)
  

  const handleGoogleLogin = () => {
    //TODO : 구글 로그인 구현
    signInWithPopup(auth, googleProvider)
  }


  const handleLogout = () => {
    signOut(auth)
  }




  console.log(user);

  return <div>
    {user ? 
    //로그인 상태에서 보여짐
    <div>
      <span>Hello, {user.displayName} </span>
      <button onClick={handleLogout}>Logout</button>
    </div>

    //로그아웃 상태에서 보여짐
    : <button onClick={handleGoogleLogin}>Login with Google</button>}
    
    

  </div>
}

export default Auth 