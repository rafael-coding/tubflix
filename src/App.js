import { BrowserRouter, Routes, Route} from "react-router-dom";
import {React, useState, useEffect} from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import './styles/Global.css';



function App() {
  // const navigate = useNavigate();
  
  const [authToken, setAuthToken] = useState(false);

  // const authRoutes = () => {
  //   if (authToken === false){
  //     navigate('/', { replace: true })
  //   }
  // }


  
  useEffect(() => {
    console.log(authToken);
  });

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login authToken={authToken} setAuthToken={setAuthToken}/>} />
            <Route path="/cadastro" element={<Register />} /> 
            <Route path="/logout" element={<Logout authToken={authToken} setAuthToken={setAuthToken} />} /> 
            <Route path="/home" element={<Home authToken={authToken} />}/> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
