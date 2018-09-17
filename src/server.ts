import winston from 'winston';

import App from './app';

const PORT = parseInt(process.env.PORT) || 3000;
const app = new App();

app.listen(PORT).then(() => winston.info(`Server running on port ${PORT}`));
