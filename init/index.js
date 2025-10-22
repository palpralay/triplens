const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/triplens";

async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: new mongoose.Types.ObjectId("68f870c0f29adb30de4207db"),
  }));

  await Listing.insertMany(initData.data);
  console.log("Database initialized ✅");
};

initDB();