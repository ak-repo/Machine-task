import { useSelector, useDispatch } from "react-redux";
import { addToCart, decrement, fetchItems, increment } from "../redux/cart";
import { useEffect } from "react";

const products = [
  { id: 1, name: "Wireless Mouse", price: 25 },
  { id: 2, name: "Mechanical Keyboard", price: 55 },
  { id: 3, name: "Gaming Headset", price: 40 },
  { id: 4, name: "4K Monitor", price: 220 },
  { id: 5, name: "Webcam 1080p", price: 30 },
];

const Product = () => {
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [cartList]);

  const totalCartCount = cartList?.reduce(
    (accu, item) => (accu += item?.quantity),
    0
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛍️ Product List</h2>

      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "1rem" }}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      <hr />

      <h2>🛒 Cart Items ({totalCartCount})</h2>
      <ul>
        {cartList &&
          cartList.map((item, index) => (
            <li key={index}>
              <p>
                {" "}
                {item.name} - ${item.price}
              </p>
              <button onClick={() => dispatch(increment(item?.id))}>+</button>
              <span> {item?.quantity}</span>
              <button onClick={() => dispatch(decrement(item?.id))}>-</button>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Product;
