import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
const cctx = {
  username: "",
  access_token: "",
};
export const AuthContext = createContext(cctx);

export const AuthProvider = ({ children }: any) => {
  let [authTokens, setAuthTokens] = useState(
    localStorage.getItem("access_token") || ""
  );
  const auth: any = jwt_decode(localStorage.getItem("access_token") || "");
  let [user, setUser] = useState(auth.username);
  let [loading, setloading] = useState(true);
  // const history = useHistory();

  const contextData = {
    username: user,
    access_token: authTokens,
  };
  // useEffect(()=>{
  //   if (loading) {

  //   }
  // })
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
