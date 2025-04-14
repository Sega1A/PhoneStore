import { dbConnection } from "../database/connection.js";

export async function getAllPhones() {
  const query =
    "SELECT MODEL, MARC, SPECS, REGISTER_DATE, STATE, PRICE, PHOTO FROM PHONE WHERE STATE = 1";
  const [phones] = await dbConnection.query(query);
  return phones;
}

export async function insertPhone(model, marc, specs, registerDate, photo, state, price) {
  const query =
  "INSERT INTO PHONE (MODEL, MARC, SPECS, REGISTER_DATE, PHOTO, STATE, PRICE) VALUES (?,?,?,?,?,?,?);";
  const [response] = await dbConnection.query(query, [model, marc, specs, registerDate, photo, state, price]);
  return response;
}
