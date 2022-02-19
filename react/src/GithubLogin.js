function GithubLogin(props) {

    const handleClick = (e) => {
        window.location = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`;
    }

    return (
        <button className={props.styles.btn} onClick={handleClick}>SIGN IN WITH GITHUB</button>
    );
}

export default GithubLogin;