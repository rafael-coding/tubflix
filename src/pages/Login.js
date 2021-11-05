import { Link } from "react-router-dom";

function Login(){
    return (
        <>
            <h1>Login</h1>
            <Link to="/home">home</Link>
            <Link to="/cadastro">cadastro</Link>
        </>
    )

}

export default Login;