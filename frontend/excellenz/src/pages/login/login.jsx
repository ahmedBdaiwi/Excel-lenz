import "../../styles/pages/login/login.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login({  isLogin, setIsLogin }) {
    const navigate = useNavigate();

    return (
        <div className="login-container">
        <h2>Login</h2>
        <input type="text" placeholder="Benutzername" />
        <input type="password" placeholder="Passwort" />
        <button>Einloggen</button>
        <p onClick={() => navigate("/register")} className="switch-text">
            Noch kein Account? Registrieren
        </p>
        </div>
    );
}

const handleLogin = async () => {
    const username = document.querySelector("input[type='text']").value;
    const password = document.querySelector("input[type='password']").value;

    
}