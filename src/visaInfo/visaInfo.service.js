const db = require("../helpers/db");

function getByNationality(nationality = "") {
  const sqlQuery = `
  SELECT country, visatype, duration, note 
  FROM restrictions 
  WHERE nationality = '${nationality}'`;

  const getInfoPromise = new Promise((resolve, reject) => {
    db.query(sqlQuery, (error, info) => {
      if (error) reject(error);
      resolve(info);
    });
  });

  return getInfoPromise;
}

async function getByNatAndCountry(nationality = "", country = "") {
  const sqlQuery = `
    SELECT nationality, country, visatype, duration, note 
    FROM restrictions 
    WHERE nationality = '${nationality}'
    AND country = '${country}'`;

  const getInfoPromise = new Promise((resolve, reject) => {
    db.query(sqlQuery, (error, info) => {
      if (error) reject(error);
      resolve(info);
    });
  });

  return getInfoPromise;
}

module.exports = {
  getByNationality,
  getByNatAndCountry
};
