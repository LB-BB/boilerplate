"use strict";

const PORT = 8000;
const app = require("./server");
const { db } = require("./db");

const init = async () => {
  try {
    await db.sync();
    console.log("db synced");

    app.listen(PORT, () =>
      console.log(`

          Listening on port ${PORT}

          http://localhost:${PORT}/

      `)
    );
  } catch (err) {
    console.log(`There was an error starting up!`, err);
  }
};

init();
