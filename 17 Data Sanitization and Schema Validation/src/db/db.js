const mongoose = require("mongoose");

async function connectToDB() {
  try {
    await mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => console.log("✅ Connected to MongoDB successfully"));
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
}

module.exports = connectToDB;
