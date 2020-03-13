const db = require("./models");

db.categories.findAll().then(results => {
  console.log(results);
});
