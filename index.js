const sql = `SELECT T1.*
FROM data T1
WHERE NOT EXISTS(
   SELECT 'NEXT'
   FROM data T2
   WHERE T2.nationality = T1.nationality
   AND T2.nationality > T1.nationality
)`;

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "den1.mysql4.gear.host",
  user: "visainfo",
  password: "Nb10_ri~P8og",
  database: "visainfo"
});

con.connect(err => {
  if (err) throw err;
  console.log("Connected!");

  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
