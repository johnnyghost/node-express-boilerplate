import express from 'express';

const app: express.Application = express();
const port: any = process.env.PORT || 3000;

app.use('/welcome', (req, res) => res.send('Hello Worlds!'));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
