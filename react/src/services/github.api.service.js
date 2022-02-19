import { Octokit } from "@octokit/rest";

export default class GitHubApi {
    octokit = new Octokit({ auth: localStorage.getItem('access_token') });

    fetchRepos() {
        return this.octokit.request("GET /user/repos");
    }

    fetchEventsByRepo(owner, repo) {
        return this.octokit.request('GET /repos/{owner}/{repo}/events', {
            owner, 
            repo
        });
    }

    fetchNetworkEventsByRepo(owner, repo) {
        return this.octokit.request('GET /networks/{owner}/{repo}/events', {
            owner, 
            repo
        });
    }

}