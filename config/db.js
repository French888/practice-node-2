const { connect } = require("mongoose");

const connectDB = async () => {
  const DB = await connect(process.env.MONGO_DB_URI);
  console.log(
    `MongoBD are connected on PORT: ${DB.connection.port}, NAME: ${DB.connection.name} HOST: ${DB.connection.host}`
  );
};
module.exports = connectDB;
