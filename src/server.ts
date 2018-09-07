import App from "./app";

const PORT = parseInt(process.env.PORT) || 3000;
const app = new App();

app.listen(PORT, () => console.log(`Running server on port ${PORT} ...`));
