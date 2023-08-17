const app = require("./app");
const db = require("./db.js");
db.conn.sync({ force: false }).then(() => {
  app.listen(3000, () => {
    console.log("escuchando en puerto 3000");
  });
});
