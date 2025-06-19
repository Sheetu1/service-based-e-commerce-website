import axios from "axios";
import { useNavigate } from "react-router-dom";

function loadRazorpayScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

function Checkout({ cartItems }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = async () => {
    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      // 🔹 Step 1: Create order from backend
      const orderRes = await axios.post("http://localhost:5000/create-order", {
        amount: total,
      });

      const { order } = orderRes.data;

      const options = {
        key: "rzp_test_YTxJmECg9DB2Up", // ✅ Your test key
        amount: order.amount,
        currency: order.currency,
        name: "Service Booking",
        description: "Payment for services",
        order_id: order.id, // ✅ Important
        handler: function (response) {
          console.log("✅ Payment successful:", response);
          // 🔁 Redirect to success page
          navigate("/success");
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#1E40AF",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment failed:", err);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="text-red-600">🛒 Cart is empty. Please add services.</p>
      ) : (
        <div>
          <ul className="mb-4 space-y-2">
            {cartItems.map((item, i) => (
              <li key={i} className="border p-3 rounded">
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>

          <div className="font-bold text-xl mb-4">Total: ₹{total}</div>

          <button
            onClick={handlePayment}
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
