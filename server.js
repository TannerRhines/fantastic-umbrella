const express = require('express');
const routes = require('./routes');
// import sequelize connection

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);






// sync sequelize models to the database, then turn on the server

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

// commented out and replace with sequelize.sync ^




// if force is set to true, sequelize will drop existing tables and recreate them, which can lead to data loss

sequelize.sync({ force: false }).then(() => {
  console.log(`App listening on port ${PORT}!`);
});