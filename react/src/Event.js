import { useEffect, useState } from "react";
import DataTable from "./common/DataTable";
import GitHubAPI from "./services/github.api.service";
import Service from "./services/service";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function Events(props) {
    const { owner, repo } = useParams();
    const [events, setEvents] = useState([]);
    const githubAPI = new GitHubAPI();
    const service = new Service();

    const columns = [{
            id: 'id',
            label: 'Id'
        }, {
            id: 'type',
            label: 'Type'
        }, {
            id: 'created_at',
            label: 'Created At'
        }
    ];

    useEffect(()=>{
        init();
    }, [owner, repo]);

    async function init() {
        try {
            const {data} = await githubAPI.fetchNetworkEventsByRepo(owner, repo);
            console.log(data);
            setEvents(data);
        } catch(e) {
            console.log(e.message);
            e.status === 401 && service.logout();
            setEvents([]);
        }
    }

    return (
        <div className="container">
            <div className="top-header">
                <Link to='/'>Back</Link>
                <h3>Network Events</h3>
                <Button variant="text" onClick={e=>service.logout()}>Logout</Button>
            </div>
            <DataTable rows={events} columns={columns}/>
        </div>
    );
}

export default Events;