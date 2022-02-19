import { useNavigate } from "react-router-dom";

export default class Service {
    navigate  = useNavigate();

    logout() {
        localStorage.clear();
        this.navigate("/login");
    }

    get authToken() {
        return localStorage.getItem('access_token');
    }

    get isAuthenticate() {
        return !!this.authToken;
    }
}