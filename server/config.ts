import dotenv from "dotenv";

const { NODE_ENV } = process.env;
let path = ".env";
if (NODE_ENV && ["staging", "production"].includes(NODE_ENV))
  path = `.env.${NODE_ENV}`;

dotenv.config({ path });

const MONGO_USERNAME = process.env.MONGO_USERNAME || "";
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || "";
const MONGO_DATABASE = process.env.MONGO_DATABASE || "";
const MONGO_SERVER = process.env.MONGO_SERVER || "";

const MONGO_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_SERVER}/${MONGO_DATABASE}?retryWrites=true&w=majority`;
const SERVER_PORT = process.env.SERVER_PORT
  ? Number(process.env.SERVER_PORT)
  : 3030;
const SERVER_URL = process.env.SERVER_URL
// const REDISHOST = process.env.REDISHOST;
// const REDISPASSWORD = process.env.REDISPASSWORD || null;
// const REDISPORT = process.env.REDISPORT;

export const config = {
  mongo: {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    database: MONGO_DATABASE,
    url: MONGO_URL,
  },
  server: {
    url: SERVER_URL,
    port: SERVER_PORT,
  },
  //   redis: {
  //     url: `redis://${REDISHOST}:${REDISPORT}`,
  //     password: REDISPASSWORD === null ? "" : REDISPASSWORD,
  //   },
};
