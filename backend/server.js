const express = require(`express`);
const cors = require(`cors`);
const app = express();
const port = 3000;
const userRouter = require(`./routes/user.route`);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});

app.use(cors());
app.use(express.json());

app.use(`/api`, userRouter);