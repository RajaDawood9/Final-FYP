const { Client } = require("pg");

const pool = new Client({
  host: "localhost", 
  port: 5432, 
  user: "postgres", 
  password: "admin123", 
  database: "postgres",
});
pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err.stack));
  module.exports=pool;

