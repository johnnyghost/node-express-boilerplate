import 'reflect-metadata';
import logger from './common/logger/winston';
import app from './config/Express';

const port: any = process.env.PORT || 3000;

app.listen(port, () => {
  logger.debug(`Listening at http://localhost:${port}/`);
});
