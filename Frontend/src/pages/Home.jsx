import { useEffect, useState } from "react";
import axios from "axios";

function Home({ onAddToCart }) {
  const [services, setServices] = useState([]);

useEffect(() => {
  axios.get("https://service-based-e-commerce-website-2.onrender.com/services")
    .then((res) => {
      console.log(res);
      
      setServices(res.data);
    })
    .catch((err) => console.error(err));
}, []);


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Available Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-green-600 font-bold">₹{service.price}</p>
            <button
              className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
              onClick={() => onAddToCart(service)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
