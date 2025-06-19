import services from "../services";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";

function Home() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (service) => {
    setCart([...cart, service]);
    alert(`${service.name} added to cart!`);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Available Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
