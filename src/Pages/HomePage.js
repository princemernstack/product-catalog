import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Components/SearchBar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const HomePage = () => {
  // State variables
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/categories`);
      setCategories(response.data);
      setLoading(false); 
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Product Catalog React App</h1>
      <p>React Task: Prince Akabari</p>
      {/* Search Bar */}
      <SearchBar />

      {/* Categories */}
      <h3>Available Categories</h3>
      {loading ? (
        // Show spinner while loading
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "300px" }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        // Render categories once data is fetched
        <ul className="list-group mb-4">
          {categories.map((category) => (
            <li key={category} className="list-group-item">
              <Link
                className="text-capitalize text-decoration-none"
                to={`/products/${category}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
