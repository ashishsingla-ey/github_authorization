const { Octokit } = require("@octokit/core");


const fetchRepos = async (req, res) => {
    const octokit = new Octokit({ auth: req.headers.authorization });
    try {
        const { data, status } = await octokit.request("GET /user/repos");
        res.status(status).send({data});
    } catch(e) {
        res.status(500).send({error: e.message});
    }
}

module.exports = {
    fetchRepos
}