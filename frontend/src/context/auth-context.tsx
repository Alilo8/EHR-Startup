import React, {useState, createContext, useContext, } from "react";

interface contextProps{
  authState: {token: string}
  setAuthState: React.Dispatch<React.SetStateAction<{token: string}>>
}

const AuthContext = createContext<contextProps | null>(null);
const { Provider } = AuthContext;

const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState({
    token: ''
  });
  return (
    <Provider value={{
      authState,
      setAuthState
    }}>
      {children}
    </Provider>
  )
}

const useAuthContext = () => useContext(AuthContext);

export {
  AuthContext,
  AuthProvider,
  useAuthContext,
}