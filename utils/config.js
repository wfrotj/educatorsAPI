import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const MONGODBURI = process.env.MONGODBURI;
const SECRET = process.env.SECRET;

export default {
  PORT,
  MONGODBURI,
  SECRET,
};
