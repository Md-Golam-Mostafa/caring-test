const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE user_id = $1";
const checkEmailExists = "SELECT s FROM users s WHERE s.email = $1";
const addUser = "INSERT INTO users (user_id,user_name,full_name,email,password_hash,avatar,phone,address,city,country,membership_level) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)"
const deleteUser = "DELETE FROM users WHERE user_id = $1";
const updateUser = "UPDATE users SET user_name = $1,full_name = $2, email = $3,password_hash = $4 , avatar = $5, phone = $6, address = $7, city = $8, country = $9, membership_level = $10 WHERE user_id = $11";

module.exports = {
    getUsers,
    getUserById,
    checkEmailExists,
    addUser,
    deleteUser,
    updateUser
}