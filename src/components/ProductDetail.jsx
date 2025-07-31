import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProductById } from "../api";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="p-6 text-center text-xl">Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Optional Image Placeholder */}
        <div className="flex justify-center items-center bg-gray-100 rounded-xl h-72">
          <span className="text-gray-400 text-xl">Image Placeholder</span>
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-blue-700">{product.name}</h1>
          <p className="text-gray-600 text-lg">
            Category:{" "}
            <span className="font-medium text-black">{product.category}</span>
          </p>
          <p className="text-gray-600 text-lg">
            Department:{" "}
            <span className="font-medium text-black">{product.department}</span>
          </p>
          <p className="text-3xl font-extrabold text-green-600 mt-4">
            ₹{product.retail_price}
          </p>

          <div className="pt-4 border-t border-gray-200 space-y-2">
            <p className="text-gray-500">
              Brand:{" "}
              <span className="font-semibold text-black">{product.brand}</span>
            </p>
            <p className="text-gray-500">
              SKU:{" "}
              <span className="font-semibold text-black">{product.sku}</span>
            </p>
          </div>

          <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
