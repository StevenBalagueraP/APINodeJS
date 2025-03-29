import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express()
const port = 3000;
const STATUS = {
    SUCCESS : 'OK',
    FAILURE : 'NO'
}

app.use(express.json());

// localhost:3000/
app.get('/', (req, res) => {
    res.status(StatusCodes.OK);
    res.send('Hello you!')
})

app.post('/add', (req, res) => {
    const data = []
    const { body } = req;

    if (!body.name){
        return res.status(StatusCodes.BAD_REQUEST).send({
            status: STATUS.FAILURE,
            data: 'Name is Required',
        })
    }
    data.push(req.body);
    res.status(StatusCodes.CREATED).send({
        status: STATUS.SUCCESS,
        data,
    });
})

app.listen(port, () => {
    console.log(`Server started on port ${port} on http://localhost:${port}`);
});