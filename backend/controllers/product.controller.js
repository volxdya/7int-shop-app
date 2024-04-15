const db = require(`../database/db`);

class ProductController {
    async createProduct(req, res) {
        const {
            shop_id,
            title,
            descriptionProduct,
            avatarProduct,
            price
        } = req.body;

        try {
            const newProduct = await db.query(`INSERT INTO product (title, shop_id, descriptionProduct, avatarProduct, price) values ($1, $2, $3, $4, $5) RETURNING *`, [title, shop_id, descriptionProduct, avatarProduct, price]);

            res.send(newProduct.rows[0]);
        } catch (err) {
            res.sendStatus(400);
        }
    }

    async getAllProducts(req, res) {
        const products = await db.query(`SELECT * FROM product`);
        res.send(products);
    }

    async getOneProduct(req, res) {
        const {id} = req.query;

        try {
            const product = await db.query(`SELECT * FROM product where id = $1`, [id]);

            res.send(product.rows);
        } catch (err) {
            res.sendStatus(404);
        }
    }

    async updateProduct(req, res) {
        const {title, descriptionProduct, avatarProduct, id, price, count} = req.body;

        try {
            const product = await db.query(`UPDATE product set title = $1, descriptionProduct = $2, avatarProduct = $3, price = $4, count = $5 where id = $6 RETURNING *`, [title, descriptionProduct, avatarProduct, price, count, id]);

            res.send(product.rows[0]);
        } catch (err) {
            res.sendStatus(400);
        }
    }

    async deleteProduct(req, res) {
        const {id} = req.query;

        try {
            await db.query('DELETE FROM reviewProduct WHERE product_id = $1', [id]);

            const result = await db.query('DELETE FROM product WHERE id = $1', [id]);

            res.send(result);
        } catch (err) {
            res.sendStatus(400);
        }
    }

    async getProductShop(req, res) {
        const {shop_id} = req.query;

        const products = await db.query(`SELECT * FROM product where shop_id = $1`, [shop_id]);

        res.send(products.rows);
    }
}

module.exports = new ProductController();