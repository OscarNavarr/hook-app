import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Oscar A. Navarro',
    email: 'oscar@gmail.com'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo', user: user }}>
        { children }
    </UserContext.Provider>
  )
}
