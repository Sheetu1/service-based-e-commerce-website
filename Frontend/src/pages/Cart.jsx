function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="border p-3 rounded">
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>₹{item.price}</p>
            </div>
          ))}
          <div className="mt-4 text-xl font-bold">
            Total: ₹{total}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
