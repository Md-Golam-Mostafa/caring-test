const client = require("../../db");
const sessions_queries = require("./sessions_queries");

const getSessions = (req, res) => {
    console.log("get Sessions");
    client.query(sessions_queries.getSessions, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const getSessionById = (req, res) => {
    const id = parseInt(req.params.id);
    client.query(sessions_queries.getSessionById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getSessions,
    getSessionById
}