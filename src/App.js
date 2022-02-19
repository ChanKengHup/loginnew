import React from "react"
import "./App.css"
import { BrowserRouter, Routes,Route } from "react-router-dom"
import Login from "./features/User/Login"
import Signup from "./features/User/Signup"
import Dashboard from "./features/User/Dashboard"
import { PrivateRoute } from "./helpers/PrivateRoute"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route>
          <Route  element={Login} path="/login" />
          <Route  element={Signup} path="/signup" />
          {/* <PrivateRoute element={Dashboard} path="/" /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App