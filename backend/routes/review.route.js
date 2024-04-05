const ReviewController = require(`../controllers/review.controller`);

const Router = require(`express`);
const router = new Router();


router.post(`/create_review`, ReviewController.createReview);
router.get(`/get_reviews`, ReviewController.getReviews);

module.exports = router;