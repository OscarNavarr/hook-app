import { Link, Navigate, Route, Routes } from "react-router-dom"
import { TodoApp } from "../useReducer/TodoApp"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"


export const MainApp = () => {
  return (
    <UserProvider>
        
        <NavBar/>
        

        <Routes>
            <Route path="/" element={ <LoginPage/> }/>
            <Route path="login" element={ <LoginPage/> }/>
            <Route path="about" element={ <AboutPage/> }/>
            <Route path="todoapp" element={ <TodoApp/> }/>

            <Route path="/*" element={<Navigate to="/about"/>}/>
        </Routes>
    </UserProvider>
  )
}
