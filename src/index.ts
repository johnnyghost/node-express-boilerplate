import app from './config/Express';

const port: any = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`);
});
