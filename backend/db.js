const mongoose = require("mongoose"); // Import mongoose at the top

const MONGO_URI = "mongodb://127.0.0.1:27017/DOCUMENT";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState !== 0) {
      console.log("✅ MongoDB already connected.");
      return;
    }

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully!");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
