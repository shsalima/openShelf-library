import mongoose from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI!;

export async function connectDB() {
//   console.log(MONGODB_URI);

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Error:", error);
    throw error;
  }
}
