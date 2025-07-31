import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((res) => setProducts(res.data.data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between border"
          >
            {/* Image Placeholder or Future Product Image */}
            <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-gray-400 text-sm">Image Placeholder</span>
            </div>

            {/* Product Info */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 truncate mb-1">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                Category: {product.category}
              </p>
              <p className="text-sm text-gray-500 mb-2">
                Brand: {product.brand}
              </p>
              <p className="text-xl font-bold text-green-600">
                ₹{product.retail_price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
