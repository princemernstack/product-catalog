import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductPage = () => {
  // State variables
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProduct(); // eslint-disable-next-line
  }, [productId]);

  // Fetch product from API
  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${productId}`
      ); // Update the API endpoint
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "500px" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : product ? (
        <div className="card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="card-img-top"
            style={{ maxWidth: "200px", margin: "auto" }}
          />
          <div className="card-body">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">Price: ${product.price}</p>
            <p className="card-text">Description: {product.description}</p>
            <p className="card-text">Rating: {product.rating}</p>
            <p className="card-text">Brand: {product.brand}</p>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              Home
            </button>
          </div>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductPage;
