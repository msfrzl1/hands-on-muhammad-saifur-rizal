import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const getProductsData = () => {
    return axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <>
      <div className="products">
        {products.map((product) => {
          return (
            <div key={product.id}>
              <div className="card">
                <img src={product.image} alt="image" />
                <h1>{product.title}</h1>
                <p>{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
