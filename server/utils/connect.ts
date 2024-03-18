import mongoose from "mongoose";
import { config } from "../config";

async function connect() {
  try {
    mongoose.set({ strictQuery: true });
    console.log(config.mongo);
    await mongoose.connect(config.mongo.url);
    console.log('DB Connected')
  } catch (error) {
    console.log("Could not connect to db")
    process.exit(1);
  }
}

export { connect };
