import mongoose from "mongoose";
const Schema = mongoose.Schema;

export interface LogDocument {
    name: string;
    surname: string;
    gender: string;
    dateOfBirth: string;
    planCode: string;
    premiumPerYear: number;
    paymentFrequency: string;
    cost: number;
}

export interface ILogDocument
  extends LogDocument,
    mongoose.Document {}

const LogDocumentSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    planCode: { type: String, required: true },
    premiumPerYear: { type: Number, required: true },
    paymentFrequency: { type: String, required: true },
    cost: { type: Number, required: true },
  }
);

const Log = mongoose.model<ILogDocument>(
  "Log",
  LogDocumentSchema
);

export default Log;
