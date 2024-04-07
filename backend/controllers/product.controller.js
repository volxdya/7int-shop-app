const db = require(`../database/db`);

class ProductController {
    async createProduct(req, res) {
        const {
            shop_id,
            title,
            descriptionProduct,
            avatarProduct,
            count,
            price
        } = req.body;

        const newProduct = await db.query(`INSERT INTO product (title, shop_id, descriptionProduct, avatarProduct, count, price) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [title, shop_id, descriptionProduct, avatarProduct, count, price]);

        res.send(newProduct.rows[0]);
    }

    async getAllProducts(req, res) {
        const products = await db.query(`SELECT * FROM product`);
        res.send(products);
    }

    async getOneProduct(req, res) {
        const { id } = req.query;

        const product = await db.query(`SELECT * FROM product where id = $1`, [id]);

        res.send(product.rows);
    }

    async updateProduct(req, res) {
        const { title, descriptionProduct, avatarProduct, id, price, count } = req.body;

        const product = await db.query(`UPDATE product set title = $1, descriptionProduct = $2, avatarProduct = $3, price = $4, count = $5 where id = $6 RETURNING *`, [title, descriptionProduct, avatarProduct, price, count, id]);

        res.send(product.rows[0]);
    }

    async deleteProduct(req, res) {
        const { id } = req.query;

        await db.query('DELETE FROM reviewProduct WHERE product_id = $1', [id]);

        const result = await db.query('DELETE FROM product WHERE id = $1', [id]);

        res.send(result);
    }
}

module.exports = new ProductController();