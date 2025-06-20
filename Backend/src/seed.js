const mongoose = require("mongoose");
const Service = require("./models/Service");
require("dotenv").config();

const connectAndSeed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");

    await Service.deleteMany(); 

    const dummyServices = [
      {
        name: "Home Cleaning",
        price: 500,
        description: "Deep clean your entire house",
      },
      {
        name: "Consultation",
        price: 999,
        description: "Expert advice on demand",
      },
      {
        name: "AC Repair",
        price: 1200,
        description: "Fix your cooling systems",
      },
    ];

    await Service.insertMany(dummyServices);
    console.log(" Dummy services inserted");

    process.exit();
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

connectAndSeed();
