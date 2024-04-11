const db = require('../database/db');

const jwt = require(`jsonwebtoken`);
const DEV_KEY = "DEV_KEY";


class UserController {
    async createUser(req, res) {
        const { firstname, lastname, passwordUser, loginUser } = req.body;
        const startAvatar = "https://sun9-80.userapi.com/impg/RH628Kuv1cGIgNv2yWAtmZb8aSoxX0IGmGWSaw/CLXMzSiqy7Y.jpg?size=564x564&quality=95&sign=32088835caa526a99ec559215346efda&c_uniq_tag=2lZ4ismg6JmQzFW29jeUAH5RMbF5zEmBDazoqhsH2x8&type=album";
        const newUser = await db.query(`INSERT INTO userS (firstname, lastname, loginUser, passwordUser, avatarUser) values ($1, $2, $3, $4, $5) RETURNING *`, [firstname, lastname, loginUser, passwordUser, startAvatar]);
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
            login: user.rows[0].loginuser,
            avatar: user.rows[0].avataruser,
            id: user.rows[0].id
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