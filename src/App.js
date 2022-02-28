import { useState, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./store/actions/countActions";

import { addToCart, removeFromCart } from "./store/actions/cartAction";

const App = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    URL = "https://fakestoreapi.com/products";

    let res = await fetch(URL);

    let products = await res.json();

    setProducts(products);
  };

  // console.log(products);
  // const getCount = useSelector((state) => state.count);
  const getCartItem= useSelector((state)=>state.cart)
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={getProducts}>Fetch products</button>

      <div>
        {products &&
          products.map((product) => {
            return (
              <div key={product.id} style={{ margin: "12px" }}>
                <span style={{ margin: "4px" }}>{product.id + "."}</span>
                {product.title}
                <button
                  style={{ margin: "4px" }}
                  onClick={() => {
                    dispatch(addToCart(product.id));
                  }}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
      </div>

{
  getCartItem.cart.length === 0 ?  "": <h1>cart Item</h1> 
}
      

      <div>
              {getCartItem && getCartItem.cart.map((id)=>{
                return (<div style={{ margin: "4px" }} key={id}>
                     {products[id].title}
                 
                     <button
                  style={{ margin: "4px" }}
                  onClick={() => {
                    dispatch(removeFromCart(id));
                  }}
                >
                  remove from cart
                </button>

                </div>)
              })}
      </div>
    </div>
  );
};

export default App;
