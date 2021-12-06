import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Page404 from "./pages/Page404";
import "./styles/Global.css";
import LoginProvider from "./contexts/LoginContext";
import AddVideo from "./pages/AddVideo";

function App() {
    return (
        <LoginProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/add-video" element={<AddVideo />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </LoginProvider>
    );
}

export default App;
