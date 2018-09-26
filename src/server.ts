import winston from 'winston';

import App from './app';

const port = parseInt(process.env.PORT) || 3000;
const app = new App();

app.server.listen(port, () => winston.info(`Server running on port ${port} ...`));
app.connectToDatabase().then(() => winston.info('Connected to database ...'));
