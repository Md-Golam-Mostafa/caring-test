const getAgents = "SELECT * FROM agents";
const getAgentById = "SELECT * FROM agents WHERE id = $1";

module.exports = {
    getAgents,
    getAgentById
}