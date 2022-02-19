import { Octokit } from "@octokit/rest";

export default class GitHubApi {
    octokit = new Octokit({ auth: localStorage.getItem('access_token') });

    fetchRepos() {
        return this.octokit.request("GET /user/repos");
    }
}