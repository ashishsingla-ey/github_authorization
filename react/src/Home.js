import { useEffect, useState } from "react";
import GitHubAPI from "./services/github.api.service";
import Service from "./services/service";

function Home(props) {
    const [myRepos, setMyRepos] = useState([]);
    const githubAPI = new GitHubAPI();
    const service = new Service();

    useEffect(()=>{
        getGithubRepo();
    }, []);

    async function getGithubRepo() {
        try {
            const {data} = await githubAPI.fetchRepos();
            setMyRepos(data);
        } catch(e) {
            console.log(e.message);
            e.status === 401 && service.logout();
            setMyRepos([]);
        }
    }

    return (
        myRepos?.map(r => <div key={r.id}>{r.name}</div>)
    );
}

export default Home;