const connectDB = require("./db/db"); 
const Service = require("./models/Service");
require("dotenv").config();

const seedServices = async () => {
  try {
    await connectDB(); 

    const dummyData = [
      {
        name: "Home Cleaning",
        price: 500,
        description: "Deep cleaning for your entire home",
      },
      {
        name: "Online Consultation",
        price: 999,
        description: "Expert consultation on call",
      },
      {
        name: "AC Repair",
        price: 1200,
        description: "Quick AC repair service",
      },
    ];

    await Service.insertMany(dummyData);
    console.log("Dummy services..");

    process.exit();
  } catch (err) {
    console.error( err.message);
    process.exit(1);
  }
};

seedServices();
