import React, { useEffect } from 'react';
import { useSearchParams, useNavigate  } from 'react-router-dom';
import HttpApi from './services/http.api.service';
import Service from './services/service';

const Redirection = props =>
{
    const [searchParams] = useSearchParams();
    const code = searchParams.get("code");
    const navigate  = useNavigate();
    const httpApi = new HttpApi();
    const service = new Service();
    
    useEffect(()=>{
        const init = async () => {
            try {
                const res = await httpApi.getToken(code);
                localStorage.setItem('access_token',res.access_token);
                navigate("/");
            } catch(e) {
                console.log(e.mesage);
                service.logout();
            };
        };
        code && init(); // call if we have the code
    }, [code]);

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
