import winston from 'winston';

import App from './app';

const port = parseInt(process.env.PORT) || 3000;
const app = new App();

app.listen(port).then(() => winston.info(`Server running on port ${port}`));
