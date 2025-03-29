import express from 'express';

const app = express()
const port = 3000;

// localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello you!')
})

app.listen(port, () => {
    console.log(`Server started on port ${port} on http://localhost:${port}`);
});