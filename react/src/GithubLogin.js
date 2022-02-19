import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

function GithubLogin(props) {

    const handleClick = (e) => {
        window.location = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`;
    }

    return (
        <Button color="success" variant="contained" onClick={handleClick}><GitHubIcon sx={{ fontSize: 20 }}/>&nbsp;&nbsp;SIGN IN WITH GITHUB</Button>
    );
}

export default GithubLogin;