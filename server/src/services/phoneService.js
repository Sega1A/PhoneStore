import { dbConnection } from "../database/connection.js";

export async function getAllPhones() {
  const query =
    "SELECT MODEL, MARC, SPECS, REGISTER_DATE, PHOTO, STATE FROM PHONE WHERE STATE = 1";
  const [phones] = await dbConnection.query(query);
  return phones;
}
