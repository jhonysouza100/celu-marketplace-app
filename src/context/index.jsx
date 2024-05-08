import { createContext, useState } from 'react'

export const AppContext = createContext(null);

export const AppProvider = ({children}) => {

  const [count, setCount] = useState(0)
  const [isAuth, setIsAuth] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)

  const handleAuthenticated = () => setAuthenticated(!authenticated)

  const data = {count, setCount, isAuth, setIsAuth, authenticated, handleAuthenticated}

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;

}