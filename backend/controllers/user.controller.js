const db = require('../database/db');

class UserController {
    async createUser(req, res) {
        const { firstname, lastname, passwordUser, loginUser } = req.body;
        const newUser = await db.query(`INSERT INTO userS (firstname, lastname, loginUser, passwordUser) values ($1, $2, $3, $4) RETURNING *`, [firstname, lastname, loginUser, passwordUser])
        res.send(newUser.rows[0]);
    }
}

module.exports = new UserController();