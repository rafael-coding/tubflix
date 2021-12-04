import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Page404 from "./pages/Page404";
import "./styles/Global.css";
import LoginProvider from "./contexts/LoginContext";

function App() {
    // const navigate = useNavigate();

    const [authToken, setAuthToken] = useState(false);

    // const authRoutes = () => {
    //   if (authToken === false){
    //     navigate('/', { replace: true })
    //   }
    // }

    //get token at localstorage
    useEffect(() => {
        setAuthToken(localStorage.getItem("api-token"));
        // console.log(authToken);
    }, [authToken]);

    return (
        <LoginProvider>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Login authToken={authToken} setAuthToken={setAuthToken} />}
                    />
                    <Route path="/cadastro" element={<Register />} />
                    <Route
                        path="/logout"
                        element={<Logout authToken={authToken} setAuthToken={setAuthToken} />}
                    />
                    <Route path="/home" element={<Home authToken={authToken} />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </LoginProvider>
    );
}

export default App;
