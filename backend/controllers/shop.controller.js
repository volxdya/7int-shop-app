const db = require(`../database/db`);

class ShopController {
    async createShop(req, res) {
        const { title, user_id, avatarShop } = req.body;

        try {
            const newShop = await db.query(`INSERT INTO shop (title, user_id, avatarShop) values ($1, $2, $3) RETURNING *`, [title, user_id, avatarShop]);
            res.send(newShop.rows[0]);
        } catch (err) {
            res.sendStatus(400);
        }
    }

    async getAllShops(req, res) {
        const shops = await db.query(`SELECT * FROM shop`);
        res.send(shops.rows);
    }

    async getOneShop(req, res) {
        const { id } = req.query;

        try {
            const oneShop = await db.query(`SELECT * FROM shop where id = $1`, [id]);

            res.send(oneShop.rows[0]);
        } catch (err) {
            res.sendStatus(404);
        }
    }

    async updateShop(req, res) {
        const { title, descriptionShop, avatarShop, id } = req.body;


        try {

            const shop = await db.query(`UPDATE shop set title = $1, descriptionShop = $2, avatarShop = $3 where id = $4 RETURNING *`, [title, descriptionShop, avatarShop, id]);

            res.send(shop.rows);

        } catch (err) {
            res.sendStatus(400);
        }
    }

    async deleteShop(req, res) {
        const { id } = req.query;
        try {
            const product = await db.query('SELECT * FROM product where shop_id = $1', [id]);

            await db.query('DELETE FROM reviewProduct WHERE product_id = $1', [product.rows[0].id]);
            await db.query('DELETE FROM product WHERE shop_id = $1', [id]);

            const result = await db.query('DELETE FROM shop WHERE id = $1', [id]);

            res.send(result);
        } catch (err) {
            res.sendStatus(400);
        }
    }

    async getUserShops(req, res) {
        const { user_id } = req.query;
        try {
            const shops = await db.query(`SELECT * FROM shop where user_id = $1`, [user_id]);

            res.send(shops.rows);
        } catch (err) {
            res.sendStatus(404);
        }
    }
}

module.exports = new ShopController();