import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Payment Successful!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for booking the service. We’ll contact you shortly.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Home
      </Link>
    </div>
  );
}

export default Success;
