const serverIo = require("./serverConfig");
const { conn } = require("./src/DB_config");

const PORT = process.env.PORT || 3001;

conn
  .sync({ force: false })
  .then(async () => {
    serverIo.listen(PORT, async () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
