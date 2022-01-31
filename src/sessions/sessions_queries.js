const getSessions = "SELECT * FROM sessions";
const getSessionById = "SELECT * FROM sessions WHERE id = $1";

module.exports = {
    getSessions,
    getSessionById
}