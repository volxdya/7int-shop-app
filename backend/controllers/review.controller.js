const db = require('../database/db');

class ReviewController {
    async createReview(req, res) {
        const { product_id, photo, title, author_id } = req.body;

        try {
            const newReview = await db.query(`INSERT INTO reviewProduct (author_id, product_id, title, photo) values ($1, $2, $3, $4) RETURNING *`, [author_id, product_id, title, photo]);

            res.send(newReview.rows);
        } catch (err) {
            res.sendStatus(400);
        }
    }

    async getReviews(req, res) {
        const { product_id } = req.query;

        const reviews = await db.query(`SELECT * FROM reviewProduct where product_id = $1`, [product_id]);

        res.send(reviews.rows);
    }
}

module.exports = new ReviewController();