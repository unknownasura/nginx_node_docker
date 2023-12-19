const express = require("express");
const app = express();
const port = 3000;

const mysql = require("mysql2/promise");

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "appdb",
});

app.get("/", async (req, res) => {
  const title = "<h1>Full cycle Rocks!</h1>\n";
  const beginOl = "<ol>\n";
  const endOl = "</ol>\n";
  let listLi = "";

  const conn = await connection;
  conn.execute(`INSERT INTO people(name) VALUES ("People")`);
  const [rows, fields] = await conn.execute(
    `SELECT * FROM people`
  );

  for (let result of rows) {
    listLi += `<li>${result.name}</li>\n`;
  }

  const completeHtml = title + beginOl + listLi + endOl;
  res.send(completeHtml);
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});

