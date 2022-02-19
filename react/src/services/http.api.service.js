export default class HttpApi {

    headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };

    getToken(code) {
        return fetch(`${process.env.REACT_APP_API_SERVER}/token?code=${code}`, {
            method: 'get',
            headers: this.headers
        }).then(res => res.json());
    }
}
