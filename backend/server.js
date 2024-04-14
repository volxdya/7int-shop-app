const express = require(`express`);
const cors = require(`cors`);
const app = express();
const port = 3005;
const userRouter = require(`./routes/user.route`);
const shopRouter = require(`./routes/shop.route`);
const productRouter = require(`./routes/product.route`);
const reviewRouter = require(`./routes/review.route`);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());

app.use(`/api`, userRouter);
app.use(`/api`, shopRouter);
app.use(`/api`, productRouter);
app.use(`/api`, reviewRouter)