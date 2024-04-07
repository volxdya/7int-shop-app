const db = require('../database/db');

const jwt = require(`jsonwebtoken`);
const DEV_KEY = "DEV_KEY";


class UserController {
    async createUser(req, res) {
        const { firstname, lastname, passwordUser, loginUser } = req.body;
        const newUser = await db.query(`INSERT INTO userS (firstname, lastname, loginUser, passwordUser) values ($1, $2, $3, $4) RETURNING *`, [firstname, lastname, loginUser, passwordUser])
        res.send(newUser.rows[0]);
    }

    async getUser(req, res) {
        const id = req.query.id;
        const user = await db.query(`SELECT * FROM userS where id = $1`, [id]);

        res.send(user.rows);
    }

    async getAllUsers(req, res) {
        const users = await db.query(`SELECT * FROM userS`);

        res.send(users.rows);
    }

    async authentication(req, res) {
        const { loginUser, passwordUser } = req.body;

        const user = await db.query(`SELECT * FROM userS where loginUser = $1 and passwordUser = $2`, [loginUser, passwordUser]);

        const token = jwt.sign(({
            loginUser: user.firstname,
            passwordUser: user.lastname
        }), DEV_KEY);

        res.send({ token: token });
    }

    async updateUser(req, res) {
        const { loginUser, passwordUser, avatarUser, id } = req.body;

        const user = await db.query(`UPDATE userS set loginUser = $1, passwordUser = $2, avatarUser = $3 where id = $4 RETURNING *`, [loginUser, passwordUser, avatarUser, id]);

        res.send(user.rows);
    }

    async deleteUser(req, res) {
        const { id } = req.query;
        const shop = await db.query(`SELECT * FROM shop where user_id = $1`, [id]);
        await db.query(`DELETE FROM product WHERE shop_id = $1`, [shop.rows[0].id]);

        await db.query('DELETE FROM reviewProduct WHERE author_id = $1', [id]);

        await db.query('DELETE FROM shop WHERE user_id = $1', [id]);

        const result = await db.query('DELETE FROM userS WHERE id = $1', [id]);

        res.send(result.command);
    }
}

module.exports = new UserController();