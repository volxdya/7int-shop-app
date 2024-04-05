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
}

module.exports = new ProductController();