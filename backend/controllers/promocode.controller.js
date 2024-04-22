const db = require("../database/db");

class PromocodeController {
    async createPromocode(req, res) {
        const {title, sale} = req.body;

        try {
            const newPromo = await db.query(`INSERT INTO promocode (title, sale, isActivated) values ($1, $2, $3) RETURNING *`, [title, sale, false]);

            res.send(newPromo.rows);
        } catch (err) {
            res.send(err);
        }
    }

    async getAllPromocodes(req, res) {
        const promocodes = await db.query(`SELECT * FROM promocode`);

        res.send(promocodes.rows);
    }

    async getPromocodeByInput(req, res) {

        const {title} = req.query;

        try {
            const promocode = await db.query(`SELECT * FROM promocode where title = $1`, [title]);

            res.send(promocode.rows[0]);

        } catch (err) {
            res.send(err);
        }

    }

    async usePromocode(req, res) {
        const {author_id, id} = req.body;
        try {

            const promocode = await db.query(`UPDATE promocode set author_id = $1, isActivated = $2 where id = $3 RETURNING *`, [author_id, true, id]);
            await db.query('UPDATE userS set sale = $1 where id = $2 RETURNING *', [promocode.rows[0].sale, author_id]);

            res.send(promocode.rows);

        } catch (err) {
            res.send(err);
        }
    }

    async getUserPromocodes(req, res) {
        const {author_id} = req.query;

        const promocodes = await db.query(`SELECT * FROM promocode where author_id = $1 `, [author_id]);

        res.send(promocodes.rows);
    }
}

module.exports = new PromocodeController();