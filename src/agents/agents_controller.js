const client = require("../../db");
const agents_queries = require("./agents_queries");

const getAgents = (req, res) => {
    console.log("getAgents");
    client.query(agents_queries.getAgents, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getAgentById = (req, res) => {
    const id = parseInt(req.params.id);
    client.query(agents_queries.getAgentById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getAgents,
    getAgentById

}