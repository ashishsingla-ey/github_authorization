import React, { useEffect } from 'react';
import { useSearchParams, useNavigate  } from 'react-router-dom';
import HttpApi from './services/http.api.service';
import Service from './services/service';

const Redirection = props =>
{
    const [searchParams] = useSearchParams();
    const navigate  = useNavigate();
    const httpApi = new HttpApi();
    const { logout } = new Service();

    const init = async () => {
        //cors issue so get token from server request
        // fetch(GITHUB_AUTH_ACCESSTOKEN_URL, {
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: {
        //         client_id: CLIENT_ID,
        //         client_secret: CLIENT_SECRET,
        //         code: CODE
        //       }
        // })
        try {
            const res = await httpApi.getToken(searchParams.get("code"));
            localStorage.setItem('access_token',res.access_token);
            navigate("/");
        } catch(e) {
            console.log(e.mesage);
            logout();
        };
    };

    useEffect(()=>{
        const code = searchParams.get("code");
        code && init(); // call if we have the code
    }, []);

    return (
        <div style={styles.redirectionContainer}>
            Please wait while we are redirecting you...
        </div>    
    );
      
}

const styles = {
    redirectionContainer:
    {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export default Redirection;
