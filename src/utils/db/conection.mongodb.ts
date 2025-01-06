import mongoose from "mongoose";

const Conexiondb = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI as string)
      .then(() => console.log("Connected to MongoDB Atlas"))
      .catch((error) => console.error("Error connecting to MongoDB:", error));
  } catch (error: any) {
    console.error("Connection error:", error);
  }

  mongoose.set("strictQuery", true);
};

export default Conexiondb;
