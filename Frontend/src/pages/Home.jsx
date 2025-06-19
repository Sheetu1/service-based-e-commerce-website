import services from "../services";
import ServiceCard from "../components/ServiceCard";

function Home({ onAddToCart }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
