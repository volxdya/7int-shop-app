const db = require(`../database/db`);

class ProductController {
    async createProduct(req, res) {
        const { shop_id, title } = req.body;
        const newProduct = await db.query(`INSERT INTO product (title, shop_id, descriptionProduct, avatarProduct) values ($1, $2, $3, $4) RETURNING *`, [title, shop_id, "", ""]);
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
        const { title, descriptionProduct, avatarProduct, id } = req.body;

        const product = await db.query(`UPDATE product set title = $1, descriptionProduct = $2, avatarProduct = $3 where id = $4 RETURNING *`, [title, descriptionProduct, avatarProduct, id]);

        res.send(product.rows);
    }

    async deleteProduct(req, res) {
        const { id } = req.query;

        await db.query('DELETE FROM reviewProduct WHERE product_id = $1', [id]);

        const result = await db.query('DELETE FROM product WHERE id = $1', [id]);

        res.send(result);
    }
}

module.exports = new ProductController();