const db = require(`../database/db`);

class ShopController {
    async createShop(req, res) {
        const { title, user_id, descriptionShop, avatarShop } = req.body;

        const newShop = await db.query(`INSERT INTO shop (title, user_id, descriptionShop, avatarShop) values ($1, $2, $3, $4) RETURNING *`, [title, user_id, descriptionShop, avatarShop]);
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

    async updateShop(req, res) {
        const { title, descriptionShop, avatarShop, id } = req.body;

        const user = await db.query(`UPDATE shop set title = $1, descriptionShop = $2, avatarShop = $3 where id = $4 RETURNING *`, [title, descriptionShop, avatarShop, id]);

        res.send(user.rows);
    }

    async deleteShop(req, res) {
        const { id } = req.query;
        const product = await db.query('SELECT * FROM product where shop_id = $1', [id]);

        await db.query('DELETE FROM reviewProduct WHERE product_id = $1', [product.rows[0].id]);
        await db.query('DELETE FROM product WHERE shop_id = $1', [id]);

        const result = await db.query('DELETE FROM shop WHERE id = $1', [id]);

        res.send(result);
    }

}

module.exports = new ShopController();