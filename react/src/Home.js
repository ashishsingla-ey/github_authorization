import { useEffect, useState } from "react";
import DataTable from "./common/DataTable";
import GitHubAPI from "./services/github.api.service";
import Service from "./services/service";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function Home(props) {
    const navigate  = useNavigate();
    const [myRepos, setMyRepos] = useState([]);
    const githubAPI = new GitHubAPI();
    const service = new Service();
    const handleAction = (e) => {
        const {name, owner: {login}} = e;
        navigate(`/event/${login}/${name}`);
    }

    const columns = [{
            id: 'name',
            label: 'Name'
        }, {
            id: 'url',
            label: 'URL'
        }, {
            id: 'private',
            label: 'Private'
        },{
            id: 'getEvent',
            label: 'Action',
            type: 'button',
            buttonName: 'View Event',
            onClick: handleAction
        }
    ]

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
        <div className="container">
            <div className="top-header">
                <div></div>
                <h3>My Repositories</h3>
                <Button variant="text" onClick={e=>service.logout()}>Logout</Button>
            </div>
            <DataTable rows={myRepos} columns={columns}/>
        </div>
    );
}

export default Home;