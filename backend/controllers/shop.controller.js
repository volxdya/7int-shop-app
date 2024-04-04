const db = require(`../database/db`);

class ShopController {
    async createShop(req, res) {
        const { title, user_id } = req.body;

        const newShop = await db.query(`INSERT INTO shop (title, user_id, descriptionShop, avatarShop) values ($1, $2, $3, $4) RETURNING *`, [title, user_id, "", ""]);
        res.send(newShop.rows[0]);
    }

    async getAllShops(req, res) {
        const shops = await db.query(`SELECT * FROM shop`);
        res.send(shops.rows);
    }

    async getOneShop(req, res) {
        const { id } = req.query;

        const oneShop = await db.query(`SELECT * FROM shop where id = $1`, [id]);

        res.send(oneShop.rows);
    }
}

module.exports = new ShopController();