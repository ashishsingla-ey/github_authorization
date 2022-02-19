import { Navigate } from "react-router-dom";
import GithubLogin from "./GithubLogin";
import styles from './Login.module.css';
import Service from "./services/service";

function Login() { 
    const { isAuthenticate } = new Service();
    return (
        isAuthenticate ? <Navigate to="/" /> :
        <div className={styles.container}>
            <GithubLogin styles={styles}/>
        </div>
    );
}

export default Login;