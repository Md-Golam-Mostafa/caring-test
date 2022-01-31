const client = require("../../db");
const users_queries = require("./users_queries");

const getUsers = (req, res) => {
    console.log("get Users");
    client.query(users_queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}


const addUser = (req, res) => {
    const { user_id, user_name, full_name, email, password_hash, avatar, phone, address, city, country, membership_level } = req.body;
    console.log(user_id, user_name, full_name, email, password_hash, avatar, phone, address, city, country, membership_level);
    // check if email exists
    client.query(users_queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists");
        }
        else {
            // add user to db
            client.query(users_queries.addUser, [user_id, user_name, full_name, email, password_hash, avatar, phone, address, city, country, membership_level], (error, results) => {
                if (error) throw error;
                res.status(201).send("User Created Successfully.");
            });
        }
    });
}


const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    client.query(users_queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    client.query(users_queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database");
        }
        else {
            client.query(users_queries.deleteUser, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("User deleted successfully");
            })
        }
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { user_name, full_name, email, password_hash, avatar, phone, address, city, country, membership_level } = req.body;
    client.query(users_queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send("User does not exist in the database");
        }
        else {
            client.query(users_queries.updateUser, [user_name, full_name, email, password_hash, avatar, phone, address, city, country, membership_level, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("User updated successfully");
            })
        }
    })
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser
}