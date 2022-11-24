import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Subscribe } from "./pages/subscribe"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/subscribe" element={<Subscribe/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  )
}